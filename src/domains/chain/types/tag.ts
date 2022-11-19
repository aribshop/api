// ideal world
export interface ITag {
  id: string;
  name: string;
}

export interface ITagEntity {
  name: string;
  description: string;
}

export interface ITagModel extends ITagEntity {
  id: string;
}

export interface INewTag {
  name: string;
}
