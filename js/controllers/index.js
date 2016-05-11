Vue.use(VueResource);

new Vue({
  el: '#content',
  ready: function() {
    this.$http.get(FalaiPatyService.uri).then(function(response) {
      this.$set('posts', response.data);
    });
  }
});