<script setup>

import { computed } from "vue"

const prop = defineProps({
    invoice: {
        type: Object,
        default: {}
    },
    activity: {
        type: Object,
        default: ""
    }
})

const date = computed(() => {
    return prop.activity.created.toLocaleDateString("es-ES", { day: 'numeric'}).slice(0, 2)
})
</script>

<template>
        <div class="wrap-account">
            <div class="account">
                <div class="info-data">
                    <span>{{ date }}</span>
                </div>

                <div class="info-business">
                    <div class="bills">
                        <span>Expenses</span>
                        <span class="amount-bills">{{ invoice.total }}</span>
                    </div>
                    <span class="separator">•</span>
                    <div class="win">
                        <span>Earnings</span>
                        <span class="amount-wins">{{ activity.income }}</span>
                    </div>
                </div>

            </div>
            <div class="total-by-date">
                <span>{{ activity.income - invoice.total }}</span>
            </div>
        </div>
</template>

<style scoped>
.wrap-account {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 5px 0;
}
.account {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgb(28, 28, 28);
    border: 1px solid rgb(45, 45, 45);
    border-radius: 12px;

    width: 100%;
    padding: 10px 15px;
    margin: 0 10px 5px 0;
}
.info-data {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: black;
    border: 1px solid rgb(53, 53, 53);

    font-size: 14px;

    border-radius: 50%;

    height: 35px;
    width: 35px;
}
.info-business {
    display: flex;
}
.separator {
    padding: 0 20px;
}
.bills, .win {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 10px;
    color: white;
}
.bills span, .win span {
    margin: 2px 0;
}
.amount-bills { 
    border-bottom: 1px solid rgb(151, 2, 2);
    color: rgb(151, 2, 2); 

    cursor: pointer;
}
.amount-wins { color: green; }
.total-by-date {
    color: white;
    font-size: 12px;
}
</style>