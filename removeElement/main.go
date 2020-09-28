package main

import "fmt"

func removeElement(nums []int, val int) int {
	lengthOfNumbers := len(nums)
	removedCount := 0

	for i := 0; i < lengthOfNumbers; i++ {
		index := i - removedCount

		if nums[index] == val {
			nums = append(nums[:index], nums[index+1:]...)
			removedCount++
		}
	}
	return len(nums)
}

func main() {
	primes := []int{2, 3, 5, 7, 11, 13}
	fmt.Println(removeElement(primes, 3))
}
