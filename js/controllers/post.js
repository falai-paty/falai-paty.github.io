Vue.use(VueResource);

var locationHelper = new Location(window.location);

new Vue({
  el: '#content',
  ready: function() {
  	this.$http.get('https://falai-paty-service-staging.herokuapp.com/posts').then(function(response) {
      this.$set('posts', response.data);
    });

    var postId = locationHelper.extractId();

		if (postId) {
			this.$http.get('https://falai-paty-service-staging.herokuapp.com/posts/'.concat(postId)).then(function(response) {
	      this.$set('post', response.data);
	    });
		} else {
			window.location = "/";
		}
  }
});