package main

import (
	"GoWithReact/models/db"
	"GoWithReact/routers"
	"GoWithReact/utils"
)

func main() {
	r := routers.InitRoute()
	port := utils.EnvVar("SERVER_PORT")

	connectionString := utils.EnvVar("DB_CONNECTION_STRING")
	dbName := utils.EnvVar("DB_NAME")
	db.SetConnectionInfo(connectionString, dbName)

	r.Run(port) // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
