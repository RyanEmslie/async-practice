// import { resolve } from "dns";

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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error something went wrong");
            }
        }, 2000);
    });
} //CreatePost

createPost({ title: "Post Three", body: "This is post Three!" })
    .then(getPosts)
    .catch(err => console.log(err));
