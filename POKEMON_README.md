# Pokédex App - Ionic Angular

Una aplicación móvil desarrollada con Ionic y Angular que consume la PokéAPI para mostrar información detallada de Pokémon.

## 🚀 Características

### ✨ Funcionalidades Principales

- **Lista de Pokémon con Scroll Infinito**: Visualiza todos los Pokémon disponibles en la PokéAPI con carga progresiva
- **Búsqueda en Tiempo Real**: Busca Pokémon por nombre con filtrado instantáneo
- **Página de Detalles Completa**: Información detallada incluyendo:
  - Estadísticas base con barras de progreso visual
  - Tipos con colores temáticos
  - Habilidades (normales y ocultas)
  - Sprites (normal, shiny, frente y espalda)
  - Información física (altura, peso, experiencia base)

### 🎨 Diseño y UX

- **Interfaz Responsive**: Adaptada para diferentes tamaños de pantalla
- **Colores Temáticos**: Cada tipo de Pokémon tiene su color característico
- **Animaciones Fluidas**: Transiciones suaves y efectos visuales
- **Loading States**: Skeletons para mejor experiencia de carga
- **Pull to Refresh**: Actualización manual de la lista

## 🏗️ Arquitectura del Proyecto

### 📁 Estructura de Carpetas

```
src/app/
├── models/
│   └── pokemon.interface.ts          # Interfaces TypeScript para tipado
├── services/
│   └── pokemon.service.ts            # Servicio para API calls
├── tab1/                             # Página principal (Lista de Pokémon)
│   ├── tab1.page.ts
│   ├── tab1.page.html
│   └── tab1.page.scss
├── pokemon-detail/                   # Página de detalles
│   ├── pokemon-detail.page.ts
│   ├── pokemon-detail.page.html
│   └── pokemon-detail.page.scss
└── tabs/                            # Navegación por tabs
    ├── tabs.page.ts
    ├── tabs.page.html
    └── tabs.routes.ts
```

### 🔧 Componentes y Servicios

#### PokemonService
- **Propósito**: Manejar todas las peticiones HTTP a la PokéAPI
- **Métodos principales**:
  - `getPokemonList()`: Lista paginada con imágenes
  - `getPokemonById()`: Detalles completos por ID
  - `getPokemonByName()`: Detalles por nombre
  - `getTypeColor()`: Colores temáticos por tipo
  - `formatPokemonName()`: Formateo de nombres

#### Tab1Page (Lista Principal)
- **Funcionalidad**: Lista principal con scroll infinito
- **Características**:
  - Paginación automática (20 elementos por carga)
  - Búsqueda en tiempo real
  - Estados de carga con skeletons
  - Navegación a detalles

#### PokemonDetailPage
- **Funcionalidad**: Página de detalles completa
- **Características**:
  - Información completa del Pokémon
  - Estadísticas visuales con barras de progreso
  - Múltiples sprites
  - Diseño adaptativo por tipo

## 📱 Interfaces de Usuario

### Pantalla Principal (Tab1)
- **Grid responsivo** de tarjetas de Pokémon
- **Barra de búsqueda** en la parte superior
- **Scroll infinito** para carga progresiva
- **Pull to refresh** para actualizar
- **Loading skeletons** durante la carga

### Pantalla de Detalles
- **Header temático** con color del tipo principal
- **Imagen principal** de alta calidad
- **Información básica** en grid (altura, peso, etc.)
- **Estadísticas visuales** con barras de progreso
- **Lista de habilidades** con indicadores especiales
- **Galería de sprites** (normal, shiny, etc.)

## 🌐 Integración con PokéAPI

### Endpoints Utilizados
- `GET /pokemon`: Lista paginada de Pokémon
- `GET /pokemon/{id}`: Detalles completos por ID

### Manejo de Datos
- **Caching inteligente**: Evita peticiones redundantes
- **Manejo de errores**: Fallbacks para imágenes y datos
- **Optimización**: Peticiones paralelas para mejor rendimiento

## 🎨 Sistema de Colores por Tipos

```typescript
const typeColors = {
  normal: '#A8A878',    fire: '#F08030',
  water: '#6890F0',     electric: '#F8D030',
  grass: '#78C850',     ice: '#98D8D8',
  fighting: '#C03028',  poison: '#A040A0',
  ground: '#E0C068',    flying: '#A890F0',
  psychic: '#F85888',   bug: '#A8B820',
  rock: '#B8A038',      ghost: '#705898',
  dragon: '#7038F8',    dark: '#705848',
  steel: '#B8B8D0',     fairy: '#EE99AC'
};
```

## 📦 Dependencias Principales

- **@ionic/angular**: Framework UI móvil
- **@angular/common/http**: Cliente HTTP para API calls
- **rxjs**: Programación reactiva
- **ionicons**: Librería de iconos

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn
- Ionic CLI

### Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
ionic serve

# Ejecutar en dispositivo (Android)
ionic capacitor run android

# Build para producción
ionic build --prod
```

### Scripts Disponibles

```bash
npm start          # Servidor de desarrollo
npm run build      # Build de producción
npm test           # Ejecutar tests
npm run lint       # Linting del código
```

## 📱 Compatibilidad

- **Web**: Chrome, Firefox, Safari, Edge
- **Android**: 7.0+ (API 24+)
- **iOS**: 12.0+

## 🔮 Futuras Mejoras

### Funcionalidades Pendientes
- [ ] Filtros avanzados (por tipo, generación, etc.)
- [ ] Favoritos con LocalStorage
- [ ] Comparador de Pokémon
- [ ] Información de evoluciones
- [ ] Modo offline con cache
- [ ] Sonidos y efectos de Pokémon
- [ ] Gráficos de estadísticas más avanzados

### Optimizaciones Técnicas
- [ ] Virtual scrolling para mejor rendimiento
- [ ] Service Worker para cache avanzado
- [ ] Lazy loading de imágenes optimizado
- [ ] Tests unitarios y e2e
- [ ] Internacionalización (i18n)

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una branch para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **PokéAPI**: Por proporcionar la API gratuita con datos de Pokémon
- **Ionic Team**: Por el excelente framework
- **The Pokémon Company**: Por crear el universo Pokémon

---

Desarrollado con ❤️ usando Ionic y Angular