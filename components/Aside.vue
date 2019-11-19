<template>
  <div class="ComponentAside">
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        分类
      </div>
      <div
        v-for="(item, index) in categories"
        :key="item._id"
        class="f12"
        :class="{'mt10': index > 0}"
      >
        <router-link :to="{name: 'categories-id', params: {id: item._id}}" class=""> {{item.name }}</router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    }
  }
};
</script>

<style lang="less">
.ComponentAside {
  padding-right: 20px;
  padding-top: 20px;
}
</style>