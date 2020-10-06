package main

import (
	"fmt"
)

func findSubstring(s string, words []string) []int {
	wordsCount := len(words)
	result := []int{}

	if len(s) == 0 || wordsCount == 0 {
		return result
	}

	wordLength := len(words[0])
	frequencyMap := map[string]int{}

	for _, word := range words {
		_, ok := frequencyMap[word]
		if ok {
			frequencyMap[word] = frequencyMap[word] + 1
		} else {
			frequencyMap[word] = 1
		}
	}

	for i := 0; i <= (len(s) - wordLength*wordsCount); i++ {
		seenMap := map[string]int{}
		for j := 0; j < wordsCount; j++ {
			word := s[i+j*wordLength : i+j*wordLength+wordLength]

			_, wordFound := frequencyMap[word]

			if !wordFound {
				break
			}

			_, wordExistInSeenMap := seenMap[word]
			if wordExistInSeenMap {
				seenMap[word] = seenMap[word] + 1
			} else {
				seenMap[word] = 1
			}

			if seenMap[word] > frequencyMap[word] {
				break
			}

			if j == (wordsCount - 1) {
				result = append(result, i)
			}
		}

	}

	return result
}

func main() {
	fmt.Println(findSubstring("barfoofoobarthefoobarman", []string{"bar", "foo", "the"}))
}
