export interface IClientEntity {
  id: string;
  name: string;
  location: string;
  email: string;
  phone: string;

  created: Date;
}


export interface IUserEntity {
  id: string;
  name: string;
  phone: string;
  email: string;
  picture: string;
}
