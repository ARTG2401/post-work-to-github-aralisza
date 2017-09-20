<template>
  <div v-bind:id="id">
    <h1>{{ item.company }}, {{ item.location }}, {{ item.dates }}</h1>
    <h2>{{item.title}}, {{ item.blurb }}</h2>
    <p>{{item.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'experience',
  props: ['id', 'item']
}
</script>
