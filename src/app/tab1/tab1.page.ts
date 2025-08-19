import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonAvatar, 
  IonLabel, 
  IonBadge, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  IonSkeletonText,
  IonCard,
  IonCardContent,
  IonSearchbar,
  IonRefresher,
  IonRefresherContent,
  IonButton,
  IonButtons,
  IonIcon,
  InfiniteScrollCustomEvent,
  ToastController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';
import { PokemonListItem } from '../models/pokemon.interface';

/**
 * Página principal que muestra la lista de Pokémon con scroll infinito
 * Incluye funcionalidades de búsqueda y navegación a detalles
 */
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList, 
    IonItem, 
    IonAvatar, 
    IonLabel, 
    IonBadge, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent,
    IonSkeletonText,
    IonCard,
    IonCardContent,
    IonSearchbar,
    IonRefresher,
    IonRefresherContent,
    IonButton,
    IonButtons,
    IonIcon
  ],
})
export class Tab1Page implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll!: IonInfiniteScroll;

  pokemonList: PokemonListItem[] = [];
  filteredPokemonList: PokemonListItem[] = [];
  isLoading = true;
  searchTerm = '';
  currentOffset = 0;
  readonly itemsPerPage = 20;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadInitialPokemon();
  }

  /**
   * Carga la lista inicial de Pokémon
   */
  private loadInitialPokemon() {
    this.isLoading = true;
    this.pokemonService.getPokemonList(0, this.itemsPerPage).subscribe({
      next: (pokemon) => {
        this.pokemonList = pokemon;
        this.filteredPokemonList = [...this.pokemonList];
        this.currentOffset = this.itemsPerPage;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading Pokemon:', error);
        this.isLoading = false;
      }
    });
  }

  /**
   * Carga más Pokémon para el scroll infinito
   * @param event Evento del infinite scroll
   */
  loadMorePokemon(event: InfiniteScrollCustomEvent) {
    this.pokemonService.getPokemonList(this.currentOffset, this.itemsPerPage).subscribe({
      next: (newPokemon) => {
        this.pokemonList = [...this.pokemonList, ...newPokemon];
        this.filterPokemon(); // Aplicar filtro si hay búsqueda activa
        this.currentOffset += this.itemsPerPage;
        event.target.complete();

        // Deshabilitar infinite scroll si ya no hay más datos
        if (newPokemon.length < this.itemsPerPage) {
          event.target.disabled = true;
        }
      },
      error: (error) => {
        console.error('Error loading more Pokemon:', error);
        event.target.complete();
      }
    });
  }

  /**
   * Maneja la búsqueda de Pokémon
   * @param event Evento del searchbar
   */
  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
    this.filterPokemon();
  }

  /**
   * Filtra la lista de Pokémon basado en el término de búsqueda
   */
  private filterPokemon() {
    if (!this.searchTerm.trim()) {
      this.filteredPokemonList = [...this.pokemonList];
    } else {
      this.filteredPokemonList = this.pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  /**
   * Navega a la página de detalles del Pokémon seleccionado
   * @param pokemon Pokémon seleccionado
   */
  goToPokemonDetail(pokemon: PokemonListItem) {
    this.router.navigate(['/tabs/pokemon-detail', pokemon.id]);
  }

  /**
   * Maneja el refresh de la página
   * @param event Evento del refresher
   */
  handleRefresh(event: any) {
    this.currentOffset = 0;
    this.searchTerm = '';
    this.pokemonList = [];
    this.filteredPokemonList = [];
    
    // Rehabilitar infinite scroll
    if (this.infiniteScroll) {
      this.infiniteScroll.disabled = false;
    }
    
    this.loadInitialPokemon();
    event.target.complete();
  }

  /**
   * Formatea el nombre del Pokémon para mostrar
   * @param name Nombre original
   * @returns Nombre formateado
   */
  formatPokemonName(name: string): string {
    return this.pokemonService.formatPokemonName(name);
  }

  /**
   * Genera el array de elementos skeleton para el loading
   * @returns Array de números para el ngFor
   */
  getSkeletonArray(): number[] {
    return Array(6).fill(0).map((_, index) => index);
  }

  /**
   * Función de tracking para optimizar el rendimiento del ngFor
   * @param index Índice del elemento
   * @param pokemon Pokémon actual
   * @returns ID único del Pokémon
   */
  trackByPokemonId(index: number, pokemon: PokemonListItem): number {
    return pokemon.id;
  }

  /**
   * Maneja errores de carga de imágenes
   * @param event Evento de error de imagen
   */
  onImageError(event: any) {
    // Imagen de fallback en caso de error
    event.target.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
  }

  /**
   * Muestra opciones de filtros
   */
  async showFilters() {
    const toast = await this.toastController.create({
      message: 'Funcionalidad de filtros próximamente',
      duration: 2000,
      position: 'bottom',
      icon: 'options-outline',
      color: 'primary'
    });
    toast.present();
  }
}
