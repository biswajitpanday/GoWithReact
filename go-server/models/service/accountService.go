package service

import (
	"GoWithReact/models/entity"
	"GoWithReact/models/viewmodels"
	"errors"
	"log"
	"time"

	"github.com/globalsign/mgo/bson"
	"github.com/goonode/mogo"
	"golang.org/x/crypto/bcrypt"
)

//AccountService is to handel account related db query
type AccountService struct{}

//Register is to register user
func (accountService *AccountService) Register(register viewmodels.UserRegister) error {

	doc := mogo.NewDoc(entity.Account{}).(*(entity.Account))
	err := doc.FindOne(bson.M{"email": register.Email}, doc)

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(register.Password), bcrypt.MinCost)

	if err == nil {
		log.Fatal(err)
		return errors.New("Already Exist")
	}

	acc := &entity.Account{
		Email:                 register.Email,
		Password:              string(hashPassword),
		EmailVerificationCode: "",
		IsActive:              true,
		IsEmailVerified:       false,
		IsPhoneVerified:       false,
		JoinDate:              time.Now().Unix(),
		Role:                  "talent",
	}

	account := mogo.NewDoc(acc).(*(entity.Account))
	err = mogo.Save(account)
	return err
}
