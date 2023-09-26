<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useAppStore } from './store/app';

const appStore = useAppStore();

// Perform the asynchronous check for an existing user session on component mount
onMounted(async () => {
  await appStore.checkAuthentication();
});
</script>
