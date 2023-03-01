import { createStore } from "vuex";

import accounting from "./modules/accounting.js";

export default createStore({
  strict: true,
  modules: {
    accounting: accounting,
  },
});
