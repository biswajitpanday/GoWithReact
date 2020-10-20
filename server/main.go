package main

import (
	"GoWithReact/routers"
	"GoWithReact/utils"
)

func main() {
	r := routers.InitRoute()
	port := utils.EnvVar("SERVER_PORT")
	r.Run(port) // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
