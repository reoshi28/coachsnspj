<template>
  <div class="login">
    <div class="container">
    <header>
    <h1 class="title"><img src="img/logo.png" width="240" height="80">
    </h1>
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
  </div>
    <h2>ログイン</h2>
    <input type="email" v-model="email" placeholder="email" required />
    <br />
    <input type="password" v-model="password" placeholder="password" required />
    <br />
    <button @click="login">ログイン</button>
    <NuxtLink to="/">戻る</NuxtLink>
  </div>
</template>


<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('ログインが完了しました')
          this.$router.push('home')
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。')
              break
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。')
              break
            case 'auth/wrong-password':
              alert('パスワードが間違っております。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    },
  },
}
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
  color: white;
  text-decoration: none;
  cursor: pointer;
}
</style>