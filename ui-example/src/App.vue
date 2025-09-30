<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css' 
</script>

<template>
  <h1 class="text-4xl">Studierenden Management</h1>
  <main>
    <Toaster position="bottom-right" />
    <RouterView />
  </main>
</template>