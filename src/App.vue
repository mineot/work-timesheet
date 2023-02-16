<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>{{ $t("app-title") }}</v-toolbar-title>
      <template v-slot:append>
        <v-btn to="/" icon="mdi-home"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
