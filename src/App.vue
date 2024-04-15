<template>
  <HaderComponent />
  <MainComponent />
  <!-- <i class="fa-solid fa-fire"></i>
  <i class="fa-solid fa-droplet"></i>
  <i class="fa-solid fa-bolt-lightning"></i>
  <i class="fa-solid fa-leaf"></i>
  <i class="fa-regular fa-sun"></i>
  <i class="fa-solid fa-skull"></i> -->


</template>

<script>
import { store } from './store.js';
import axios from 'axios';
import HaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {
    HaderComponent,
    MainComponent
  },
  methods: {
    getCharacters() {
      this.store.loading = true;
      axios.get(this.store.api_base_url + this.store.endPoints.character)
        .then((resp) => {
          this.store.total = resp.data.info.count;
          this.store.characters = resp.data.results;
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.store.loading = false;
        })
    }
  },
  mounted() {
    this.getCharacters()
  }
}
</script>

<style lang="scss" scoped></style>