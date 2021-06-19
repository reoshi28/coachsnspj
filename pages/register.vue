<template>
  <div class="register">
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
    <h2>新規登録</h2>
    <input type="text" v-model="name" placeholder="name" name="name" id="name"  />
    <br />
    <input type="email" v-model="email" placeholder="email" name="email" id="email"  />
    <br />
    <input type="password" v-model="password" placeholder="password" name="password" id="password"  />
    <br />
    <button @click="register">新規登録</button>
    <NuxtLink to="/">戻る</NuxtLink>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      name: "",
      contactLists: [],
      email: null,
      password: null,
    };
  },
  methods: {
    register() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {

        const sendData = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        this.$axios.post("http://127.0.0.1:8000/api/contact/", sendData);
        this.$router.push("/login");
        console.log(data);

          data.user.sendEmailVerification().then(() => {
            this.$router.replace('/login')
          })
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/email-already-in-use':
              alert('このメールアドレスはすでに使われています。')
              break
            case 'auth/weak-password':
              alert('パスワードは6文字以上で入力してください。')
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