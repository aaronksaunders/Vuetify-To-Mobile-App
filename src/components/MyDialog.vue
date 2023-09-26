<template>
  <v-dialog
    :model-value="is_visible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar color="primary" title="Opening from the bottom"></v-toolbar>
        <v-card-text>
          <div class="text-h3 pa-12">Hello world!</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="doClose(isActive)">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
import { Ref } from "vue";

const props = defineProps<{ is_visible: boolean }>();
const emits = defineEmits<{ (event: "close"): void }>();

const doClose = (isActive: Ref<boolean>) => {
  emits("close");
  isActive.value = false;
};
</script>
