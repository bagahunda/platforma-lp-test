export const state = {
  isLoading: false,
  isChatLoading: false,
  activeTalk: null,
  isTyping: false,
  talks: [
    {
      id: 1,
      subject: "Простой запрос",
      created: "2019-08-01 23:59",
      parts: [
        {
          id: 1,
          author: "Vasiliy",
          text: "Привет, как дела?",
          created: "2019-08-01 23:59"
        },
        {
          id: 2,
          author: "petya",
          created: "2019-08-02 01:20",
          text: "Привет, все хорошо, спасибо!"
        },
        {
          id: 3,
          author: "petya",
          created: "2019-08-02 05:20",
          text: "А у тебя?"
        }
      ]
    },
    {
      id: 2,
      subject: "Вопрос по домену",
      created: "2016-03-02 14:19",
      parts: [
        {
          id: 1,
          author: "petr",
          created: "2019-08-06 12:20",
          text: "Здравствуйте, тут есть кто-нибудь?"
        },
        {
          id: 2,
          author: "Vasiliy",
          created: "2019-08-06 12:34",
          text: "Да, я вас слушаю!"
        },
        {
          id: 3,
          author: "petr",
          created: "2019-08-06 12:38",
          text: "Помогите мне настроить домен!"
        }
      ]
    }
  ]
};

export const getters = {
  getMessagesCount(state) {
    return state.talks.reduce((acc, item) => {
      return acc + item.parts.length;
    }, 0);
  },

  isLoading(state) {
    return state.isLoading;
  },

  isChatLoading(state) {
    return state.isChatLoading;
  },

  getTalks(state) {
    return state.talks;
  },

  getActiveTalk(state) {
    return state.activeTalk;
  },

  isTyping(state) {
    return state.isTyping;
  }
};

export const actions = {
  //just to immitate loading of chats
  init({ commit }) {
    commit("SET_LOADING", { field: "isLoading", status: true });
    setTimeout(() => {
      commit("SET_LOADING", { field: "isLoading", status: false });
    }, 2000);
  },

  setLoading({ commit }, { field, status }) {
    commit("SET_LOADING", { field, status });
  },

  setActiveTalk({ commit }, id) {
    commit("SET_ACTIVE_TALK", id);
  },

  setTyping({ commit }, status) {
    commit("SET_TYPING", status);
  },

  addMessage({ commit, dispatch }, message) {
    commit("ADD_MESSAGE", message);
    dispatch("setTyping", true);
    setTimeout(() => {
      commit("ADD_MESSAGE", {
        id: Math.random()
          .toString(16)
          .slice(2),
        author: "petr",
        created: new Date(),
        text: "Отлично. Спасибо большое!"
      });
      dispatch("setTyping", false);
    }, 2000);
  }
};

export const mutations = {
  SET_LOADING(state, { field, status }) {
    state[field] = status;
  },

  SET_ACTIVE_TALK(state, id) {
    const talk = state.talks.find(item => item.id === id);
    state.activeTalk = talk;
  },

  SET_TYPING(state, status) {
    state.isTyping = status;
  },

  ADD_MESSAGE(state, message) {
    state.activeTalk.parts.push(message);
  }
};
