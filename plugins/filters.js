import Vue from 'vue'

Vue.filter('date', function(val) {
  let date = new Date(val)
  const _ = num => num > 9 ? num : '0' + num
  return `${date.getFullYear()}/${_(date.getMonth() + 1)}/${_(date.getDate())}`
})