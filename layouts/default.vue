<template>
  <div class="LayoutDefault">
    <el-container>
      <el-header>
        <v-header />
      </el-header>
      <el-container>
        <el-main>
          <nuxt />
        </el-main>
        <el-aside width="200px">Aside</el-aside>
      </el-container>
      <el-footer>
        <v-footer />
      </el-footer>
    </el-container>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    "v-header": Header,
    "v-footer": Footer
  }
};
</script>

<style lang="less">
.LayoutDefault {
  width: 100%;
  @media (min-width: 1140px) {
    width: 1140px;
    margin: auto;
  }
}
</style>

