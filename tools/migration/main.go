package main

import (
	"bytes"
	"fmt"
	"io"
	"log"
	"os"
	"os/exec"
	"path/filepath"
)

func printLine(msg string) {
	println("===============================================")
	fmt.Println(msg)
	println("===============================================")
}

func buildDocs() {
	cmd := exec.Command("npm", "run", "build")
	var stdout, stderr bytes.Buffer
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr
	cmd.Dir = "../../vuepress"
	err := cmd.Run()
	outStr, errStr := string(stdout.Bytes()), string(stderr.Bytes())
	fmt.Printf("out:\n%s\nerr:\n%s\n", outStr, errStr)
	if err != nil {
		log.Fatalf("cmd.Run() failed with %s\n", err)
	}
}

func emptyDir(dir string) {
	printLine("empty dist START")
	err := os.RemoveAll(dir)
	if err != nil {
		log.Fatalf("ERROR: can not remove dir %s\n", err)
	}
	err = os.MkdirAll(dir, 0750)
	if err != nil {
		log.Fatalf("ERROR: can not mkdir %s\n", err)
	}
	printLine("empty dist END")
}

func copyDir(scrDir string, destDir string) {
	entries, err := os.ReadDir(scrDir)
	if err != nil {
		log.Fatalf("ERROR: cannot readdir %s\n", err)
		panic("")
	}
	for _, entry := range entries {
		fPath := filepath.Join(scrDir, entry.Name())
		dPath := filepath.Join(destDir, entry.Name())
		fileInfo, err := os.Stat(fPath)
		if err != nil {
			log.Fatalf("ERROR: cannot get fileInfo %s\n", err)
			panic("")
		}

		if fileInfo.IsDir() {
			err = os.MkdirAll(dPath, 0750)
			if err != nil {
				log.Fatalf("ERROR: can not mkdir %s\n", err)
			}
			copyDir(fPath, dPath)
		} else {
			_, err := copyFile(fPath, dPath)
			if err != nil {
				log.Fatalf("ERROR: cannot copy file %s\n", err)
				panic("")
			}
			fmt.Printf("coped file %s to %s\n", fPath, dPath)
		}
	}
}

func copyFile(src, dst string) (int64, error) {
	sourceFileStat, err := os.Stat(src)
	if err != nil {
		return 0, err
	}

	if !sourceFileStat.Mode().IsRegular() {
		return 0, fmt.Errorf("%s is not a regular file", src)
	}

	source, err := os.Open(src)
	if err != nil {
		return 0, err
	}
	defer source.Close()

	destination, err := os.Create(dst)
	if err != nil {
		return 0, err
	}
	defer destination.Close()
	nBytes, err := io.Copy(destination, source)
	return nBytes, err
}

func mvDocs() {
	relativeDocsPath := "../../docs"
	relativeDistPath := "../../vuepress/docs/.vuepress/dist"
	aDocsPath, err := filepath.Abs(relativeDocsPath)
	if err != nil {
		log.Fatalf("ERROR: cannot abs path %s\n", err)
	}
	aDistPath, err := filepath.Abs(relativeDistPath)
	if err != nil {
		log.Fatalf("ERROR: cannot abs path %s\n", err)
	}
	fmt.Printf("DocsPath: %s\n", aDocsPath)
	fmt.Printf("DistPath: %s\n", aDistPath)
	printLine("build docs START")
	emptyDir(aDocsPath)
	printLine("build docs END")
	printLine("copy dist START")
	copyDir(aDistPath, aDocsPath)
	printLine("copy dist END")
}

func main() {
	// buildDocs()
	mvDocs()
}
