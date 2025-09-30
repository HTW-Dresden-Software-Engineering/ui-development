<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.name }}
            <button @click="$emit('select', user)">Select</button>
        </li>
    </ul>
</template>

<script setup>
defineProps({
    users: {
        type: Array,
        required: true
    }
});
defineEmits(['select']);
</script>