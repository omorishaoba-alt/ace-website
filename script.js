/*
==========================================
ACE™ Website
Enterprise Science for Enterprise Capability
A Subsidiary of First Standard Title Limited (FSTL)
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for internal navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    // Discovery Form
    const form = document.getElementById("discoveryForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            if (name === "") {

                alert("Please enter your name.");

                return;

            }

            alert(
                "Thank you for submitting your Business Situation.\n\nACE™ will review your submission and provide an Initial Enterprise Assessment."
            );

            form.reset();

        });

    }

    // Footer Year
    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});n
