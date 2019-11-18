<template>
  <div class="PageIndex">
    <div>
      <div ref="grid">
        <div
          class="grid-item"
          v-for="(item) in posts"
          :key="item._id"
          style="width:236px"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img
              :src="item.imgUrl"
              class="image"
            >
            <div style="padding: 14px;">
              <span>{{item.title}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item.createdAt }}</time>
                <el-button
                  type="text"
                  class="button"
                >操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let Masonry = null;
if (process.client) {
  Masonry = require("masonry-layout");
}

export default {
  async fetch({ store, params }) {
    await store.dispatch("getMenus");
  },
  async asyncData({ $axios, req }) {
    const { list } = await $axios.$get("/api/posts?pageSize=999");
    return {
      posts: list,
      currentDate: new Date()
    };
  },
  mounted() {
    var grid = this.$refs["grid"];
    var msnry = new Masonry(grid, {
      gutter: 18,
      itemSelector: ".grid-item",
      columnWidth: 236
    });
  }
};
</script>

<style lang="less">
.PageIndex {
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-item {
    margin-bottom: 10px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
</style>
