<template>
  <v-app-bar>
    <v-app-bar-title>
      <template v-if="store.showBackButton">
        <back-button></back-button>
      </template>
      <template v-else>
        <v-icon icon="mdi-circle-slice-6" />
      </template>
      Test Application
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import BackButton from "@/components/BackButton.vue";

//
const store = useAppStore();
</script>
