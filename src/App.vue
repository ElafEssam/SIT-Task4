<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-sm bg-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/Index" class="nav-link">Retrieve Item |</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Create" class="nav-link">Create Item |</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Edit" class="nav-link"> Edit Item </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0;
  width: 100%;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
