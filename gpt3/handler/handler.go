package handler

import (
	"gpt3/gpt"
	"gpt3/pkg/zap"

	"github.com/gin-gonic/gin"
)

type Data struct {
	Text       string `json:"text"`
	SenderId   string `json:"senderId"`
	ReceiverId string `json:"receiverId"`
}

var logger = zap.InitLogger()

func Handler(c *gin.Context) {
	data := Data{}
	if err := c.BindJSON(&data); err != nil {
		logger.Error(err.Error())
		c.String(500, "Internal Server Error")
		return
	}
	res, err := gpt.RequestGPT(data.Text)
	if err != nil {
		logger.Error(err.Error())
		c.String(500, "Internal Server Error")
		return
	}
	c.String(200, res)
}
