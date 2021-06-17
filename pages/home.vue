<template>
  <div id="app">
    <div class="container">
      <header>
      <h1 class="title"><img src="img/logo.png" width="240" height="80">
      </h1>
      <nav class="nav">
        <ul class="menu-group">
          <li class="menu-item">
            <NuxtLink to="/home">ホーム</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/login">ログアウト</NuxtLink>
          </li>
        </ul>
      </nav>
      </header>
    </div>

    <div class="new">
      <h2>シェア</h2>
      <div class="share">
        <textarea name="share" cols="30" rows="5" maxlength="120" required id="share" v-model="newShare" />
      </div>
      <br />
      <button @click="insertShare">シェアする</button>
    </div>
    <div class="table">
      <h2>ホーム</h2>
      <table>
        <tr>
          <th>name</th>
          <th>share</th>
        </tr>
        <tr v-for="item in shareLists" :key="item.id">
          <td>{{ item.id }}</td>
          <td><input type="text" v-model="item.name" /></td>
          <td><input type="textarea" v-model="item.share" /></td>
          <td>
            <button @click="updateShare(item.id, item.share)">
              更新
            </button>
          </td>
          <td>
            <button @click="deleteShare(item.share)">削除</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
import firebase from '~/plugins/firebase'
export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('ログアウトが完了しました')
          this.$router.replace('/login')
        })
    },
  },
}
</script>


<style>
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
  color: white;
  text-decoration: none;
  cursor: pointer;
}


table,
td,
th {
  border: 1px solid #000;
  border-collapse: collapse;
  text-align: center;
}
td,
th {
  padding: 5px;
}
th {
  background: #f0e6cc;
}
</style>