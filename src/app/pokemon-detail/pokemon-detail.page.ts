import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonBadge,
  IonProgressBar,
  IonSkeletonText,
  IonIcon,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  ToastController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { 
  arrowBack, 
  heart, 
  heartOutline, 
  shareSocialOutline, 
  statsChart,
  informationCircleOutline,
  resizeOutline,
  barbellOutline,
  starOutline,
  statsChartOutline,
  barChartOutline,
  flashOutline,
  eyeOffOutline,
  imagesOutline
} from 'ionicons/icons';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.interface';

/**
 * Página de detalles del Pokémon
 * Muestra información completa incluyendo estadísticas, tipos, habilidades, etc.
 */
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonBadge,
    IonProgressBar,
    IonSkeletonText,
    IonIcon,
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonGrid,
    IonRow,
    IonCol
  ],
})
export class PokemonDetailPage implements OnInit {
  pokemon: Pokemon | null = null;
  isLoading = true;
  pokemonId: number = 0;
  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private pokemonService: PokemonService,
    private toastController: ToastController
  ) {
    addIcons({ 
      arrowBack, 
      heart, 
      heartOutline, 
      shareSocialOutline, 
      statsChart,
      informationCircleOutline,
      resizeOutline,
      barbellOutline,
      starOutline,
      statsChartOutline,
      barChartOutline,
      flashOutline,
      eyeOffOutline,
      imagesOutline
    });
  }

  ngOnInit() {
    this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.pokemonId) {
      this.loadPokemonDetails();
    }
  }

  /**
   * Carga los detalles completos del Pokémon
   */
  private loadPokemonDetails() {
    this.isLoading = true;
    this.pokemonService.getPokemonById(this.pokemonId).subscribe({
      next: (pokemon) => {
        this.pokemon = pokemon;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading Pokemon details:', error);
        this.isLoading = false;
      }
    });
  }

  /**
   * Navega hacia atrás
   */
  goBack() {
    this.location.back();
  }

  /**
   * Obtiene el color principal del Pokémon basado en su tipo primario
   * @returns Color en formato CSS
   */
  getPrimaryTypeColor(): string {
    if (!this.pokemon || !this.pokemon.types.length) {
      return '#68A090';
    }
    return this.pokemonService.getTypeColor(this.pokemon.types[0].type.name);
  }

  /**
   * Obtiene el color de un tipo específico
   * @param typeName Nombre del tipo
   * @returns Color en formato CSS
   */
  getTypeColor(typeName: string): string {
    return this.pokemonService.getTypeColor(typeName);
  }

  /**
   * Formatea el nombre del Pokémon
   * @param name Nombre original
   * @returns Nombre formateado
   */
  formatPokemonName(name: string): string {
    return this.pokemonService.formatPokemonName(name);
  }

  /**
   * Formatea el peso del Pokémon (de hectogramos a kg)
   * @param weight Peso en hectogramos
   * @returns Peso formateado en kg
   */
  formatWeight(weight: number): string {
    return (weight / 10).toFixed(1);
  }

  /**
   * Formatea la altura del Pokémon (de decímetros a metros)
   * @param height Altura en decímetros
   * @returns Altura formateada en metros
   */
  formatHeight(height: number): string {
    return (height / 10).toFixed(1);
  }

  /**
   * Formatea el nombre de una estadística
   * @param statName Nombre original de la estadística
   * @returns Nombre formateado para mostrar
   */
  formatStatName(statName: string): string {
    const statNames: { [key: string]: string } = {
      'hp': 'PS',
      'attack': 'Ataque',
      'defense': 'Defensa',
      'special-attack': 'At. Esp.',
      'special-defense': 'Def. Esp.',
      'speed': 'Velocidad'
    };
    return statNames[statName] || statName;
  }

  /**
   * Calcula el porcentaje de una estadística para la barra de progreso
   * @param value Valor de la estadística
   * @returns Porcentaje (0-1)
   */
  getStatPercentage(value: number): number {
    return Math.min(value / 255, 1); // 255 es el máximo teórico
  }

  /**
   * Obtiene la imagen principal del Pokémon
   * @returns URL de la imagen
   */
  getPokemonImage(): string {
    if (!this.pokemon) return '';
    
    return this.pokemon.sprites.other['official-artwork'].front_default ||
           this.pokemon.sprites.front_default ||
           '';
  }

  /**
   * Maneja errores de carga de imágenes
   * @param event Evento de error de imagen
   */
  onImageError(event: any) {
    event.target.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
  }

  /**
   * Calcula el total de estadísticas base
   * @returns Suma total de todas las estadísticas
   */
  getTotalStats(): number {
    if (!this.pokemon) return 0;
    return this.pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0);
  }

  /**
   * Alterna el estado de favorito del Pokémon
   */
  async toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    const message = this.isFavorite 
      ? `${this.formatPokemonName(this.pokemon?.name || '')} agregado a favoritos`
      : `${this.formatPokemonName(this.pokemon?.name || '')} removido de favoritos`;
    
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      icon: this.isFavorite ? 'heart' : 'heart-outline',
      color: this.isFavorite ? 'success' : 'medium'
    });
    toast.present();
  }

  /**
   * Comparte información del Pokémon
   */
  async sharePokemon() {
    if (!this.pokemon) return;
    
    const shareText = `¡Mira este Pokémon! ${this.formatPokemonName(this.pokemon.name)} #${this.pokemon.id.toString().padStart(3, '0')}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Pokédex',
          text: shareText,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback para dispositivos que no soportan Web Share API
      const toast = await this.toastController.create({
        message: 'Información copiada al portapapeles',
        duration: 2000,
        position: 'bottom',
        icon: 'share-social-outline',
        color: 'primary'
      });
      
      try {
        await navigator.clipboard.writeText(shareText);
        toast.present();
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  }
}