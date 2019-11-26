<template>
  <div class="PageIndex">
    <el-page-header
      @back="goBack"
      :content="category.name"
    >
    </el-page-header>
    <div class="mt20">
      <PostList :posts="posts"></PostList>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";

export default {
  components: { PostList },
  async fetch({ store, params }) {
    await Promise.all([store.dispatch("initWeb")]);
  },
  async asyncData({ $axios, params }) {
    let p1 = $axios.$get(`/api/posts`, {
      params: {
        pageSize: 999,
        category: params.id
      }
    });
    let p2 = $axios.$get(`/api/categories/${params.id}`);
    const { list } = await p1;
    const category = await p2;
    return {
      posts: list,
      category,
      currentDate: new Date()
    };
  },
  head() {
    return {
      title: this.category.name + " - 分类 - 紫菊"
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>