package utils

import uuid "github.com/nu7hatch/gouuid"

//GenerateForgetPasswordToken ...
func GenerateForgetPasswordToken() (string, error) {
	u, err := uuid.NewV4()
	return u.String(), err
}
