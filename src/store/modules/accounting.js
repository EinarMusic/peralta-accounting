const state = {
  activityDay: [],
  activityWeek: [],
  activityMonth: [],
  activityYear: [],
};

const mutations = {
  createActivityDay(state, invoice) {
    state.activityDay.push({
      id: Date.now(),
      created: new Date(),
      income: invoice.income,
      invoice: invoice.inv,
    });
  },
  createActivityWeek(state, day) {
    state.activityWeek.push({
      id: Date.now(),
      created: new Date(),
      income: day.income,
      activityDay: day.invoice,
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
