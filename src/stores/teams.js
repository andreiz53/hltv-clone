import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useTeamsStore = defineStore('teams', () => {

    const teams = ref([])
    const isLoading = ref(false)
    const error = ref("")

    async function fetchData() {
        try {
            isLoading.value = true
            const res = await fetch('https://hltv-api.vercel.app/api/player.json')
            const data = await res.json()

            teams.value = await data
        } catch (err) {
            error.value = "There was an error while fetching data."
        } finally {
            isLoading.value = false
        }
    }

    fetchData();


    // Getters
    const data = computed(() => teams);
    const getTeamById = computed(() => {
        return (id) => teams.value.find(team => team.id === id)
    })


    // Actions

    return { data, isLoading, error, getTeamById }


})