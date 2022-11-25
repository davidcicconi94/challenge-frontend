export interface CharacterProps {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: Array<string>;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string;
  starships: Array<String>;
  url: string;
  vehicles: Array<String>;
}

export interface CharacterState {
  value: Array<CharacterProps>;
  status: string;
  error: boolean;
  loading: boolean;
}

export interface Error {
  name: string;
  message: string;
}

export interface FilmsProps {
  title: string;
  director: string;
  created: string;
}
