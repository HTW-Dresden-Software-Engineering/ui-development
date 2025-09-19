<template>
  <div :class="cn('flex flex-col space-y-1.5 p-6', props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

export interface CardHeaderProps {
  class?: string
}

const props = withDefaults(defineProps<CardHeaderProps>(), {})
</script>