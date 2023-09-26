<template>
  <div class="alert-container" v-if="isOpen">
    <v-alert
      v-if="isOpen"
      class="centered-alert"
      type="error"
      title="Alert title"
      :closable="true"
      @click:close="emits('close')"
      text="Error with password credentials"
    ></v-alert>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(['isOpen'])
const emits = defineEmits(['close'])
</script>

<style>
.alert-container {
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: transparent;
}

.centered-alert {
  width: 320px; /* Adjust this to fit your content */
  margin: auto;
}
</style>
