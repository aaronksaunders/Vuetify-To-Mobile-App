<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Create Account Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <v-container class="fill-height">
        <v-responsive class="text-center fill-height"> 
          <p class="mt-16">CREATE ACCOUNT</p>
          <v-text-field
            clearable
            label="User Name"
            prepend-icon="$vuetify"
            type="text"
            v-model="creds.username"
          ></v-text-field>
          <v-text-field
            clearable
            label="Password"
            prepend-icon="$vuetify"
            type="password"
            v-model="creds.password"
          ></v-text-field>
          <v-btn :min-width="'164'" @click="doLogin" style="margin: 16px">
            CREATE ACCOUNT
          </v-btn>
        </v-responsive>
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
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
import { ref } from "vue";

//
const creds = ref<{ username: string; password: string }>({
  username: "",
  password: "",
});

const doLogin = async () => {
  try {
    // await login({ ...creds.value });
    // router.replace("/");
  } catch (e: any) {
    // alert(e.message);
  }
};
</script>
