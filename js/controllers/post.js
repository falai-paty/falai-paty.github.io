Vue.use(VueResource);

var locationHelper = new Location(window.location);

new Vue({
  el: '#content',
  ready: function() {
  	this.$http.get(FalaiPatyService.uri).then(function(response) {
      this.$set('posts', response.data);
    });

    var postId = locationHelper.extractId();

		if (postId) {
			this.$http.get(FalaiPatyService.uri.concat('/').concat(postId)).then(function(response) {
	      this.$set('post', response.data);
	    });
		} else {
			window.location = "/";
		}
  }
});