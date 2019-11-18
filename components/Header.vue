<template>
  <div class="ComponentsHeader clearfix">
    <div class="left-area ">
      <h2>紫菊</h2>
    </div>
    <el-menu
      class="right-area"
      mode="horizontal"
      :default-active="activeIndex"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="item in menus"
        :index="item._id"
        :key="item._id"
      >
        <router-link :to="item.path">{{item.name}}</router-link>
      </el-menu-item>
      <!-- <el-menu-item index="3">消息中心</el-menu-item> -->
      <!-- <el-submenu index="2">
        <template slot="title">
          我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
     
      <el-menu-item index="4">
        <a
          href="https://www.ele.me"
          target="_blank"
        >订单管理</a>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: undefined
    };
  },
  computed: {
    menus() {
      return this.$store.state.menus;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less">
.ComponentsHeader {
  height: inherit;
  box-sizing: border-box;
  border-bottom: solid 1px #e6e6e6;
  h2 {
    display: flex;
    height: inherit;
    align-items: center;
    margin: 0;
  }
  .left-area {
    float: left;
    height: 100%;
  }
  .right-area {
    float: right;
    border: none;
    background-color: transparent;
    li {
      &:hover {
        background-color: transparent !important;
      }
      a {
        text-decoration: none;
        // color: #1989fa;
        // opacity: 0.5;
        // display: block;
        // padding: 0 22px;
      }
    }
  }
}
</style>