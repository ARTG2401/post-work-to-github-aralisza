<template>
  <div v-bind:id="id">
    <h1>About</h1>
    <p>{{ about }}</p>
  </div>
</template>

<script>
import data from './data'

export default {
  name: 'about',
  props: ['id'],
  data () {
    return {
      about: data.about
    }
  }
}
</script>
