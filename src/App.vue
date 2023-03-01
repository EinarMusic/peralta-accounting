<script setup>
import Years from './components/Years.vue'
import Months from './components/Months.vue'
import Weeks from './components/Weeks.vue'
import BaseNav from './components/BaseNav.vue'

import CreateAccountingCard from './views/CreateAccountingCard.vue';
import ShowExpenses from './views/ShowExpenses.vue'

import { ref } from 'vue'
const acc = ref([
    { amount: 20, commodity: "almuada", unit: 40, expenses: 40000 },
    { amount: 40, commodity: "percha", unit: 10, expenses: 10 },
    { amount: 30, commodity: "abrigo", unit: 20, expenses: 300 },
    { amount: 10, commodity: "paca", unit: 5, expenses: 1000 },
    { amount: 5, commodity: "tenis", unit: 1, expenses: 1 }
])

const otherTest = [
  {
    created_at: "febrero",
    earning: 7000,
    expenses: {
      amount: 7, 
      commodity: "almuada", 
      unit: 200, 
      total: 1100 
    }
  },
  {
    created_at: "febrero",
    earning: 9000,
    expenses: {
      amount: 1, 
      commodity: "paca", 
      unit: 20000, 
      total: 20000
    }
  }
]
</script>

<template>
  <div class="app">
    <BaseNav />

    <div class="content">
      <router-view></router-view>
      <!-- <CreateAccountingCard /> -->
      <!-- <ShowExpenses :acc="acc"/> -->
      <!-- <Years /> -->
      <!-- <Months /> -->
      <!-- <Weeks /> -->
    </div>

  </div>
</template>

<style scoped>
.content {
  padding: 15px;

  background: black
}
</style>
