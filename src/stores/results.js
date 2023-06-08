import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useResultsStore = defineStore('store', () => {

    const results = ref([]);
    const isLoading = ref(false);
    const error = ref('')

    async function fetchData() {
        try {
            isLoading.value = false;
            const res = await fetch('https://hltv-api.vercel.app/api/results.json');
            const data = await res.json();

            results.value = data;
        } catch (err) {
            error.value = "Could not fetch results."
            throw new Error(err)
        } finally {
            isLoading.value = false;
        }
    }

    // Getters
    const data = computed(() => results.value)

    const getLatest = computed(() => (number = 10) => {
        let latest = results.value.slice(0, number);
        return latest;
    })


    fetchData();

    return { data, isLoading, error, getLatest }
})