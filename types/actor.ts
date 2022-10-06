type Wand = {
  wood: string;
  core: string;
  length: string;
};

export type House = "Gryffindor" | "Hufflepuff" | "Ravenclaw" | "Slytherin";

export type Actors = Array<Actor>;

export type Actor = {
  name: string;
  alternate_names: Array<string>;
  species: string;
  gender: string;
  house: House;
  dateOfBirth: string;
  yearOfBirth: string;
  wizard: true;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: Array<string>;
  alive: true;
  image: string;
};
