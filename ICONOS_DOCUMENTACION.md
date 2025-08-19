# 📱 Documentación de Iconos - Pokédex App

## 🎯 Resumen de Iconos Implementados

Esta aplicación Ionic utiliza **Ionicons** para mejorar la experiencia de usuario con iconos intuitivos y atractivos en toda la interfaz.

## 🧭 Navegación Principal (Tabs)

### Tab 1 - Pokédex
- **Icono**: `library-outline`
- **Descripción**: Representa una biblioteca o colección, perfecto para el Pokédex
- **Color**: Azul primario cuando está activo

### Tab 2 - Favoritos
- **Icono**: `heart-outline`
- **Descripción**: Corazón que simboliza los Pokémon favoritos del usuario
- **Color**: Rojo cuando hay favoritos, gris cuando no

### Tab 3 - Perfil
- **Icono**: `person-outline`
- **Descripción**: Representa el perfil del entrenador Pokémon
- **Color**: Azul primario cuando está activo

## 🔍 Página Principal (Pokédex)

### Header
- **Título**: `library-outline` - Indica que es la sección del Pokédex
- **Filtros**: `options-outline` - Botón para opciones de filtrado

### Búsqueda
- **Búsqueda**: `search-outline` - Icono de lupa en el searchbar
- **Limpiar**: `close-circle-outline` - Botón para limpiar búsqueda

### Estados
- **Sin resultados**: `search-outline` (grande) - Indica que no se encontraron Pokémon

## 📋 Página de Detalles del Pokémon

### Header
- **Atrás**: `arrow-back` - Navegación hacia atrás
- **Favorito**: `heart-outline` / `heart` - Agregar/quitar de favoritos
- **Compartir**: `share-social-outline` - Compartir información del Pokémon

### Información Básica
- **Sección**: `information-circle-outline` - Título de información básica
- **Altura**: `resize-outline` - Representa las dimensiones
- **Peso**: `barbell-outline` - Representa el peso/masa
- **Experiencia**: `star-outline` - Puntos de experiencia
- **Total Stats**: `stats-chart-outline` - Estadísticas totales

### Estadísticas
- **Sección**: `bar-chart-outline` - Gráfico de barras para stats

### Habilidades
- **Sección**: `flash-outline` - Representa habilidades/poderes
- **Habilidad Normal**: `flash-outline` - Habilidad estándar
- **Habilidad Oculta**: `eye-off-outline` - Habilidad secreta
- **Badge Oculta**: `eye-off-outline` - Indicador en badge

### Sprites
- **Sección**: `images-outline` - Galería de imágenes

## 💖 Página de Favoritos

### Header
- **Título**: `heart-outline` - Indica sección de favoritos

### Estado Vacío
- **Icono Principal**: `heart-outline` (grande) - Sin favoritos aún
- **Explorar**: `search-outline` - Botón para ir al Pokédex

## 👤 Página de Perfil

### Header
- **Título**: `person-outline` - Indica perfil de usuario

### Información del Entrenador
- **Avatar**: `person-circle-outline` (grande) - Avatar del entrenador

### Estadísticas del Perfil
- **Sección**: `stats-chart-outline` - Título de estadísticas
- **Vistos**: `eye-outline` - Pokémon que ha visto
- **Capturados**: `checkmark-circle-outline` - Pokémon capturados
- **Favoritos**: `heart-outline` - Pokémon favoritos
- **Logros**: `trophy-outline` - Logros obtenidos

### Configuración
- **Sección**: `settings-outline` - Título de configuración
- **Notificaciones**: `notifications-outline` - Configurar alertas
- **Tema**: `color-palette-outline` - Cambiar tema de la app
- **Datos offline**: `download-outline` - Configurar descarga de datos
- **Acerca de**: `information-circle-outline` - Información de la app
- **Navegar**: `chevron-forward` - Indicador de navegación

## 🎨 Colores de Iconos

### Colores Principales
- **Primario**: `--ion-color-primary` (azul) - Iconos principales
- **Éxito**: `--ion-color-success` (verde) - Acciones positivas
- **Peligro**: `--ion-color-danger` (rojo) - Favoritos, acciones importantes
- **Advertencia**: `--ion-color-warning` (amarillo) - Habilidades ocultas, logros
- **Medio**: `--ion-color-medium` (gris) - Estados neutros, placeholders

### Estados Interactivos
- **Favorito Activo**: Rojo (`danger`)
- **Favorito Inactivo**: Gris (`medium`)
- **Habilidad Oculta**: Amarillo (`warning`)
- **Estadísticas**: Azul (`primary`)

## 📱 Responsive y Accesibilidad

### Tamaños
- **Pequeño**: 1rem - Iconos inline en texto
- **Normal**: 1.2rem - Iconos de navegación y headers
- **Medio**: 1.5-2rem - Iconos de estadísticas
- **Grande**: 3-4rem - Iconos principales de estado vacío

### Accesibilidad
- Todos los iconos incluyen `aria-hidden="true"` cuando son decorativos
- Los iconos informativos incluyen texto descriptivo
- Colores contrastantes para buena visibilidad
- Tamaños apropiados para touch interaction

## 🚀 Mejoras Futuras

### Iconos Pendientes
- **Tipos de Pokémon**: Iconos específicos para cada tipo (fuego, agua, etc.)
- **Movimientos**: Iconos para ataques y movimientos
- **Evoluciones**: Iconos para cadenas evolutivas
- **Mapas**: Iconos para ubicaciones y regiones
- **Batallas**: Iconos para combates y gimnasios

### Animaciones
- Transiciones suaves en cambio de estado de favoritos
- Animaciones de hover en dispositivos compatibles
- Feedback visual en interacciones

---

## 📝 Notas de Implementación

- Todos los iconos utilizan **Ionicons** versión más reciente
- Importación optimizada de iconos específicos para mejor rendimiento
- Configuración centralizada de colores en variables CSS
- Compatibilidad total con modo oscuro/claro
- Implementación responsive para diferentes tamaños de pantalla

## 🔧 Configuración Técnica

Los iconos se importan específicamente en cada componente para optimizar el bundle:

```typescript
import { addIcons } from 'ionicons';
import { iconName } from 'ionicons/icons';

addIcons({ iconName });
```

Esto asegura que solo se carguen los iconos necesarios en cada página, mejorando el rendimiento de la aplicación.