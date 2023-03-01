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
    <div class="wrap-all">
        <div class="footer">
            <div class="expenses">
                <span class="tag-expenses">Expenses</span>
                <span>{{ totalExpenses }}</span>
            </div>
            <div class="profit">
                <span class="tag-profit">Profit</span>
                <span>{{ totalEarning }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 0;
}
.expenses, .profit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.expenses { color: rgb(151, 2, 2); }
.profit { color: rgb(0, 255, 0); }
.tag-profit, .tag-expenses {
    font-size: 10px;
    color: white;
}
.expenses span, .profit span {
    margin: 3px 0;
}
</style>