<script setup>
import addIcon from "./icon/addIcon.vue"

import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const emit = defineEmits(["getInvoice", "goBack", "createDay"])

const income = ref("")
const invoice = ref({ amount: "", desc: "", price: "" })

const createInvoice = () => {
    invoice.value.id = Date.now()   
    invoice.value.total = invoice.value.amount * invoice.value.price

    emit('getInvoice', invoice.value)

    invoice.value = { amount: "", desc: "", price: "" }
}

const sendDay = () => 
    emit('createDay', income.value)

</script>

<template>
    <div>
        <div class="wrap-form">

            <div class="header">
                <div class="close-form" 
                    @click="router.push('/')"
                >
                    <span>Cancelar</span>
                </div>
                <div class="save-form"
                    @click="sendDay(), router.push('/')"
                >
                    <span>Agregar</span>
                </div>
            </div>

            <div class="primary-form">
                <div class="profit-form">
                    <input type="number" placeholder="Ingreso"
                        v-model="income"
                    >
                </div>

                <div class="expenses-total">
                    <input type="number" placeholder="Cantidad"
                        v-model="invoice.amount"
                    >
                    <input type="text" placeholder="Descripción"
                        v-model="invoice.desc"
                    >
                    <input type="number" placeholder="Precio"
                        v-model="invoice.price"
                    >
                    <div class="add-expense icon" 
                        @click="createInvoice()"
                    >
                        <addIcon />
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
.wrap-form {
    color: white;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5px 5px 10px 5px;
}
.header .close-form {
    color: red;
}
.primary-form {
    background-color: rgb(28, 28, 28);
    border: 1px solid rgb(45, 45, 45);
    border-radius: 12px;
    padding: 5px 15px;

    margin: 10px 0 20px 0;
}
.primary-form .profit-form {
    border-bottom: 1px solid rgb(45, 45, 45);
}
.primary-form .expenses-total  {
    position: relative;
}
.primary-form .expenses-total .add-expense {
    position: absolute;
    top: 5px;
    right: 5px;
}
.icon {
    cursor: pointer;
}
input {
    outline: none;
    border: none;

    width: 100%;
    height: 100%;

    padding: 10px;

    background-color: rgb(28, 28, 28);
    color: white;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>