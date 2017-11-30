<template>
  <div id="app">
    <div class="header clearfix">
      <nav>
        <ul class="nav nav-pills pull-right">
          <li role="presentation">
            <a href="#" @click="currentView='manage-posts'">Manage Posts</a>
          </li>
          <li role="presentation">
            <a href="#" @click="currentView='create-post'">Create Post</a>
          </li>
        </ul>
      </nav>
      <h3 class="text-muted">Admin Panel</h3>
    </div>

    <div class="container">
      <!-- render the currently active component/page here -->
      <keep-alive>
        <component :is="currentView"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentView: 'manage-posts'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
