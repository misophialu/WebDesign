var newPost_btn = document.getElementById("myNewPost")
newPost_btn.addEventListener("click",newPost);

function newPost(){
	console.log("new post");
}


var blog = {
	title: "Sophia's Blog",
	posts: [

		{
			title: "ABOUT ME",
			body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quia tempora porro, sed aliquam voluptates sit libero quod ipsum repellat laudantium explicabo quisquam odio, vel dolor laborum unde commodi officiis!",
			comments: [
				{
					profile_img: "http://placeimg.com/100/100/animals?random=1",
					comment: "This is a comment from your friend animal A"
				},
				{
					profile_img: "http://placeimg.com/100/100/animals?random=2",
					comment: "This is a comment from your friend animal B"
				},
				{
					profile_img: "http://placeimg.com/100/100/animals?random=3",
					comment: "This is a comment from your friend animal C"
				}
			]
		
		}
	]
}