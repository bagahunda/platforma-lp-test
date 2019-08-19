<template>
  <ul class="sidebar-list">
    <router-link
      :to="`/talks/${talk.id}`"
      tag="li"
      class="sidebar-list__item"
      v-for="talk in talks"
      :key="talk.id"
    >
      <div class="sidebar-list__header">
        <p class="sidebar-list__title">
          {{ talk.subject }}
        </p>
        <span class="sidebar-list__date">
          {{ talk.created | date }}
        </span>
      </div>
      <p class="sidebar-list__preview">
        {{ talk.parts[0].text | truncate(30) }}
      </p>
    </router-link>
  </ul>
</template>

<script>
import { date, truncate } from "@/filters/filters";
export default {
  name: "chatsList",
  props: {
    talks: {
      type: Array,
      required: true
    }
  },

  filters: {
    date,
    truncate
  }
};
</script>

<style lang="scss" scoped>
.sidebar-list {
  margin: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  color: #7d8790;
}

.sidebar-list__item {
  padding: 22px 20px 11px 23px;
  border-bottom: 1px solid #e9edf2;
  border-left: 2px solid transparent;
  cursor: pointer;
}

.sidebar-list__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-list__title {
  margin-bottom: 0.5em;
  font-family: "TT Norms Bold", sans-serif;
  color: #35383d;
}

.sidebar-list__date {
  font-size: 10px;
}

.sidebar-list__preview {
  font-size: 13px;
}

.router-link-exact-active {
  background-color: white;
  border-left-color: #398bff;
}
</style>
