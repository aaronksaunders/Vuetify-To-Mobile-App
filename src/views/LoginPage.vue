<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <v-container class="fill-height">
        <v-responsive class="text-center fill-height">
          <p class="mt-16">LOGIN</p>
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
          <v-v-responsive class="text-center">
            <v-btn :min-width="'120'" @click="doLogin" style="margin: 10px">
              LOGIN
            </v-btn>
            <v-btn
              :min-width="'100'"
              style="margin: 10px"
              @click="() => router.push('/create-account')"
            >
              CREATE ACCOUNT
            </v-btn>
          </v-v-responsive>
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
} from "@ionic/vue";
import { ref } from "vue";
import { useIonRouter } from "@ionic/vue";

const router = useIonRouter();
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
