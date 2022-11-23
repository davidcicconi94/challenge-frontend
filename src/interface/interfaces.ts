export interface CharacterProps {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: Array<String>;
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
  characters: Array<String>;
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: Array<String>;
  producer: string;
  release_date: string;
  species: Array<String>;
  starships: Array<String>;
  title: string;
  url: string;
  vehicles: Array<String>;
}
