<!-- View -->
<template>
    <div>
        <h1>MVVM</h1>
        <h2>Hello, {{ name }}</h2>
    </div>
    <!-- View-Model -->
    <input v-model="name" placeholder="Enter your name" />
</template>

<script setup lang="ts">
import { ref } from "vue"

// Model
const name = ref("")
</script>
