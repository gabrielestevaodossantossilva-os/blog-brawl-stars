let likes = 0;

function curtir() {
    likes = likes + 1;
    document.getElementById("likes").innerHTML = "Likes: " + likes;
}