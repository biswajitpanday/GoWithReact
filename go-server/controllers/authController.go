package controllers

import (
	"GoWithReact/models/service"
	"GoWithReact/models/viewmodels"
	"net/http"

	"github.com/gin-gonic/gin"
)

//AuthController is for auth login
type AuthController struct{}

//Register ...
func (auth *AuthController) Register(c *gin.Context) {
	var userRegister viewmodels.UserRegister
	if err := c.ShouldBindJSON(&userRegister); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	accountService := service.AccountService{}
	if err := accountService.Register(userRegister); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "User created successfully"})
	return
}

//Login ...
func (auth *AuthController) Login(c *gin.Context) {
	var loginModel viewmodels.LoginModel
	if err := c.ShouldBindJSON(&loginModel); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	accountService := service.AccountService{}
	token, err := accountService.Login(loginModel)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusAccepted, gin.H{"token": token})

}

//ForgetPassword ...
func (auth *AuthController) ForgetPassword(c *gin.Context) {
	var forgetPasswordModel viewmodels.ForgetPasswordModel
	if err := c.ShouldBindJSON(&forgetPasswordModel); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	accountService := service.AccountService{}
	err := accountService.ForgetPassword(forgetPasswordModel)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusAccepted, gin.H{"message": "An email has been sent to your mail address."})

}
