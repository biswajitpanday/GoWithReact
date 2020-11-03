package db

import (
	"log"

	"github.com/goonode/mogo"
)

var mongoConnection *mogo.Connection = nil

//ConnectToDatabase connection datbase when application start
func ConnectToDatabase(connectionString string, dbName string) {

	config := &mogo.Config{
		ConnectionString: connectionString,
		Database:         dbName,
	}

	mongoCon, err := mogo.Connect(config)
	if err != nil {
		log.Fatal(err)
	}

	mongoConnection = mongoCon
}
