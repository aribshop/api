// ideal world
export interface ITag {
  id: string;
  name: string;
}

// tags are used to devide lines horizontally, for exemple, each store location, New York, Paris, London, etc...
export interface ITagEntity {
  id: string;
  name: string;
  description: string;
}

export interface INewTag {
  name: string;
  description: string;
}
