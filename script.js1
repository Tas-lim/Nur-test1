/* =====================================
   نور القرآن
   Website Interactions
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Active Navigation
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function activateNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", activateNav);

    activateNav();

    /* ==========================
       Reveal on Scroll
    ========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

    /* ==========================
       Image Lightbox
    ========================== */

    const galleryImages = document.querySelectorAll(".gallery img");

    const lightbox = document.createElement("div");

    lightbox.id = "lightbox";

    lightbox.innerHTML = `
        <span id="close-lightbox">&times;</span>
        <img id="lightbox-image">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = document.getElementById("lightbox-image");
    const closeLightbox = document.getElementById("close-lightbox");

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightboxImage.src = image.src;
            lightbox.style.display = "flex";

            document.body.style.overflow = "hidden";

        });

    });

    closeLightbox.addEventListener("click", closeViewer);

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            closeViewer();

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeViewer();

        }

    });

    function closeViewer() {

        lightbox.style.display = "none";
        document.body.style.overflow = "";

    }

    /* ==========================
       Back To Top Button
    ========================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "topButton";

    document.body.appendChild(topButton);

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

    /* ==========================
       Audio Greeting
    ========================== */

    const audio = document.querySelector("audio");

    if (audio) {

        audio.addEventListener("play", () => {

            console.log("Audio playback started.");

        });

    }

});
