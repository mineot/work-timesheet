<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>{{ $t("app-title") }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
