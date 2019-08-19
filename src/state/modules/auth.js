export const state = {
  authUser: {
    name: "Vasiliy"
  }
};

export const getters = {
  getAuthUser(state) {
    return state.authUser;
  }
};
