
const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {
            if (filter === "all" || card.dataset.type === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

document.querySelector(".contact form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Your message has been sent!");
    e.target.reset();
});
const count = document.querySelector("#count");

cards.forEach(card => {
    const photo = card.querySelector(".photo");

    const like = document.createElement("button");
    like.className = "like";
    like.innerHTML = '<i class="fa-regular fa-heart"></i>';

    photo.appendChild(like);

    like.addEventListener("click", () => {
        like.classList.toggle("active");

        if (like.classList.contains("active")) {
            like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        } else {
            like.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }

        const total = document.querySelectorAll(".like.active").length;
        count.textContent = total;
    });
});
let skip = document.getElementById("skip");
let body1 = document.getElementById("body-1");
let body2 = document.getElementById("bod-2");
body1.style.display = "none";
skip.addEventListener("click", () => {
    body2.style.display = "none";
    body1.style.display = "block";
});