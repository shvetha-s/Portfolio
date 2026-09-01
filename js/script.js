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

});

function initHero3DSphere() {
    const container = document.getElementById('hero3dWrapper');
    const canvas = document.getElementById('hero3dCanvas');
    if (!container || !canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 4.4);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // Main 3D Sphere Group
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    // 1. Top Hemisphere: Glossy Black Obsidian with Reflective Highlights
    const topGeo = new THREE.SphereGeometry(1.2, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const topMat = new THREE.MeshStandardMaterial({
        color: 0x050508,
        roughness: 0.18,
        metalness: 0.85,
        flatShading: false
    });
    const topMesh = new THREE.Mesh(topGeo, topMat);
    sphereGroup.add(topMesh);

    // 2. Glowing Fluorescent Lime Crescent Rim along the upper curve
    const crescentCurve = new THREE.EllipseCurve(
        0, 0,
        1.205, 1.205,
        0, Math.PI * 0.95,
        false,
        0
    );
    const crescentPoints = crescentCurve.getPoints(64);
    const crescentPath = new THREE.CatmullRomCurve3(crescentPoints.map(p => new THREE.Vector3(p.x, p.y, 0)));
    const crescentGeo = new THREE.TubeGeometry(crescentPath, 64, 0.045, 12, false);
    const crescentMat = new THREE.MeshBasicMaterial({
        color: 0xccff00
    });
    const crescentMesh = new THREE.Mesh(crescentGeo, crescentMat);
    crescentMesh.rotation.x = Math.PI * 0.15;
    crescentMesh.rotation.z = -Math.PI * 0.12;
    crescentMesh.position.set(0, 0.08, 0.04);
    sphereGroup.add(crescentMesh);

    // 3. Bottom Hemisphere: Luminous Fluorescent Lime Green
    const btmGeo = new THREE.SphereGeometry(1.2, 64, 32, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
    const btmMat = new THREE.MeshStandardMaterial({
        color: 0x54d216,
        emissive: 0x227708,
        emissiveIntensity: 0.42,
        roughness: 0.32,
        metalness: 0.12
    });
    const btmMesh = new THREE.Mesh(btmGeo, btmMat);
    sphereGroup.add(btmMesh);

    // 4. Sharp Equator Divider Trim
    const eqGeo = new THREE.RingGeometry(1.195, 1.215, 64);
    const eqMat = new THREE.MeshBasicMaterial({
        color: 0x060608,
        side: THREE.DoubleSide
    });
    const eqMesh = new THREE.Mesh(eqGeo, eqMat);
    eqMesh.rotation.x = Math.PI / 2;
    sphereGroup.add(eqMesh);

    // 5. Luminous Lime Green Ambient Ground Glow (Studio Floor Effect)
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 512;
    floorCanvas.height = 512;
    const ctx = floorCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(256, 256, 20, 256, 256, 240);
    grad.addColorStop(0, 'rgba(84, 220, 20, 0.88)');
    grad.addColorStop(0.35, 'rgba(65, 185, 15, 0.5)');
    grad.addColorStop(0.7, 'rgba(30, 110, 10, 0.15)');
    grad.addColorStop(1, 'rgba(12, 12, 14, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    const floorTexture = new THREE.CanvasTexture(floorCanvas);
    const floorGeo = new THREE.PlaneGeometry(4.2, 2.6);
    const floorMat = new THREE.MeshBasicMaterial({
        map: floorTexture,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.set(0, -1.55, 0);
    floorMesh.rotation.x = -Math.PI * 0.44;
    scene.add(floorMesh);

    // 6. Soft Radial Contact Shadow
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    const sGrad = sCtx.createRadialGradient(128, 128, 0, 128, 128, 120);
    sGrad.addColorStop(0, 'rgba(0, 0, 0, 0.92)');
    sGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0.4)');
    sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 256, 256);

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(1.8, 1.0);
    const shadowMat = new THREE.MeshBasicMaterial({
        map: shadowTexture,
        transparent: true,
        opacity: 0.82,
        depthWrite: false
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.set(0, -1.53, 0.05);
    shadowMesh.rotation.x = -Math.PI * 0.44;
    scene.add(shadowMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xccff00, 2.4);
    keyLight.position.set(-2.5, 4, 3);
    scene.add(keyLight);

    const bottomGlowLight = new THREE.PointLight(0x44dd11, 4.0, 7);
    bottomGlowLight.position.set(0, -1.3, 1.2);
    scene.add(bottomGlowLight);

    const rimLight = new THREE.DirectionalLight(0x88ff00, 2.6);
    rimLight.position.set(2, 3.5, -2);
    scene.add(rimLight);

    // Mouse Interaction
    let mouseX = 0, mouseY = 0;
    let targetRotX = 0, targetRotY = 0;
    let isDragging = false;
    let prevMouseX = 0, prevMouseY = 0;

    window.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
            mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            targetRotY = mouseX * 0.45;
            targetRotX = mouseY * 0.35;
        }
    });

    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => isDragging = false);

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        sphereGroup.rotation.y += deltaX * 0.01;
        sphereGroup.rotation.x += deltaY * 0.01;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
    });

    // Resize Handler
    function onResize() {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    }
    window.addEventListener('resize', onResize);

    // Animation Loop
    let clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Smooth Floating
        sphereGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.09 + 0.1;
        floorMesh.material.opacity = 0.8 + Math.sin(elapsedTime * 1.5) * 0.12;

        // Smooth Mouse Parallax Tilt
        if (!isDragging) {
            sphereGroup.rotation.y += (targetRotY - sphereGroup.rotation.y) * 0.05;
            sphereGroup.rotation.x += (targetRotX - sphereGroup.rotation.x) * 0.05;
        }

        renderer.render(scene, camera);
    }
    animate();
}

