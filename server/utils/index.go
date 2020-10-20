package utils

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

//EnvVar function is for read .env file
func EnvVar(key string) string {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	return os.Getenv(key)
}
