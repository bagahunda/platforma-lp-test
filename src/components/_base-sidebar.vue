<template>
  <aside class="sidebar">
    <slot />
  </aside>
</template>

<script>
export default {
  name: "sidebar"
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 300px;
  background-color: #f3f6f8;
  font-size: 14px;
}
</style>
