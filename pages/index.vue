<template>
  <div class="PageIndex">
    <PostList :posts="posts"></PostList>
  </div>
</template>

<script>
import PostList from "@/components/PostList";

export default {
  components: { PostList },
  async fetch({ store, params }) {
    await Promise.all([store.dispatch("initWeb")]);
  },
  async asyncData({ $axios, req }) {
    const { list } = await $axios.$get("/api/posts?pageSize=999");
    return {
      posts: list,
      currentDate: new Date()
    };
  },
  head() {
    return {
      title: "紫菊 - 首页"
    };
  }
};
</script>