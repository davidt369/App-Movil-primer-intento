/**
 * Interfaz para la respuesta de la lista de Pokémon de la PokéAPI
 */
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonBasic[];
}

/**
 * Interfaz básica de Pokémon (usada en listas)
 */
export interface PokemonBasic {
  name: string;
  url: string;
}

/**
 * Interfaz completa de Pokémon con todos los detalles
 */
export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: PokemonSprites;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  species: {
    name: string;
    url: string;
  };
}

/**
 * Interfaz para las imágenes del Pokémon
 */
export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
  other: {
    'official-artwork': {
      front_default: string;
    };
    dream_world: {
      front_default: string;
    };
  };
}

/**
 * Interfaz para los tipos de Pokémon
 */
export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

/**
 * Interfaz para las habilidades del Pokémon
 */
export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

/**
 * Interfaz para las estadísticas del Pokémon
 */
export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

/**
 * Interfaz para elementos de lista con información adicional
 */
export interface PokemonListItem extends PokemonBasic {
  id: number;
  image: string;
}