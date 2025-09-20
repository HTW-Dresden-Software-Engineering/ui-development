<template>
    <Select v-model="value">
        <SelectTrigger class="w-full" :class="{ 'border-red-500': errorMessage }">
            <SelectValue placeholder="Bitte auswählen" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Optionen</SelectLabel>
                <SelectItem v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.label }}
                </SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue, SelectTrigger, } from "@/components/ui/select";

const { name } = defineProps<{
    name: string;
    options: Array<{ label: string; value: string }>;
}>()

const { value, errorMessage } = useField<string>(() => name);
</script>