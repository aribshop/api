export interface IClientModel {
  id: string;
  name: string;
  location: string;
  email: string;
  phone: string;

  created: Date;
}

export interface IStuffModel {
  id: string;
  name: string;
  phone: string;
  email: string;

  groups: string[];
  site: string;
}

// todo for now we use only models
export interface IUserModel {
  id: string;
  name: string;
  phone: string;
  email: string;
  picture: string;
}
