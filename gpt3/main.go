package main

import (
	"gpt3/handler"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.POST("/gpt", handler.Handler)
	if err := r.Run("0.0.0.0:8090"); err != nil {
		println(err.Error())
	}
}
