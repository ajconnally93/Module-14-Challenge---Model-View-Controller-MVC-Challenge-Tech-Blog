const commentHandler = async function (event) {
    
	event.preventDefault();

	const blog = document.querySelector('.new-comment-form').dataset.blogid;
	const commentDesc = document.querySelector('#comment_description')


    // allows for creation/POST of comments by user
    // may need to require withAuth to attach to user profile? can test later
	if (commentDesc) {

		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				blog,
				commentDesc,
			}),

			headers: {
				'Content-Type': 'application/json'
			}
		});

		document.location.reload();
	}
};


const newCommentForm = document.querySelector('.new-comment-form');
newCommentForm.addEventListener('submit', commentHandler);