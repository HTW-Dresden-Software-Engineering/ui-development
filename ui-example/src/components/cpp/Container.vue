<template>
    <UserListPresenter :users="users" @select="handleSelect" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import UserListPresenter from './Presenter.vue';

const users = ref([]);

onMounted(async () => {
    // Simulate API call
    users.value = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ];
});

function handleSelect(user) {
    alert(`Selected: ${user.name}`);
}
</script>