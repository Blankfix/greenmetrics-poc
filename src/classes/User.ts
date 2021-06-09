interface UserFields {
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class User {
  private fields: UserFields;
  private _isConnected: boolean;

  constructor(fields: UserFields, isConnected: boolean) {
    this.fields = fields;
    this._isConnected = isConnected;
  }

  get firstName(): string {
    return this.fields.firstName;
  }

  set firstName(value: string) {
    this.fields.firstName = value;
  }

  get lastName(): string {
    return this.fields.lastName;
  }

  set lastName(value: string) {
    this.fields.lastName = value;
  }

  get company(): string {
    return this.fields.company;
  }

  set company(value: string) {
    this.fields.company = value;
  }

  get password(): string {
    return this.fields.password;
  }

  set password(value: string) {
    this.fields.password = value;
  }

  get email(): string {
    return this.fields.email;
  }

  set email(value: string) {
    this.fields.email = value;
  }

  get isConnected(): boolean {
    return this._isConnected;
  }

  set isConnected(value: boolean) {
    this._isConnected = value;
  }
}
