package main

import (
	"fmt"
)

// Abs returns the absolute value of x.
func Abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func divide(dividend int, divisor int) int {
	if dividend <= -2147483648 && divisor == -1 {
		return 2147483647
	}
	count := 0
	negative := (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)

	absDividend := Abs(dividend)
	absDivisor := Abs(divisor)

	for absDividend >= absDivisor {
		absDividend = absDividend - absDivisor
		count++
	}

	if negative {
		return -count
	}

	return count
}

func main() {
	fmt.Println(divide(10, 3))
	fmt.Println(divide(7, -3))
	fmt.Println(divide(1, 1))
	fmt.Println(divide(-2147483648, -3))
}
