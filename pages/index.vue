<template>
  <div class="">
    <div>
      <ul>
        <li
          v-for="item in posts"
          :key="item._id"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch("getMenus");
  },
  async asyncData({ $axios, req }) {
    const { list } = await $axios.$get("/api/posts");
    return {
      posts: list
    };
  }
};
</script>
