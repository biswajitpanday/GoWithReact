package routers

import (
	"GoWithReact/controllers"

	"github.com/gin-gonic/gin"
)

func setAuthRoute(router *gin.Engine) {
	authController := new(controllers.AuthController)
	router.POST("/register", authController.Register)
}