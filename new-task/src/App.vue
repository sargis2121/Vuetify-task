<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>

      <v-spacer> </v-spacer>
    </v-app-bar>

    <v-main class="align-center">
      <Dialog />
      <v-container class=" align-center">
        <List />
      </v-container>
      <v-container class=" align-center">
        <Pass />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Pass from './components/pass'
import Dialog from './components/dialog.vue'
import List from './components/list.vue'

export default {
  name: 'App',
  components: {
    Dialog,
    List,
    Pass
  }
}
</script>
