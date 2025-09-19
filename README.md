# UI Development - Vue 3 + Vite + shadcn-vue

Repository containing the code for the UI-Development Lecture in Software-Engineering II.

## 🚀 Quick Start

This project is a modern Vue 3 application built with:
- ⚡ **Vite** - Lightning fast build tool
- 🎨 **Vue 3** - The progressive JavaScript framework with Composition API
- 🎯 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **shadcn-vue** - Beautiful and accessible component library
- 🧭 **Vue Router** - Client-side routing
- 🗃️ **Pinia** - State management
- 🧪 **Vitest** - Unit testing framework

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Run tests
npm run test:unit

# Lint code
npm run lint

# Format code
npm run format
```

## 🎨 shadcn-vue Components

The project includes a basic shadcn-vue setup with:
- Button components with multiple variants
- Card components (Card, CardHeader, CardTitle, CardDescription, CardContent)
- CSS variables for theming
- Utility function for class merging

### Available Button Variants
- `default` - Primary button style
- `secondary` - Secondary button style
- `destructive` - For dangerous actions
- `outline` - Outlined button
- `ghost` - Minimal button style
- `link` - Link-styled button

### Adding More Components

To add more shadcn-vue components, you can either:
1. Use the shadcn-vue CLI (when network connectivity allows):
   ```bash
   npx shadcn-vue@latest add [component-name]
   ```
2. Manually create components following the established patterns in `src/components/ui/`

## 🏗️ Project Structure

```
src/
├── assets/          # Static assets and global CSS
├── components/      # Vue components
│   └── ui/         # shadcn-vue UI components
├── lib/            # Utility functions
├── router/         # Vue Router configuration
├── stores/         # Pinia stores
├── views/          # Page components
└── main.ts         # Application entry point
```

## 🎨 Styling

The project uses Tailwind CSS with custom CSS variables for theming. The color scheme is defined in `src/assets/main.css` and includes:
- Light and dark mode support
- Semantic color tokens (primary, secondary, destructive, etc.)
- Consistent spacing and typography

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with Vue plugin and path aliases
- `tailwind.config.js` - Tailwind CSS configuration with shadcn-vue theme
- `components.json` - shadcn-vue component configuration
- `tsconfig.json` - TypeScript configuration with path mapping

## 🌟 Features

- ✅ Vue 3 with Composition API
- ✅ TypeScript support
- ✅ Tailwind CSS integration
- ✅ shadcn-vue components
- ✅ Vue Router for navigation
- ✅ Pinia for state management
- ✅ Vitest for testing
- ✅ ESLint + Prettier for code quality
- ✅ Hot module replacement
- ✅ Production build optimization

## 🎯 Getting Started with Development

1. The application is already set up and ready for development
2. Start by exploring the example components in `src/views/HomeView.vue`
3. Create new components in `src/components/ui/` following shadcn-vue patterns
4. Use the utility function `cn()` from `src/lib/utils.ts` for conditional class merging
5. Customize the theme by modifying CSS variables in `src/assets/main.css`

## 📚 Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [shadcn-vue Documentation](https://www.shadcn-vue.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🤝 Contributing

This is a educational project for the UI-Development Lecture. Feel free to experiment and add new features!
