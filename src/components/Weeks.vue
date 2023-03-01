<script setup>
import BaseCard from "./BaseCard.vue";
import BaseFooter from "./BaseFooter.vue";

import { ref, computed } from "vue"
import { useStore } from "vuex"

const store = useStore()

// const weekIncome = () =>


// const accounting = computed(() => store.state.accounting.acc.map((acc) => acc.expenses).flat())

// const accounting = computed(() => store.state.accounting.acc.map((acc) => {
//     return { expenses: acc.expenses, earning: acc.earning, created_at: acc.created_at}
// }).flat())

const test = ref(
    [
        {
            date: 'Week 1',
            fecha: "1 Feb 2023",
            data: [
                { date: "Lu", expense: 150, earning: 5000 },
                { date: "Ma", expense: 150, earning: 5000 },
                { date: "Mi", expense: 150, earning: 5000 },
                { date: "Ju", expense: 150, earning: 5000 },
                { date: "Vi", expense: 150, earning: 5000 },
                { date: "Sa", expense: 150, earning: 5000 },
                { date: "Do", expense: 150, earning: 5000 },
            ]
        },
        {
            date: 'Week 2',
            fecha: "8 Feb 2023",
            data: [
                { date: "Lu", expense: 150, earning: 5000 },
                { date: "Ma", expense: 150, earning: 5000 },
                { date: "Mi", expense: 150, earning: 5000 },
                { date: "Ju", expense: 150, earning: 5000 },
                { date: "Vi", expense: 150, earning: 5000 },
                { date: "Sa", expense: 150, earning: 5000 },
                { date: "Do", expense: 150, earning: 5000 },
            ]
        },
        {
            date: 'Week 3',
            fecha: "15 Feb 2023",
            data: [
                { date: "Lu", expense: 150, earning: 5000 },
                { date: "Ma", expense: 150, earning: 5000 },
                { date: "Mi", expense: 150, earning: 5000 },
                { date: "Ju", expense: 150, earning: 5000 },
                { date: "Vi", expense: 150, earning: 5000 },
                { date: "Sa", expense: 150, earning: 5000 },
                { date: "Do", expense: 150, earning: 5000 },
            ]
        },
        {
            date: 'Week 4',
            fecha: "22 Feb 2023",
            data: [
                { date: "Lu", expense: 150, earning: 5000 },
                { date: "Ma", expense: 150, earning: 5000 },
                { date: "Mi", expense: 150, earning: 5000 },
                { date: "Ju", expense: 150, earning: 5000 },
                { date: "Vi", expense: 150, earning: 5000 },
                { date: "Sa", expense: 150, earning: 5000 },
                { date: "Do", expense: 150, earning: 5000 },
            ]
        },
        {
            date: 'Week 5',
            fecha: "29 Feb 2023",
            data: [
                { date: "Lu", expense: 150, earning: 5000 },
                { date: "Ma", expense: 150, earning: 5000 },
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
    <div class="wrap-all" v-for="activityDay in store.state.accounting.activityDay" :key="activityDay.id">

        <div class="header">
            <h2 class="date-title">{{ activityDay.created.toLocaleDateString("es-ES", { month: 'long'}) }}</h2>
            <span class="year-title">{{ activityDay.created.toLocaleDateString("es-ES", { year: 'numeric'}) }}</span>
        </div>

        <div class="card" v-for="invoice in activityDay.invoice" :key="invoice.id">
            <BaseCard :invoice="invoice" :activity="activityDay" />
        </div>

        <div class="footer">
            <BaseFooter 
                :totalExpenses="1000" 
                :totalEarning="20000" 
            />
        </div>

    </div>
</template>

<style scoped>
.wrap-all {
    color: white;
}

.header {
    display: flex;
    align-items: flex-end;

    margin: 5px 0 10px 0;
}
.year-title {
    font-size: 10px;
    margin: 0 0 3.5px 10px;
}
</style>