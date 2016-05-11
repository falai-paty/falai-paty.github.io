'use strict';

describe('Location', () => {
	let location;

	describe('.extractId', () => {
		describe('when hash has id', () => {
			beforeAll(() => location = new Location({hash: '#/post-id'}));

			it('should retrieve a id', () => expect(location.extractId()).toBe('post-id'));
		});

		describe('when hash does not have id', () => {
			beforeAll(() => location = new Location({hash: '#/'}));

			it('should retrieve undefined', () => expect(location.extractId()).toBeUndefined());
		});

		describe('when hash is blank', () => {
			beforeAll(() => location = new Location({hash: ''}));

			it('should retrieve undefined', () => expect(location.extractId()).toBeUndefined());
		});

		describe('when hash has a long path', function() {
			beforeAll(() => location = new Location({hash: '#/post-id/comments'}));

			it('should retrieve a id', () => expect(location.extractId()).toBe('post-id'));
		});
	});
});