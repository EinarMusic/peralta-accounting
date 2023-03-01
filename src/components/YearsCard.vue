<script setup>
defineProps({
    totalEarning: {
        type: Number,
        default: 0
    },
    totalExpenses: {
        type: Number,
        default: 0
    },
})
</script>

<template>
        <div class="wrap-account">
            <div class="account">

                <div class="info-business">
                    <div class="bills">
                        <span>Expenses</span>
                        <span class="amount-bills">{{ totalExpenses }}</span>
                    </div>
                    <span class="separator">•</span>
                    <div class="win">
                        <span>Profit</span>
                        <span class="amount-wins">{{ totalEarning }}</span>
                    </div>
                </div>

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
    /* align-items: center; */
    justify-content: space-between;

    background-color: rgb(28, 28, 28);
    border: 1px solid rgb(45, 45, 45);
    border-radius: 12px;

    /* width: 100%; */
    /* height: 100px; */

    padding: 10px 15px;
    margin: 0 10px 5px 0;
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
</style>