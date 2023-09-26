<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <p>LOGIN</p>
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
        LOGIN
      </v-btn>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import router from "@/router";
import { useAppStore } from "@/store/app";
import { ref } from "vue";

//
const { setBackButton, login } = useAppStore();
const creds = ref<{ username: string; password: string }>({
  username: "",
  password: "",
});
setBackButton(false);

const doLogin = async () => {
  try {
    await login({ ...creds.value });
    router.replace("/");
  } catch (e: any) {
    alert(e.message);
  }
};
</script>
