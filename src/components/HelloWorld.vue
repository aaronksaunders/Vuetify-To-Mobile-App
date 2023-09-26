<template>
  <my-alert @close="isAlertOpen = false" :is-open="isAlertOpen" />

  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <p>HELLO</p>
      <v-btn min-width="164" @click="router.push('/detail')" style="margin:16px"> NEXT PAGE </v-btn>

      <my-dialog
        :is_visible="modalIsOpen"
        @close="modalIsOpen = false"
      ></my-dialog>

      <v-btn :min-width="'164'" @click="modalIsOpen = true" style="margin:16px"> SHOW MODAL </v-btn>
      <v-btn :min-width="'164'" @click="isAlertOpen = true" style="margin:16px"> SHOW ALERT </v-btn>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import MyDialog from "./MyDialog.vue";
import { ref } from "vue";
import MyAlert from "./MyAlert.vue";

//
const router = useRouter();
const modalIsOpen = ref(false);
const isAlertOpen = ref(false);
</script>
