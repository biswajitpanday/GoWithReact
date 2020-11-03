package main

import (
	"GoWithReact/models/db"
	"GoWithReact/models/viewmodels"
	"GoWithReact/routers"
	"GoWithReact/utils"
	"bytes"
	"encoding/json"
	"log"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"

	"github.com/gin-gonic/gin"

	"github.com/stretchr/testify/assert"
)

func TestPingRoute(t *testing.T) {
	router := setupRouter()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/ping", nil)
	router.ServeHttp(w, req)

	assert.Equal(t, 200, w.Code)
	assert.Equal(t, "pong", w.Body.String())
}

var router *gin.Engine = nil

func TestMain(m *testing.M) {
	cons := utils.EnvVar("TEST_DB_URI")
	name := utils.EnvVar("TEST_DB")
	db.ConnectToDatabase(cons, name)
	router = routers.InitRoute()
	exitVal := m.Run()
	log.Println("Do stuff after the tests!")
	os.Exit(exitVal)
}

func TestRegister(t *testing.T) {
	registerModel := &viewmodels.UserRegister{
		Email:     "biswajitmailid@gmail.com",
		FirstName: "Biswajit",
		LastName:  "Panday",
		Password:  "123456",
	}
	buff := new(bytes.Buffer)
	json.NewEncoder(buf).Encode(registerModel)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/register", buf)
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
}

func TestB(t *testing.T) {
	log.Println("Test B is running")
}
