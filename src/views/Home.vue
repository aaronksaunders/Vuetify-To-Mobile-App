<template>
  <HelloWorld />
</template>

<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue";
import { useAppStore } from "@/store/app";
const { setBackButton } = useAppStore();
setBackButton(false);
</script>
