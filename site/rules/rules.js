/** @type IntersectionObserverInit */
const options = {
    rootMargin: "-40% 0px -50% 0px"
}


document.addEventListener("DOMContentLoaded", () => {
    const rules = document.querySelectorAll(".rules section");
    const navLinks = document.querySelectorAll(".rulesNav a");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id
                navLinks.forEach((link) => {
                    const target = link.getAttribute("href").substring(1)
                    if (target == id) {
                        link.classList.add("active")
                    } else {
                        link.classList.remove("active")
                    }
                })
            }
        })
    }, options)

    rules.forEach((section) => observer.observe(section));
});
