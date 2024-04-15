<template>
    <div class="container">
        <h2>Character List</h2>
        <div class="row gy-4" v-if="!store.loading">
            <div class="col-12 col-md-6 col-lg-3" v-for="character in store.characters" :key="character.id">
                <CardComponent :id="character.id" :title="character.name" :image="character.image"
                    :status="character.status" :text="character.species" :subtext="character.gender" />
            </div>
        </div>
        <ApiLoader v-else />
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
import ApiLoader from './ApiLoader.vue';
export default {
    name: 'CharacterList',
    components: {
        CardComponent,
        ApiLoader
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>