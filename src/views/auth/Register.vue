<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="name">Name<sup>*</sup>:</label>
        <input id="name" type="text" v-model="form.name">
      </div>
      <div>
        <label for="email">Email<sup>*</sup>:</label>
        <input id="email" type="email" v-model="form.email">
      </div>
      <div>
        <label for="password">Password<sup>*</sup>:</label>
        <input id="password" type="password" v-model="form.password">
      </div>
      <div>
        <label for="password_confirmation">Confirm<sup>*</sup>:</label>
        <input id="password_confirmation" type="password" v-model="form.password_confirmation">
      </div>
      <button type="submit">Register</button>
      <button type="button" @click="clearForm">Clear</button>
    </form>
  </div>
</template>

<script>
const form = () => ({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

export default {
    name: 'Register',

    data() {
      return {
        form: form()
      }
    },

    methods: {
      register() {
        this.$axios.post('/auth/register', this.form)
          .then(({ data }) => {
            this.$store.commit('auth/setToken', data.token)
            this.$store.commit('user/setName', data.user.name)
            this.$store.commit('user/setEmail', data.user.email)

            this.clearForm()
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
