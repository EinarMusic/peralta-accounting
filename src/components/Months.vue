<script setup>
import BaseCard from "./BaseCard.vue";
import BaseFooter from "./BaseFooter.vue";

import { ref } from "vue"

const test = ref(
    [
        {
            date: 'Enero',
            fecha: "1 Feb 2023",
            data: [
                { date: "1", expense: 150, earning: 5000 },
                { date: "2", expense: 150, earning: 5000 },
                { date: "3", expense: 150, earning: 5000 },
                { date: "4", expense: 150, earning: 5000 },
            ]
        },
        {
            date: 'Febrero',
            fecha: "8 Feb 2023",
            data: [
                { date: "1", expense: 150, earning: 5000 },
                { date: "2", expense: 150, earning: 5000 },
                { date: "3", expense: 150, earning: 5000 },
                { date: "4", expense: 150, earning: 5000 },
                { date: "5", expense: 150, earning: 5000 },
            ]
        },
        {
            date: 'Marzo',
            fecha: "15 Feb 2023",
            data: [
                { date: "1", expense: 150, earning: 5000 },
                { date: "2", expense: 150, earning: 5000 },
                { date: "3", expense: 150, earning: 5000 },
                { date: "4", expense: 150, earning: 5000 },
                { date: "5", expense: 150, earning: 5000 },
            ]
        },
        {
            date: 'Abril',
            fecha: "22 Feb 2023",
            data: [
                { date: "1", expense: 150, earning: 5000 },
                { date: "2", expense: 150, earning: 5000 },
                { date: "3", expense: 150, earning: 5000 },
                { date: "4", expense: 150, earning: 5000 },
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
    <div class="wrap-all" v-for="t in test" :key="t.id">

        <div class="header">
            <h2 class="date-title">{{ t.date }}</h2>
        </div>

        <div class="card" v-for="a in t.data" :key="a.id">
            <BaseCard :data="a" />
        </div>

        <div class="footer">
            <BaseFooter 
                :totalExpenses="totalExpenses(t.data)" 
                :totalEarning="totalEarning(t.data)" 
            />
        </div>

    </div>
</template>

<style scoped>
.wrap-all {
    color: white;
}

.header {
    padding: 5px 0 10px 0;
}
</style>