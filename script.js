/* =========================================================
   DOMINION AGENCY
   INTERACTION SYSTEM
========================================================= */


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    document.body.classList.remove("loading");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 700);

});

document.body.classList.add("loading");


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileMenu =
    document.querySelector(".mobile-menu");


if (menuToggle && mobileMenu) {

    menuToggle.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle("open");

        }
    );


    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
                    );

                }
            );

        });

}


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursor =
    document.querySelector(".cursor-glow");


if (
    cursor &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        event => {

            cursor.style.left =
                `${event.clientX}px`;

            cursor.style.top =
                `${event.clientY}px`;

        }
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.querySelector(".back-top");


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 700
        ) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .project, .process-step, .tech-cloud span, .about-content, .statement-content, .testimonial, .faq details"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1)";

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   REVEAL CLASS
========================================================= */

const revealStyle =
    document.createElement("style");

revealStyle.innerHTML = `

    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;

document.head.appendChild(
    revealStyle
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-center a"
    );


const navObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(
                            link => {

                                link.classList.remove(
                                    "active"
                                );

                                if (
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${entry.target.id}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }

                }
            );

        },
        {
            threshold: 0.3
        }
    );


sections.forEach(
    section => {

        navObserver.observe(
            section
        );

    }
);


/* =========================================================
   PARALLAX HERO
========================================================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


if (
    heroVisual &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (
                    event.clientX /
                    window.innerWidth
                ) - .5;

            const y =
                (
                    event.clientY /
                    window.innerHeight
                ) - .5;


            heroVisual.style.transform =
                `translate(${x * 8}px, ${y * 8}px)`;

        }
    );

}


/* =========================================================
   SMOOTH ANCHOR LINKS
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const target =
                    document.querySelector(
                        link.getAttribute(
                            "href"
                        )
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });