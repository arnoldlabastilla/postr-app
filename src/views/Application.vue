<template>
  <div>
    <ul>
      <li></li>
    </ul>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Application',

  created() {
    this.getEndpoints()
  },

  methods: {
    getEndpoints() {
      // 
    }
  }
}
</script>
