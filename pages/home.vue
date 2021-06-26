<template>
  <div id="app">
    <div class="container">
      <header>
      <h1 class="title"><img src="img/logo.png" width="240" height="80">
      </h1>
      <nav class="nav">
        <ul class="menu-group">
          <li class="menu-item">
            <NuxtLink to="/home"><img src="img/home.png" width="30" height="20">ホーム</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/login"><img src="img/logout.png" width="30" height="20">ログアウト</NuxtLink>
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
        <tr v-for="item in shareLists" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.share }}</td>
          <td>
            <button @click="updateShare(item.id, item.share)">
              <input type="image" src="img/heart.png" width="20" height="20">
            </button>
          </td>
          <td>
            <button @click="deleteShare(item.id)"><input type="image" src="img/cross.png" width="20" height="20"></button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      name: "",
      newShare: "",
      shareLists: [],
      contactLists: [],
    };
  },
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

    async getShare() {
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/share/"
      );
      this.shareLists = resData.data.data;
    },

    async getcontact() {
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/contact/"
      );
      this.contactLists = resData.data.data;
    },
    
    async insertShare() {
      const sendData = {
        share: this.newShare,
      };
      await this.$axios.post("http://127.0.0.1:8000/api/share/", sendData);
      this.getShare();
    },
    async deleteShare(id) {
      await this.$axios.delete("http://127.0.0.1:8000/api/share/" + id);
      this.getShare();
    },
  },
      created() {
      this.getShare();
      },
};
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

.new {
  position: relative;
  left: 10px;
}





table,
td,
th {
  border: 1px solid #000;
  border-collapse: collapse;
  text-align: center;
  background: black;
  width: 500px;
}
td,
th {
  color: white;
  padding: 5px;
}
th {
  color: white;
  background: black;
}
button {
   background-color: black;
   color: white;
   }
</style>