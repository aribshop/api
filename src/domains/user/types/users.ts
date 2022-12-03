export interface IClientEntity {
  id: string;
  name: string;
  location: string;
  email: string;
  phone: string;

  created: Date;
}

export interface IStuffEntity {
  id: string;
  name: string;
  phone: string;
  email: string;

  groups: string[];
  site: string;
}

export interface IUserEntity {
  id: string;
  name: string;
  phone: string;
  email: string;
  picture: string;
}
