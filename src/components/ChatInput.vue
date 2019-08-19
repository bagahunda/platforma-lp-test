<template>
  <div class="chat-input">
    <form class="form" @submit.prevent="onSubmit">
      <div class="form__row">
        <input
          type="text"
          class="form__control"
          v-model="message"
          ref="input"
          placeholder="Введите текст..."
        />
        <button
          type="submit"
          class="form__button"
          :disabled="!message || isDisabled"
        >
          <svg
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="70"
            height="70"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve"
            v-if="isDisabled"
          >
            <path
              fill="#fff"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
          <svg
            width="22"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-else
          >
            <path
              d="M.01 17.256a.5.5 0 0 0 .689.462l20.17-8.255a.5.5 0 0 0 0-.926L.7.282a.5.5 0 0 0-.69.462L.001 6.559a.5.5 0 0 0 .437.497l11.38 1.448c.582.074.582.918 0 .992L.437 10.944a.5.5 0 0 0-.437.497l.008 5.815z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "chatInput",
  data() {
    return {
      message: null,
      isDisabled: false
    };
  },

  computed: {
    ...mapGetters({
      authUser: "auth/getAuthUser"
    })
  },

  mounted() {
    this.$refs.input.focus();
  },

  methods: {
    ...mapActions({
      addMessage: "talks/addMessage",
      setChatLoading: "talks/setLoading"
    }),
    onSubmit() {
      this.isDisabled = true;
      setTimeout(() => {
        this.addMessage({
          id: Math.random()
            .toString(16)
            .slice(2),
          author: this.authUser.name,
          created: new Date(),
          text: this.message
        });
        this.isDisabled = false;
        this.message = null;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-input {
  height: 79px;
  border-top: 1px solid #e9edf2;
}

.form__row {
  display: flex;
}

.form__control {
  flex-grow: 1;
  height: 79px;
  padding: 0 33px;
  outline: none;
  border: none;
  font-size: 14px;
  color: #7d8790;
  appearance: none;
}

.form__button {
  padding: 0;
  margin: 0;
  width: 79px;
  height: 79px;
  background-color: #398bff;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  appearance: none;

  &:disabled {
    opacity: 0.5;
  }
}
</style>
