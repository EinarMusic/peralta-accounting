<script setup>
import removeIcon from "../components/icon/removeIcon.vue"

defineEmits(["removeInvoice"])

defineProps({
    showInvoice: {
        type: Array,
        default: []
    },
    editInvoice: {
        type: Boolean,
        default: false 
    }
})
</script>

<template>
    <div>
        <div class="wrap-form">

            <div class="show-expenses">

                <div class="header-expenses"
                    :style="{'margin-right': editInvoice ? '25px' : 'none'}"
                >
                    <span>Cantidad</span>
                    <span class="comm-title">Descripción</span>
                    <span>Precio</span>
                    <span>Total</span>
                </div>

                <div class="wrap-card-expenses" v-for="invoice in showInvoice" :key="invoice.id">
                    <div class="tag-expenses">
                        <span class="amount">{{ invoice.amount }}</span>
                        <span class="commodity">{{ invoice.desc }}</span>
                        <span class="unit">{{ invoice.price }}</span>
                        <span class="expenses-total">{{ invoice.total }}</span>
                    </div>
                    <span class="remove-expense icon" 
                        v-if="editInvoice"
                        @click="$emit('removeInvoice', invoice)"
                    >
                        <removeIcon />
                    </span>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
.wrap-form {
    color: white;
}
.show-expenses {
    background-color: rgb(28, 28, 28);
    border: 1px solid rgb(45, 45, 45);
    border-radius: 12px; 
    
    padding: 10px 15px;
}
.show-expenses .header-expenses {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 10px;
    color: rgb(167, 167, 167);

    padding: 0 25px 10px 10px;
}
.show-expenses .wrap-card-expenses {
    display: flex;
    align-items: center;

    margin-bottom: 10px;
}
.show-expenses .tag-expenses {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgb(46, 45, 45); /* new color */
    border: 1px solid rgb(45, 45, 45);
    border-radius: 12px;  

    color: white;
    font-size: 12px;
    text-align: center;

    padding: 10px 10px; 
    width: 100%;
}
.show-expenses .tag-expenses .amount, .unit {
    width: 19px; 
}
.show-expenses .tag-expenses .commodity {
    white-space: nowrap; 
    width: 90px; 
    overflow: hidden;
    text-overflow: ellipsis; 
}
.show-expenses .tag-expenses .expenses-total {
    width: 42px; 
}

.remove-expense {
    margin-left: 15px;
}
.icon {
    cursor: pointer;
}
</style>