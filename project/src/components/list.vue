<template>
  <div @click="getProjectInfo">
    {{msg}}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: '测试页面2哈哈哈哈哈哈哈哈',
        projectId: 3
      }
    },
    methods: {
      getProjectInfo: function () {
        this.$http({
          method: 'get',
          url: '/hongcai/rest/projects/' + this.projectId + '/info'
        }).then((response) => {
          this.projectInfo = response.data
        })
      }
    }
  }
</script>
<style scoped>
</style>


