<script setup>
import YearsCard from "./YearsCard.vue";

import { ref } from "vue"

const test = ref(
    [
        {
            date: '2023',
            fecha: "1 Feb 2023",
            data: [
                { date: "Y", expense: 150, earning: 5000 },
            ]
        },
        {
            date: '2024',
            fecha: "8 Feb 2023",
            data: [
                { date: "Y", expense: 150, earning: 5000 },
            ]
        },
        {
            date: '2025',
            fecha: "15 Feb 2023",
            data: [
                { date: "Y", expense: 150, earning: 5000 },
            ]
        },
        {
            date: '2026',
            fecha: "22 Feb 2023",
            data: [
                { date: "Y", expense: 150, earning: 5000 },
            ]
        },
    ]
)

const totalExpenses = (t) => {
    return t.map((data) => data.expense).reduce((a, b) => a + b)
}
const totalEarning = (t) => {
    return t.map((data) => data.earning).reduce((a, b) => a + b)
}

</script>

<template>
    <div class="mas">
        <div class="wrap-all" v-for="t in test" :key="t.id">

            <div class="header">
                <h2 class="date-title">{{ t.date }}</h2>
            </div>

            <div class="card" v-for="a in t.data" :key="a.id">
                <YearsCard 
                    :totalExpenses="totalExpenses(t.data)" 
                    :totalEarning="totalEarning(t.data)" 
                />
            </div>

        </div>
    </div>
</template>

<style scoped>
.wrap-all {
    color: white;
}
.mas {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.header {

    font-size: 10px;
}
</style>