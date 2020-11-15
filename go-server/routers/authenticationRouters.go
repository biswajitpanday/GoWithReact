package routers

import (
	"GoWithReact/controllers"

	"github.com/gin-gonic/gin"
)

func setAuthRouters(router *gin.Engine) {
	authController := new(controllers.AuthController)
	router.Static("/image", "./profilepic")

	auth := router.Group("/auth")
	{
		auth.POST("/login", authController.Login)
		auth.POST("/register", authController.Register)
		auth.POST("/forgetpassword", authController.ForgetPassword)
		// private := auth.Group("/")
		// {
		// 	profileController := new(controllers.ProfileController)
		// 	private.Use(middlewares.Authentication())
		// 	private.POST("/profile/update")
		// 	private.POST("/profile/pic")
		// 	private.GET("/profile/my")
		// }
	}
	router.POST("/register", authController.Register)
}
