function Location(values) {
	this.values = values;
}

Location.prototype = {
	extractPostId: function() {
		var pattern = /(\w|-)+/;
		var result = pattern.exec(this.values.hash);

		return result[0];
	}
};