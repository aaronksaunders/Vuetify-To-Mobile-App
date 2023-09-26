<template>
  <v-btn icon @click="goBack">
    <v-icon>mdi-chevron-left</v-icon>
  </v-btn>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const goBack = () => {
  router.go(-1);
};

//
const router = useRouter();
</script>
