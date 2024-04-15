import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    api_base_url: "https://rickandmortyapi.com/api/",
    endPoints: {
        character: "character",
        location: "location",
        episode: "episode",
    },
    characters: [],
    total: 0,
    loading: false
})