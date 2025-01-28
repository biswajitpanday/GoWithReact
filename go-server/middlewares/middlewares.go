package middlewares

import (
	"GoWithReact/models/service"
	"GoWithReact/utils"
	"fmt"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

// Authentication middleware
func Authentication() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.Request.Header.Get("Authorization")
		if len(authHeader) == 0 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Authentication header is missing"})
			return
		}

		temp := strings.Split(authHeader, "Bearer")

		if len(temp) < 2 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Token"})
		}

		tokenString := strings.TrimSpace(temp[1])
		fmt.Println("Token is : ", tokenString)

		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			secretKey := utils.EnvVar("TOKEN_KEY")
			return []byte(secretKey), nil
		})

		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
			return
		}

		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			email := claims["email"].(string)
			accountService := service.AccountService{}
			account, err := accountService.FindByEmail(email)

			if err != nil {
				c.JSON(http.StatusPaymentRequired, gin.H{"error": "User not found"})
				return
			}

			c.Set("account", account)
			c.Next()
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Token"})
		}
	}
}

// ErrorHandler is for global application Errors
func ErrorHandler(c *gin.Context) {
	c.Next()
	if len(c.Errors) > 0 {
		c.JSON(http.StatusBadRequest, gin.H{"errors": c.Errors})
	}
}
