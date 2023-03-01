import { createRouter, createWebHistory } from "vue-router";

import Weeks from "../components/Weeks.vue";
import Months from "../components/Months.vue";
import Years from "../components/Years.vue";
import CreateAccountingCard from "../views/CreateAccountingCard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/years",
      component: Years,
    },
    {
      path: "/months",
      component: Months,
    },
    {
      path: "/",
      component: Weeks,
    },
    {
      path: "/create",
      component: CreateAccountingCard,
    },
  ],
});

export default router;
