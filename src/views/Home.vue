<template>
  <div class="home">
    <BaseSidebar>
      <div class="sidebar__title">
        Сообщения
        <span>{{ messagesCount }}</span>
      </div>
      <ChatsList :talks="talks" />
    </BaseSidebar>
    <main class="main" :key="$route.fullPath">
      <router-view></router-view>
      <ChatInput />
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ChatsList from "@/components/ChatsList";
import ChatInput from "@/components/ChatInput";
export default {
  name: "home",
  components: {
    ChatsList,
    ChatInput
  },

  computed: {
    ...mapGetters({
      talks: "talks/getTalks",
      messagesCount: "talks/getMessagesCount"
    })
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  height: 100vh;
  background-color: #fff;
}

.sidebar__title {
  padding: 24px 20px 16px 23px;
  display: flex;
  border-bottom: 1px solid #e9edf2;

  span {
    margin-left: 10px;
    color: #d2d8de;
  }
}

.main {
  position: relative;
  height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
</style>
