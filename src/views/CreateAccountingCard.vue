<script setup>
import BaseForm from '../components/BaseForm.vue';
import ShowExpenses from './ShowExpenses.vue';

import { ref } from "vue"
import { useStore } from "vuex"

const store = useStore()

const invoice = ref([])

const getInvoice = (inv) => 
    invoice.value.push(inv)

const createDay = (income) => 
    store.commit("accounting/createActivityDay", {income: income, inv: invoice.value})

const removeInvoice = (inv) => {
    invoice.value.splice(
        invoice.value.findIndex((index) => index.id == inv.id), 1
    )
}

</script>

<template>
    <div class="wrap-all">

        <BaseForm
            v-on:getInvoice="getInvoice"
            v-on:createDay="createDay"
        />
        <ShowExpenses v-if="invoice.length !== 0"
            :editInvoice="true"
            :showInvoice="invoice"
            v-on:removeInvoice="removeInvoice"
        />

    </div>
</template>