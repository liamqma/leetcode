package main

import "fmt"

func strStr(haystack string, needle string) int {
	lengthOfNeedle := len(needle)
	lengthOfHaystack := len(haystack)

	if lengthOfNeedle == 0 {
		return 0
	}

	if lengthOfNeedle > lengthOfHaystack {
		return -1
	}

	for i := 0; i < lengthOfHaystack; i++ {
		if haystack[i] == needle[0] && lengthOfNeedle <= (lengthOfHaystack-i) {
			includes := true
			for j := 1; j < lengthOfNeedle; j++ {
				if haystack[i+j] != needle[j] {
					includes = false
					break
				}
			}
			if includes {
				return i
			}
		}
	}

	return -1
}

func main() {
	fmt.Println(strStr("a", "a"))
}
