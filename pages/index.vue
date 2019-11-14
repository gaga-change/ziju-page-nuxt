<template>
  <div class="">
    <div>
      <ul>
        <li v-for="item in posts" :key="item._id">
          {{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({$axios, req}) {
    console.log($axios)
    const {list} = await $axios.$get('/api/posts')
    console.log(list)
    return {
      posts: list
    }
  }
}
</script>
