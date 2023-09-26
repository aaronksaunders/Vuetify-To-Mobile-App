<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Next Page Ionic Vue</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <v-container class="fill-height">
      </v-container>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import HelloWorld from "@/components/HelloWorld.vue";
</script>
