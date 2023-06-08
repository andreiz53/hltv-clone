import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const usePlayersStore = defineStore('players', () => {

    const players = ref([])
    const isLoading = ref(false)
    const error = ref("")

    async function fetchData() {
        try {
            isLoading.value = true
            const res = await fetch('https://hltv-api.vercel.app/api/players.json')
            const data = await res.json()
            players.value = await data
        } catch (err) {
            error.value = "There was an error while fetching data."
        } finally {
            isLoading.value = false
        }
    }

    fetchData();


    // Getters
    const data = computed(() => players);


    // Actions
    return { data, isLoading, error }


})