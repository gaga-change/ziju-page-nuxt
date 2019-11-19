<template>
  <div class="PageIndex">
    <el-page-header
      @back="goBack"
      :content="category.name"
    >
    </el-page-header>
    <div class="mt20">
      <div ref="grid">
        <div
          class="grid-item"
          v-for="(item) in posts"
          :key="item._id"
          style="width:236px"
        >
          <router-link :to="{name: 'posts-id', params: {id: item._id}}">
            <el-card :body-style="{ padding: '0px' }">
              <img
                :src="item.imgUrl"
                class="image"
                @load="handleLoad"
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
  mounted() {
    // msnry.imagesLoaded().progress(function() {
    //   msnry.masonry("layout");
    // });
    this.init()
  },
  methods: {
    handleLoad() {
      this.init()
    },
    init() {
      var grid = this.$refs["grid"];
      var msnry = new Masonry(grid, {
        gutter: 18,
        itemSelector: ".grid-item",
        columnWidth: 236
      });
      this.msnry = msnry;
      window.msnry = msnry;
    },
    goBack() {
      // console.log("go back");
      this.$router.go(-1);
    }
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
