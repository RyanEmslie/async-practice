const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" }
];

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
        console.log(output);
    }, 1000);
} //getPost

// Function is called after getPosts is rendered on HTML
// The third blog post will not appear on HTML
function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
} //CreatePost

getPosts();

createPost({ title: "Post Three", body: "This is post Three" });