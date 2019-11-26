<template>
  <div
    ref="grid"
    class="PostList"
  >
    <div
      class="grid-item"
      v-for="(item) in posts"
      :key="item._id"
      style="width:236px"
    >
      <router-link :to="{name: 'posts-id', params: {id: item._id}}">
        <el-card :body-style="{ padding: '0px' }">
          <img
            :src="item.img.url"
            class="image"
            width="234"
            :height="(Math.floor(item.img.height * (234 / item.img.width)))"
          >
          <div style="padding: 14px;">
            <span>{{item.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.createdAt | date }}</time>
              <!-- <el-button
                  type="text"
                  class="button"
                >操作按钮</el-button> -->
            </div>
          </div>
        </el-card>
      </router-link>
    </div>
  </div>
</template>
<script>
let Masonry = null;
if (process.client) {
  Masonry = require("masonry-layout");
}
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
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
.PostList {
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-item {
    float: left;
    margin-bottom: 10px;
    a {
      text-decoration: none;
    }
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
}
</style>