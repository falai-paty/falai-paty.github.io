new Vue({
  el: '#content',
  data: {
    posts: [
    	{
    		id: 'first-post',
    		title: 'First Post',
    		firstParagraph: 'First Paragraph',
    		createdAt: new Date(),
    		updatedAt: new Date()
    	},
    	{
    		id: 'hello-world',
    		title: 'Hello world!',
    		firstParagraph: 'Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!',
    		createdAt: new Date(),
    		updatedAt: new Date()
    	}
    ]
  }
});