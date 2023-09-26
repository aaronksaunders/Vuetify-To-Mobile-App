<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <p>DETAIL PAGE</p>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";

//
const { setBackButton } = useAppStore();
setBackButton(true);
</script>
