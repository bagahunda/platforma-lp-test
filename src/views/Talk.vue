<template>
  <div class="message-container" ref="messages">
    <div class="messages">
      <basePreloader v-if="isChatLoading" position="absolute" />
      <div
        class="message"
        v-for="part in activeTalk.parts"
        :key="part.id"
        :class="[
          authUser.name === part.author ? 'message--out' : 'message--in'
        ]"
      >
        <div class="message__text">
          {{ part.text }}
        </div>
        <div class="message__info">
          {{ part.author }}
          <span>{{ part.created | messageDate }}</span>
        </div>
      </div>
    </div>
    <TypingIndicator v-if="isTyping" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { messageDate } from "@/filters/filters";
import TypingIndicator from "@/components/TypingIndicator";
export default {
  components: {
    TypingIndicator
  },

  created() {
    this.setChatLoading({ field: "isChatLoading", status: true });
    setTimeout(() => {
      this.setChatLoading({ field: "isChatLoading", status: false });
    }, 2000);
    const id = this.$route.params.id;
    this.setActiveTalk(+id);
  },

  computed: {
    ...mapGetters({
      activeTalk: "talks/getActiveTalk",
      authUser: "auth/getAuthUser",
      isChatLoading: "talks/isChatLoading",
      isTyping: "talks/isTyping"
    })
  },

  methods: {
    ...mapActions({
      setActiveTalk: "talks/setActiveTalk",
      setChatLoading: "talks/setLoading"
    })
  },

  filters: {
    messageDate
  },

  watch: {
    activeTalk: {
      handler: function() {
        this.$nextTick(() => {
          this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.message-container {
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0;
  height: calc(100vh - 79px);
  overflow: auto;
}

.messages {
  margin-top: auto;
  display: flex;
  flex-direction: column;
}

.message {
  width: 380px;
  margin-bottom: 20px;

  &--out {
    align-self: flex-end;

    .message__text {
      background-color: #e9f5f4;
    }

    .message__info {
      justify-content: flex-end;
    }
  }
}

.message__text {
  margin-bottom: 0.5em;
  font-size: 14px;
  color: #475453;
  padding: 18px 17px 16px 26px;
  border-radius: 8px;
  background-color: #f6f7f9;
}

.message__info {
  display: flex;
  align-items: center;
  font-family: "TT Norms Bold", sans-serif;
  font-size: 13px;
  color: black;
  text-transform: capitalize;

  span {
    margin-left: 12px;
    font-family: "TT Norms Regular", sans-serif;
    font-size: 10px;
    color: #b7c0c8;
  }
}
</style>
