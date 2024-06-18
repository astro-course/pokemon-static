export interface PokemonListResponse {
  count: number;
  next: string;
  previuos: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
