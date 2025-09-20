<template>
    <div class="space-y-2">
        <Label :for="name">{{ label }}</Label>
        <Input v-model="value" :class="{ 'border-red-500': errorMessage }" />
        <div v-if="errorMessage" class="text-red-400">{{ errorMessage }}</div>
    </div>

</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";

const { name, label } = defineProps<{
    name: string;
    label: string;
    type?: string;
}>()

const { value, errorMessage } = useField<string | number>(() => name);
</script>