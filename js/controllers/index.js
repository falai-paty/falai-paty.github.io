Vue.use(VueResource);

new Vue({
  el: '#content',
  ready: function() {
    this.$http.get('https://falai-paty-service-staging.herokuapp.com/posts').then(function(response) {
      this.$set('posts', response.data);
    });
  }
});