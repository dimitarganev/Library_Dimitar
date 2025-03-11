document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const books = document.querySelectorAll(".book");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalAuthor = document.getElementById("modalAuthor");
    const modalDescription = document.getElementById("modalDescription");
    const closeModalBtn = document.querySelector(".close");

    document.querySelector(".search button").addEventListener("click", function () {
        let input = searchInput.value.toLowerCase();
        let found = false;
        books.forEach(book => {
            let title = book.getAttribute("data-title").toLowerCase();
            if (title.includes(input)) {
                book.style.display = "block";
                found = true;
            } else {
                book.style.display = "none";
            }
        });
        if (!found) {
            alert("Няма намерени книги");
        }
    });

    books.forEach(book => {
        book.querySelector("button").addEventListener("click", function () {
            modalTitle.innerText = book.querySelector("h3").innerText;
            modalAuthor.innerText = book.querySelector("p").innerText;
            modalDescription.innerText = book.querySelector(".description").innerText;
            modal.style.display = "flex";
        });
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
