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
                
                // Force reveal target section content immediately so text never disappears
                const targetContent = targetElement.querySelector('.about-content-overlay, .exp-content-left-container, .projects-header-area, .projects-4col-grid, .hero-editorial-container');
                if (targetContent) {
                    gsap.to(targetContent, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
                }

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

    // Initialize Kinetic Typography for Swetha in South Indian Languages
    initKineticTypography();

});

// ═══════════════════════════════════════════════════════════
//  KINETIC TYPOGRAPHY FOR NAME "SWETHA" IN SOUTH INDIAN LANGUAGES
// ═══════════════════════════════════════════════════════════
function initKineticTypography() {
    const kineticEl = document.getElementById('kineticNameText');
    if (!kineticEl) return;

    const names = [
        { text: 'Swetha', font: "'Gaegu', 'Sniglet', 'Caveat', cursive", size: "clamp(2.4rem, 5vw, 3.8rem)" },
        { text: 'ஸ்வேதா', font: "'Mukta Malar', 'Noto Sans Tamil', sans-serif", size: "clamp(2.4rem, 5vw, 3.8rem)" },
        { text: 'శ్వేత', font: "'Mandali', 'Noto Sans Telugu', sans-serif", size: "clamp(2.4rem, 5vw, 3.8rem)" },
        { text: 'ಶ್ವೇತಾ', font: "'Noto Sans Kannada', sans-serif", size: "clamp(2.4rem, 5vw, 3.8rem)" },
        { text: 'ശ്വേത', font: "'Noto Sans Malayalam', sans-serif", size: "clamp(2.4rem, 5vw, 3.8rem)" }
    ];

    let currentIndex = 0;

    setInterval(() => {
        // Blur out & scale down
        kineticEl.style.opacity = '0';
        kineticEl.style.transform = 'rotate(-2deg) scale(0.9)';
        kineticEl.style.filter = 'blur(6px)';

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % names.length;
            const currentObj = names[currentIndex];

            kineticEl.textContent = currentObj.text;
            kineticEl.style.fontFamily = currentObj.font;
            if (currentObj.size) {
                kineticEl.style.fontSize = currentObj.size;
            }

            // Blur back in & restore scale
            kineticEl.style.opacity = '1';
            kineticEl.style.transform = 'rotate(-2deg) scale(1)';
            kineticEl.style.filter = 'blur(0px)';
        }, 350);
    }, 2200);
}

// ═══════════════════════════════════════════════════════════════
//  GSAP SCROLLTRIGGER CINEMATIC SECTION TRANSITIONS
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
            section: document.querySelector('.designer-hero-section'),
            backdrop: null,
            content: document.querySelector('.designer-hero-container'),
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
            // Hero section: starts 100% visible, subtle fade when scrolling down to next section
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item.section,
                    start: 'top top',
                    end: 'bottom 40%',
                    scrub: scrubVal
                }
            });

            if (item.content) {
                heroTl.to(item.content, {
                    opacity: 0.2,
                    y: -20,
                    ease: 'power1.inOut'
                }, 0.5);
            }
        } else {
            // Story sections (About, Experience):
            // Smooth entrance as section comes into view, remains 100% fully visible while active
            const storyTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item.section,
                    start: 'top 85%',
                    end: 'top 30%',
                    scrub: scrubVal
                }
            });

            // Set initial entrance state
            if (item.backdrop) {
                gsap.set(item.backdrop, { opacity: 0.3, scale: 1.02, transformOrigin: 'center center' });
            }
            if (item.content) {
                gsap.set(item.content, { opacity: 0, y: 25 });
            }

            // Smooth entrance reveal
            if (item.backdrop) {
                storyTl.to(item.backdrop, {
                    opacity: 1,
                    scale: 1.0,
                    ease: 'power2.out'
                }, 0.0);
            }

            if (item.content) {
                storyTl.to(item.content, {
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out'
                }, 0.1);
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

