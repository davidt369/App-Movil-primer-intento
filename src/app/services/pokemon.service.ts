import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Pokemon, PokemonListResponse, PokemonListItem, PokemonBasic } from '../models/pokemon.interface';

/**
 * Servicio para interactuar con la PokéAPI
 * Maneja todas las peticiones HTTP relacionadas con Pokémon
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2';
  private readonly limit = 20; // Número de Pokémon por página

  constructor(private http: HttpClient) { }

  /**
   * Obtiene una lista paginada de Pokémon con información básica
   * @param offset Offset para la paginación
   * @param limit Límite de elementos por página
   * @returns Observable con lista de Pokémon incluyendo imágenes
   */
  getPokemonList(offset: number = 0, limit: number = this.limit): Observable<PokemonListItem[]> {
    return this.http.get<PokemonListResponse>(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`)
      .pipe(
        switchMap(response => {
          // Crear peticiones paralelas para obtener detalles de cada Pokémon
          const pokemonDetails = response.results.map(pokemon => 
            this.getPokemonByUrl(pokemon.url)
          );
          
          return forkJoin(pokemonDetails);
        }),
        map(pokemonArray => 
          pokemonArray.map(pokemon => ({
            name: pokemon.name,
            url: `${this.baseUrl}/pokemon/${pokemon.id}`,
            id: pokemon.id,
            image: pokemon.sprites.other['official-artwork'].front_default || 
                   pokemon.sprites.front_default
          }))
        )
      );
  }

  /**
   * Obtiene los detalles completos de un Pokémon por su ID
   * @param id ID del Pokémon
   * @returns Observable con los detalles completos del Pokémon
   */
  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`);
  }

  /**
   * Obtiene los detalles completos de un Pokémon por su nombre
   * @param name Nombre del Pokémon
   * @returns Observable con los detalles completos del Pokémon
   */
  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${name.toLowerCase()}`);
  }

  /**
   * Obtiene los detalles de un Pokémon usando su URL
   * @param url URL del Pokémon
   * @returns Observable con los detalles del Pokémon
   */
  private getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  /**
   * Extrae el ID del Pokémon desde su URL
   * @param url URL del Pokémon
   * @returns ID del Pokémon
   */
  extractIdFromUrl(url: string): number {
    const matches = url.match(/\/pokemon\/(\d+)\//);
    return matches ? parseInt(matches[1], 10) : 0;
  }

  /**
   * Formatea el nombre del Pokémon para mostrar
   * @param name Nombre original del Pokémon
   * @returns Nombre formateado con primera letra en mayúscula
   */
  formatPokemonName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  /**
   * Obtiene el color asociado a un tipo de Pokémon
   * @param type Tipo del Pokémon
   * @returns Color en formato hexadecimal
   */
  getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };
    
    return typeColors[type] || '#68A090';
  }
}