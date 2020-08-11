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
        <input id="password" type="text" v-model="form.password">
      </div>
      <div>
        <label for="password_confirmation">Confirm<sup>*</sup>:</label>
        <input id="password_confirmation" type="text" v-model="form.password_confirmation">
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'Register',

    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        }
      }
    },

    methods: {
      register() {
        this.$axios.post('/auth/register', this.form)
          .then((response) => {
            console.log(response.data)
          })
          .catch((error) => {
            console.error(error.response)
          })
      }
    }
}
</script>
