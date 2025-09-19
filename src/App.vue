<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div class="min-h-screen bg-background">
    <header class="border-b">
      <div class="container mx-auto px-4 py-6">
        <nav class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-bold text-foreground">UI Development</h1>
          </div>
          <div class="flex space-x-4">
            <RouterLink
              to="/"
              class="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/about"
              class="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              About
            </RouterLink>
          </div>
        </nav>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <div class="max-w-2xl mx-auto text-center mb-8">
        <h2 class="text-3xl font-bold tracking-tight text-foreground mb-4">
          Vue 3 + Vite + shadcn-vue
        </h2>
        <p class="text-lg text-muted-foreground mb-6">
          A modern development setup with Vue 3, Vite, and shadcn-vue components ready to go.
        </p>
        <div class="flex gap-4 justify-center">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <RouterView />
    </main>
  </div>
</template>
