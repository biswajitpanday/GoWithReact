package service

import (
	"GoWithReact/models/db"
	"GoWithReact/models/entity"
	"errors"

	"github.com/globalsign/mgo/bson"
	"github.com/goonode/mogo"
)

type AccountService struct{}

//Create is to register user
func (accountService *AccountService) Create() error {

	email := "c@c.com"
	password := "123456"

	conn = db.GetConnection()
	defer conn.Session.Close()
	doc := mogo.NewDoc(entity.Account{}).(*(entity.Account))
	err := doc.FindOne(bson.M{"email": "c@c.com"}, doc)
	if err == nil {
		return errors.New("Already Exist")
	}
	acc := new(entity.Account)
	acc.Email = email
	acc.Password = password

	account := mongo.NewDoc(acc).(*(entity.Account))
	err = mogo.Save(account)
	return err

}
