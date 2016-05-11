function Location(values) {
	this.values = values;
}

Location.prototype = {
	extractId: function() {
		var result = /(\w|-)+/.exec(this.values.hash);

		return result == null ? undefined : result[0];
	}
};