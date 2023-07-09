export interface User {
  fullName: string;
  email: string;
  phoneNo: string[];
  address: {
    city: string;
    pastelCode: string;
    street: string;
  };
  password: string;
}
