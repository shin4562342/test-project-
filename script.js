
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200); 
    });
});

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});




const projects = [
    { title: "Web Project 1", category: "web", description: "This is a web development project.", image: "images/image1.jpg", link: "https://example.com/project1" },
    { title: "App Project 1", category: "app", description: "This is an app development project.", image: "images/image2.jpg", link: "https://example.com/project2" }
    
];
