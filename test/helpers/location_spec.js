'use strict';

describe('Location', function() {
	var location, values;

	beforeAll(function(){
		values = {hash: '#post-id'};

		location = new Location(values);
	});

	describe('.extractPostId', function() {
		it('should retrieve a post id', function() { expect(location.extractPostId()).toBe('post-id'); });
	});
});