package service

import (
	"GoWithReact/models/entity"
	"GoWithReact/models/viewmodels"
	"GoWithReact/repository"
	"GoWithReact/utils"
	"errors"
	"log"
	"time"

	"github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
)

//AccountService is to handel account related db query
type AccountService struct{}

//Register is to register user
func (accountService *AccountService) Register(register viewmodels.UserRegister) error {

	accountRepository := new(repository.AccountRepository)

	_, err := accountRepository.FindByEmail(register.Email)

	if err == nil {
		return errors.New("Email Already Exists")
	}

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(register.Password), bcrypt.MinCost)

	if err == nil {
		log.Fatal(err)
		return errors.New("Internal Server Error")
	}

	acc := &entity.Account{
		Email:                 register.Email,
		Password:              string(hashPassword),
		EmailVerificationCode: "",
		IsActive:              true,
		IsEmailVerified:       false,
		IsPhoneVerified:       false,
		JoinDate:              time.Now().Unix(),
		Role:                  "user",
	}

	//account, createError :=
	accountRepository.Create(acc)

	// if createError == nil {
	// 	return account
	// }

	return err
}

//Login ...
func (accountService *AccountService) Login(loginModel viewmodels.LoginModel) (string, error) {
	accountRepository := new(repository.AccountRepository)
	user, mongoErr := accountRepository.FindByEmail(loginModel.Username)

	if mongoErr != nil {
		return "", errors.New("Invalid Username or Password!")
	}

	passwordErr := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(loginModel.Password))
	if passwordErr != nil {
		return "", errors.New("Invalid Username or Password")
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": string(user.Email),
	})

	secretKey := utils.EnvVar("TOKEN_KEY")
	tokenString, err := token.SignedString([]byte(secretKey))
	log.Println(tokenString, err)
	return tokenString, err

}
