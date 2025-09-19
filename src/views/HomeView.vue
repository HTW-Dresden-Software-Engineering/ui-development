<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import CardContent from '@/components/ui/CardContent.vue'
</script>

<template>
  <div class="space-y-8">
    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Vue 3</CardTitle>
          <CardDescription>
            The latest version of Vue with Composition API and improved performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Vue 3 provides better TypeScript support, smaller bundle sizes, and improved reactivity.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vite</CardTitle>
          <CardDescription>
            Lightning fast build tool with hot module replacement.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Vite offers instant server start, fast HMR, and optimized builds for production.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>shadcn-vue</CardTitle>
          <CardDescription>
            Beautiful and accessible components built with Radix Vue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Copy and paste components that you can customize to match your design system.
          </p>
        </CardContent>
      </Card>
    </div>

    <!-- Button Examples -->
    <Card>
      <CardHeader>
        <CardTitle>Button Variants</CardTitle>
        <CardDescription>
          Different button styles available out of the box.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </CardContent>
    </Card>

    <!-- Getting Started -->
    <Card>
      <CardHeader>
        <CardTitle>Ready to Start Building</CardTitle>
        <CardDescription>
          Your Vue 3 application is set up with shadcn-vue components and Tailwind CSS.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <p class="text-sm text-muted-foreground">
            You can now start adding components from shadcn-vue or create your own custom components
            using the established patterns and utilities.
          </p>
          <div class="flex gap-2">
            <Button size="sm">Start Building</Button>
            <Button variant="outline" size="sm">View Docs</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
