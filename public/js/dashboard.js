const newBlogHandler = async (event) => {

    // necessary to prevent constant attempts at form submission from formhandler
	event.preventDefault();

	const title = document.querySelector('#blog-title').value.trim();
	const desc = document.querySelector('#blog-desc').value.trim();

	if (title && desc) {
		const response = await fetch(`/api/blogs`, {
			method: 'POST',
			body: JSON.stringify({ title, desc }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert("Blog creation failed.");
		}
	}
};


// allows for deletion of blog
// may need to set allowNull to true in model - can test later
const deletionHandler = async (event) => {

	if (event.target.hasAttribute('data-id')) {
		const id = event.target.getAttribute('data-id');
		const response = await fetch(`/api/blogs/${id}`, {
			method: 'DELETE',
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert("Blog deletion failed.");
		}
	}
};


const newBlogForm = document.querySelector(".new-blog-form");
newBlogForm.addEventListener('submit', newBlogHandler);


const blogList = document.querySelector(".blog-list");
blogList.addEventListener('click', deletionHandler);