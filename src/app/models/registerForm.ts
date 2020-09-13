export class RegisterForm{

  name: string;
  surname: string;
  email: string;
  password: string;
  phoneNumber: string;


  constructor( name: string, surname: string, email: string, password: string, phoneNumber: string) {
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.name = name;
    this.surname = surname;
  }
}
