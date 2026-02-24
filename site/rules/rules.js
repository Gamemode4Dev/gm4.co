// Based on https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll(`[href="#${id}"]`).forEach((el) => {
                el.classList.toggle("active", entry.isIntersecting)
            })
        })
    }, { rootMargin: "-20px 0px" })

    document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section)
    });
});
