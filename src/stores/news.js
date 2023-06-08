import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useNewsStore = defineStore('news', () => {

    const news = ref([])
    const isLoading = ref(false)
    const error = ref("")

    async function fetchData() {
        try {
            isLoading.value = true
            const res = await fetch('https://hltv-api.vercel.app/api/news.json')
            const data = await res.json()

            const newData = await data.map((post, index) => {
                return {
                    ...post,
                    id: index
                }
            })

            news.value = await newData
        } catch (err) {
            error.value = "There was an error while fetching data."
        } finally {
            isLoading.value = false
        }
    }

    fetchData();


    // Getters
    const data = computed(() => news);

    const getPostById = computed(() => {
        return (id) => news.value.find(post => post.id === id)
    })


    // Actions

    return { data, isLoading, error, getPostById }


})