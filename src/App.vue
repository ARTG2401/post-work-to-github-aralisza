<template>
  <div id="app">
    <a href="#main-card" v-smooth-scroll>Main Card</a> <a href="#about-me" v-smooth-scroll>About Me</a> <a href="#experience" v-smooth-scroll>Experience</a>
    <hello id="main-card" msg="Main Card"></hello>
    <about id="about-me"></about>
    <h1>Experience</h1>
    <div id="experience" v-for="item in experience">
      <div v-bind:key="item.company">
        <experience v-bind:item="item"></experience>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Experience from './components/Experience'
import About from './components/About'
import data from './components/data'

export default {
  name: 'app',
  components: {
    Hello,
    Experience,
    About
  },
  data () {
    return {
      experience: data.experience
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
