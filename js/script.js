document.addEventListener('DOMContentLoaded', () => {

    // ═══════════════════════════════════════════════════════════
    //  3D GLOSSY ORANGE POINTER & FLOWER CURSOR
    // ═══════════════════════════════════════════════════════════
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    const label = document.getElementById('cursorLabel');
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (dot && hasFinePointer) {

        let mouseX = -200, mouseY = -200; // off-screen initially
        let ringX  = -200, ringY  = -200;

        // Snap dot directly to mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top  = mouseY + 'px';
        });

        // Smooth lerp ring position via rAF (if ring exists)
        if (ring) {
            function lerpRing() {
                const speed = 0.1;
                ringX += (mouseX - ringX) * speed;
                ringY += (mouseY - ringY) * speed;
                ring.style.left = ringX + 'px';
                ring.style.top  = ringY + 'px';
                requestAnimationFrame(lerpRing);
            }
            lerpRing();
        }

        // ── Hide when mouse leaves window ──
        document.addEventListener('mouseleave', () => {
            dot.classList.add('is-hidden');
            if (ring) ring.classList.add('is-hidden');
        });
        document.addEventListener('mouseenter', () => {
            dot.classList.remove('is-hidden');
            if (ring) ring.classList.remove('is-hidden');
        });

        // ── Click burst effect ──
        document.addEventListener('mousedown', () => {
            dot.classList.add('is-clicking');
            if (ring) ring.classList.add('is-clicking');
        });
        document.addEventListener('mouseup', () => {
            dot.classList.remove('is-clicking');
            if (ring) ring.classList.remove('is-clicking');
        });

        // ── Contextual states ──
        // Links & buttons → pointer transitions to rotating flower
        const links = document.querySelectorAll('a, button');
        links.forEach(el => {
            el.addEventListener('mouseenter', () => {
                dot.classList.add('is-hovering');
                if (ring) ring.classList.add('is-hovering');
            });
            el.addEventListener('mouseleave', () => {
                dot.classList.remove('is-hovering');
                if (ring) ring.classList.remove('is-hovering');
            });
        });

        // Project cards on homepage
        const projectCards = document.querySelectorAll('.project-column-item, .project-image-box, .project-below-cta, .project-below-title a');
        projectCards.forEach(el => {
            el.addEventListener('mouseenter', () => {
                dot.classList.add('is-project');
                if (ring) ring.classList.add('is-project');
                if (label) label.textContent = 'VIEW';
                dot.classList.remove('is-hovering');
                if (ring) ring.classList.remove('is-hovering');
            });
            el.addEventListener('mouseleave', () => {
                dot.classList.remove('is-project');
                if (ring) ring.classList.remove('is-project');
                if (label) label.textContent = '';
            });
        });

        // Skill cards
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(el => {
            el.addEventListener('mouseenter', () => {
                dot.classList.add('is-hovering');
                if (ring) ring.classList.add('is-hovering');
            });
            el.addEventListener('mouseleave', () => {
                dot.classList.remove('is-hovering');
                if (ring) ring.classList.remove('is-hovering');
            });
        });
    }

    // --- Mobile Header Navigation Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        const toggleMenu = () => {
            const isOpen = mobileMenuBtn.classList.toggle('open');
            navLinks.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        };

        const closeMenu = () => {
            mobileMenuBtn.classList.remove('open');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        };

        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when clicking on any nav link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Close menu with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });
    }

    // ── Smooth Scrolling for Anchor Links ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                setTimeout(() => {
                    if (typeof ScrollTrigger !== 'undefined') {
                        ScrollTrigger.refresh();
                    }
                }, 600);
            }
        });
    });

    // Initialize GSAP Cinematic Scroll Transitions
    initScrollTransitions();

});

// ═══════════════════════════════════════════════════════════════
//  GSAP SCROLLTRIGGER CINEMATIC SECTION TRANSITIONS
//  - Incoming section image reveals first, then text follows
//  - Outgoing section text fades out first, followed by image
// ═══════════════════════════════════════════════════════════════
function initScrollTransitions() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger not loaded');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Honor reduced motion user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth <= 768;
    const scrubVal = isMobile ? 0.6 : 1.0;

    // Storytelling Sections Sequence
    const storySections = [
        {
            section: document.querySelector('.topo-hero'),
            backdrop: document.querySelector('.hero-forest-backdrop'),
            content: document.querySelector('.port-lockup-container'),
            isHero: true
        },
        {
            section: document.querySelector('#about'),
            backdrop: document.querySelector('.about-backdrop-art'),
            content: document.querySelector('.about-content-overlay'),
            isHero: false
        },
        {
            section: document.querySelector('#experience'),
            backdrop: document.querySelector('.exp-lake-backdrop'),
            content: document.querySelector('.exp-content-left-container'),
            isHero: false
        }
    ];

    storySections.forEach((item) => {
        if (!item.section) return;

        if (item.isHero) {
            // Hero section: starts at 100% visible, fades on scroll down, immediately unfades on scroll up
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item.section,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: scrubVal
                }
            });

            if (item.content) {
                heroTl.to(item.content, {
                    opacity: 0,
                    y: -45,
                    ease: 'power1.inOut'
                }, 0.25);
            }

            if (item.backdrop) {
                heroTl.to(item.backdrop, {
                    opacity: 0.15,
                    scale: 1.02,
                    ease: 'power1.inOut'
                }, 0.45);
            }
        } else {
            // Story sections (About, Experience, Education, Certificate):
            // - Rapid entrance as section comes into view
            // - Stays 100% fully visible and crystal clear throughout center view
            // - Smooth exit transition only when leaving section at bottom
            const storyTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item.section,
                    start: 'top 85%',
                    end: 'bottom top',
                    scrub: scrubVal
                }
            });

            // Set initial state
            if (item.backdrop) {
                gsap.set(item.backdrop, { opacity: 0.1, scale: 1.03, transformOrigin: 'center center' });
            }
            if (item.content) {
                gsap.set(item.content, { opacity: 0, y: 30 });
            }

            // Phase 1: Rapid Entrance (0.0 -> 0.20)
            if (item.backdrop) {
                storyTl.to(item.backdrop, {
                    opacity: 1,
                    scale: 1.0,
                    ease: 'power2.out',
                    duration: 0.15
                }, 0.0);
            }

            if (item.content) {
                storyTl.to(item.content, {
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out',
                    duration: 0.18
                }, 0.05);
            }

            // Phase 2: Dwell Window (0.20 -> 0.85) — Stays 100% fully visible and clear

            // Phase 3: Exit (0.85 -> 1.0)
            if (item.content && !item.disableExitFade) {
                storyTl.to(item.content, {
                    opacity: 0,
                    y: -30,
                    ease: 'power1.inOut',
                    duration: 0.12
                }, 0.85);
            }

            if (item.backdrop) {
                storyTl.to(item.backdrop, {
                    opacity: 0.15,
                    scale: 0.98,
                    ease: 'power1.inOut',
                    duration: 0.14
                }, 0.86);
            }
        }
    });

    // 3. Subsequent Sections Coordinated Reveals
    // Skills Cards Stagger



    // Projects Grid Stagger
    const workSection = document.querySelector('#work');
    const projectCards = document.querySelectorAll('.project-column-item');
    if (workSection && projectCards.length > 0) {
        gsap.fromTo(projectCards,
            { opacity: 0, y: 45 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: workSection,
                    start: 'top 75%',
                    end: 'top 30%',
                    scrub: scrubVal
                }
            }
        );
    }

    // Refresh ScrollTrigger calculations after assets and layout settle
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
}

