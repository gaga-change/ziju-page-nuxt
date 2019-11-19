<template>
  <div>
    <h2>
      {{detail.title}}
    </h2>
    <p v-if="detail.intro">
      {{detail.intro}}
    </p>
    <el-button
      type="text"
      @click="handleDownload"
    >点击下载源码</el-button>
    <iframe
      ref="iframe"
      frameborder="0"
      style="width: 100%"
    ></iframe>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await Promise.all([store.dispatch("initWeb")]);
  },
  async asyncData({ $axios, params }) {
    const detail = await $axios.$get(`/api/posts/${params.id}`);
    return {
      id: params.id,
      detail
    };
  },
  head() {
    return {
      title: this.detail.title
    };
  },
  mounted() {
    this.renderIframe();
  },
  methods: {
    // 渲染效果
    renderIframe() {
      console.log(this.detail);
      const { source } = this.detail;
      const { css, html } = source;
      let dom = this.$refs["iframe"];
      let style = document.createElement("style");
      style.innerText = css;
      let content = document.createElement("div");
      content.innerHTML = html;
      const body = dom.contentWindow.document.getElementsByTagName("body")[0];
      body.innerHTML = "";
      body.appendChild(style);
      body.appendChild(content);
    },
    // 下载
    handleDownload() {
      let dom = this.$refs["iframe"];

      exportRaw(
        "template.html",
        `<html>${
          dom.contentWindow.document.getElementsByTagName("html")[0].innerHTML
        }</html>`
      );

      function fakeClick(obj) {
        var ev = document.createEvent("MouseEvents");
        ev.initMouseEvent(
          "click",
          true,
          false,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null
        );
        obj.dispatchEvent(ev);
      }

      function exportRaw(name, data) {
        var urlObject = window.URL || window.webkitURL || window;
        var export_blob = new Blob([data]);
        var save_link = document.createElement("a");
        save_link.href = urlObject.createObjectURL(export_blob);
        save_link.download = name;
        fakeClick(save_link);
      }
    }
  }
};
</script>