<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email<sup>*</sup>:</label>
        <input id="email" type="email" v-model="form.email">
      </div>
      <div>
        <label for="password">Password<sup>*</sup>:</label>
        <input id="password" type="password" v-model="form.password">
      </div>
      <button type="submit">Login</button>
      <button type="button" @click="clearForm">Clear</button>
    </form>
  </div>
</template>

<script>
const form = () => ({
  email: '',
  password: ''
})
export default {
  name: 'Login',

  data() {
    return {
      form: form()
    }
  },

  methods: {
    login() {
      this.$axios.post('/auth/login', this.form)
        .then(({ data }) => {
          this.$store.commit('auth/setToken', data.token)
          this.$store.commit('user/setName', data.user.name)
          this.$store.commit('user/setEmail', data.user.email)

          this.clearForm()

          this.$router.replace({ name: 'app.endpoints' })
        })
        .catch((error) => {
          console.error(error.response)
        })
    },
    clearForm() {
      const initalForm = form()
      Object.keys(initalForm).forEach((k) => {
        this.form[k] = form()[k]
      })
    }
  }
}
</script>
