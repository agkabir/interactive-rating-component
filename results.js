const ratingId = document.getElementById("rating");
const params = new URL(document.location).searchParams;
ratingId.innerHTML = params.get("rating");
