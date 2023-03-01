<script setup>
import backIcon from './icon/backIcon.vue'
import createIcon from './icon/createIcon.vue';
import searchIconVue from './icon/searchIcon.vue';

import { useRoute } from "vue-router"

const route = useRoute()
</script>

<template>
    <div class="wrap-all" 
        v-if="route.path !== '/create'"
    >

        <div class="nav">

            <div class="wrap-back-btn">
                <router-link class="back-btn" 
                    to="/months"
                >
                    <backIcon />
                    <span>Month</span>
                </router-link>
                <router-link v-if="false"
                    to="/create"
                >
                    <backIcon />
                    <span>Year</span>
                </router-link>
            </div>

            <div class="wrap-nav-feature" 
                v-if="route.path === '/'"
            >
                <router-link to="/create">
                    <searchIconVue />
                </router-link>
    
                <router-link to="/create">
                    <createIcon />
                </router-link>
            </div>

        </div>
        
    </div>
</template>

<style scoped>
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgb(28, 28, 28);
    /* border-bottom: 1px solid rgb(45, 45, 45); */

    padding: 15px 10px;
}
.nav a {
    margin: 0 10px;

    text-decoration: none;
    cursor: pointer;
}
.back-btn, .wrap-nav-feature {
    display: flex;
    align-items: center;
}
.back-btn span {
    color: white;
    font-size: 14px;
    margin-left: 5px;
}

</style>