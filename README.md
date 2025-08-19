# 📱 Pokédex App - Aplicación Móvil Ionic

Una aplicación móvil de Pokédex desarrollada con **Ionic Angular** y **Capacitor** que permite explorar, buscar y gestionar tus Pokémon favoritos.

## 🚀 Características Principales

- 📚 **Pokédex Completa**: Exploración de todos los Pokémon con información detallada
- ❤️ **Sistema de Favoritos**: Guarda tus Pokémon favoritos para acceso rápido
- 🔍 **Búsqueda Avanzada**: Busca Pokémon por nombre con resultados en tiempo real
- 👤 **Perfil de Entrenador**: Estadísticas personales y configuración de la app
- 📱 **Diseño Responsivo**: Optimizado para dispositivos móviles y tablets
- 🎨 **Interfaz Intuitiva**: Navegación por tabs con iconos claros

## 🛠️ Tecnologías Utilizadas

- **Framework**: Ionic 7 + Angular 17
- **Capacitor**: Para funcionalidades nativas
- **API**: PokéAPI para datos de Pokémon
- **Iconos**: Ionicons
- **Lenguajes**: TypeScript, HTML5, SCSS
- **Plataformas**: Android, iOS (con Capacitor)

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── models/
│   │   └── pokemon.interface.ts       # Interfaces de datos
│   ├── services/
│   │   └── pokemon.service.ts         # Servicio API de Pokémon
│   ├── tab1/                          # Página principal (Pokédex)
│   ├── tab2/                          # Página de favoritos
│   ├── tab3/                          # Página de perfil
│   ├── pokemon-detail/                # Página de detalles del Pokémon
│   └── tabs/                          # Navegación principal
├── assets/                            # Recursos estáticos
├── environments/                      # Configuración de entornos
└── theme/                            # Estilos y variables CSS
```

## 🎯 Funcionalidades por Página

### 📚 Tab 1 - Pokédex
- Lista paginada de todos los Pokémon
- Búsqueda en tiempo real por nombre
- Vista de tarjetas con imagen y información básica
- Navegación a detalles del Pokémon

### ❤️ Tab 2 - Favoritos
- Lista de Pokémon marcados como favoritos
- Gestión de favoritos (agregar/eliminar)
- Estado vacío con mensaje motivacional
- Acceso rápido al Pokédex

### 👤 Tab 3 - Perfil
- Información del entrenador
- Estadísticas de uso de la app
- Configuración y preferencias
- Información sobre la aplicación

### 🔍 Detalles del Pokémon
- Información completa del Pokémon
- Estadísticas detalladas
- Habilidades y características
- Galería de sprites
- Sistema de favoritos

## 🎨 Sistema de Iconos

### Navegación Principal (TabBar)
- **Pokédex** (`library-outline`): Representa la colección de Pokémon
- **Favoritos** (`heart-outline`): Simboliza los Pokémon favoritos
- **Perfil** (`person-outline`): Perfil del entrenador

### Iconos por Funcionalidad
- 🔍 **Búsqueda**: `search-outline`
- ⭐ **Estadísticas**: `stats-chart-outline`
- ⚡ **Habilidades**: `flash-outline`
- 🖼️ **Galería**: `images-outline`
- ⚙️ **Configuración**: `settings-outline`

## 🔧 Instalación y Configuración

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn
- Ionic CLI
- Android Studio (para Android)
- Xcode (para iOS, solo en macOS)

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd App-Movil-primer-intento

# Instalar dependencias
npm install

# Ejecutar en desarrollo
ionic serve

# Construir para producción
ionic build

# Agregar plataforma Android
ionic capacitor add android

# Ejecutar en Android
ionic capacitor run android
```

## 📱 Compilación para Dispositivos

### Android
```bash
# Sincronizar cambios
ionic capacitor sync android

# Abrir en Android Studio
ionic capacitor open android

# Compilar APK desde Android Studio
```

### iOS
```bash
# Sincronizar cambios
ionic capacitor sync ios

# Abrir en Xcode
ionic capacitor open ios

# Compilar desde Xcode
```

## 🛠️ Cambios Recientes y Mejoras

### ✅ Corrección de Iconos en TabBar (Última actualización)

**Problema identificado**: Los iconos del tabbar no se mostraban correctamente en las pestañas de Pokédex y Perfil.

**Solución implementada**:
- **Archivo modificado**: `src/app/tabs/tabs.page.ts`
- **Cambios realizados**:
  - ❌ **Antes**: Importación incorrecta de iconos (`triangle`, `ellipse`, `square`)
  - ✅ **Después**: Importación correcta de iconos temáticos:
    ```typescript
    import { libraryOutline, heartOutline, personOutline } from 'ionicons/icons';
    
    addIcons({ 
      'library-outline': libraryOutline,
      'heart-outline': heartOutline,
      'person-outline': personOutline
    });
    ```

**Resultado**: 
- 📚 Icono de biblioteca para Pokédex
- ❤️ Icono de corazón para Favoritos  
- 👤 Icono de persona para Perfil

### 🎨 Mejoras en la Experiencia de Usuario
- **Iconos coherentes**: Todos los iconos siguen la temática de Pokémon
- **Navegación intuitiva**: TabBar con iconos claros y descriptivos
- **Accesibilidad**: Iconos con `aria-hidden="true"` para lectores de pantalla
- **Rendimiento**: Importación optimizada solo de iconos necesarios

## 🚦 Estado del Proyecto

- ✅ **Estructura base**: Completada
- ✅ **Navegación por tabs**: Funcionando
- ✅ **Sistema de iconos**: Corregido y optimizado
- ✅ **Servicio de Pokémon**: Implementado
- ✅ **Páginas principales**: Desarrolladas
- 🔄 **En desarrollo**: Funcionalidades avanzadas
- 📋 **Pendiente**: Publicación en stores

## 📚 Documentación Adicional

- [📋 Documentación de Pokémon](./POKEMON_README.md)
- [🎨 Guía de Iconos](./ICONOS_DOCUMENTACION.md)
- [⚙️ Configuración de Capacitor](./capacitor.config.ts)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autor

**David** - [@davidt369](https://github.com/davidt369)

---

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias:
- 🐛 **Issues**: [GitHub Issues](https://github.com/davidt369/App-Movil-primer-intento/issues)
- 📧 **Email**: [Contacto del desarrollador]
- 📱 **Versión actual**: 1.0.0

---

*Desarrollado con ❤️ y ⚡ por un entrenador Pokémon apasionado por la tecnología*