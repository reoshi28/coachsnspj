<template>
  <header>
    <h1 class="title"><img src="img/logo.png">
    ホーム</h1>
    <nav class="nav">
      <ul class="menu-group">
        <li class="menu-item">
          <NuxtLink to="/register">新規登録</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

</script>

<style scoped>
header {
  display: flex;
  height: 100px;
  padding: 0 50px;
  margin-bottom: 30px;
  background-color: black;
  align-items: center;
}
.title {
  margin-right: auto;
}
.menu-item {
  list-style: none;
  display: inline-block;
  padding: 10px;
}
.menu-item a {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>