package repository

import (
	"GoWithReact/models/db"
	"GoWithReact/models/entity"

	"github.com/Kamva/mgm"
	"github.com/globalsign/mgo/bson"
)

//AccountRepository ...
type AccountRepository struct{}

//Create ...
func (accountRepository *AccountRepository) Create(account *entity.Account) (*entity.Account, error) {
	db.Connect()
	err := mgm.Coll(&entity.Account{}).Create(account)
	db.Disconnect()
	return account, err
}

//Update ...
func (accountRepository *AccountRepository) Update(account *entity.Account) (*entity.Account, error) {
	db.Connect()
	err := mgm.Coll(&entity.Account{}).Update(account)
	db.Disconnect()
	return account, err
}

//FindByEmail ...
func (accountRepository *AccountRepository) FindByEmail(email string) (*entity.Account, error) {
	db.Connect()
	accountModel := &entity.Account{}
	coll := mgm.Coll(accountModel)
	var err = coll.FindOne(mgm.Ctx(), bson.M{"email": email}).Decode(accountModel)
	db.Disconnect()
	return accountModel, err
}
