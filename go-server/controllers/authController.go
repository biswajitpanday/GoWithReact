package controllers

import (
	"GoWithReact/models/service"
	"GoWithReact/models/viewmodels"

	"github.com/gin-gonic/gin"
)

//AuthController is for auth login
type AuthController struct{}

//Register is to press register
func (auth *AuthController) Register(c *gin.Context) {
	var userRegister viewmodels.UserRegister
	if err := c.ShouldBindJSON(&userRegister); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	accountService := service.AccountService{}
	accountService.Register(userRegister)
	return
}
