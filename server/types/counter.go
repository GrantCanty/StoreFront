package types

type Counter struct {
	num int
}

func (c *Counter) Init() {
	c.num = 0
}

func (c *Counter) Add() int {
	c.num++
	return c.num - 1
}

func (c *Counter) Get() int {
	return c.num
}
