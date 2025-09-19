<template>
    <div class="space-y-2">
        <Label for="group-name">Group Name</Label>
        <Input v-model="groupName" id="group-name" type="text" placeholder="Enter group name" />
    </div>
</template>
<script setup lang="ts">
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { ref } from "vue";

const groupName = ref('');
</script>