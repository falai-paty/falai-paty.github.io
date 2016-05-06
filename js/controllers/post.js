Vue.use(VueResource);

new Vue({
  el: '#content',
  ready: function() {
  	this.$http.get('https://falai-paty-service-staging.herokuapp.com/posts').then(function(response) {
      this.$set('posts', response.data);
    });

  	var pattern = /(\w|-)+/;
		var result = pattern.exec(window.location.hash);

		if (result) {
			this.$http.get('https://falai-paty-service-staging.herokuapp.com/posts/'.concat(result[0])).then(function(response) {
	      this.$set('post', response.data);
	    });
		} else {
			window.location = "/";
		}
  }
});