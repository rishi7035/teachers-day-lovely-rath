/*
 * ============================================================
 * CINEMATIC TEACHERS' DAY EXPERIENCE
 * Mrs. Lovely Rath
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".container");
  const audio = document.querySelector(".song");

  const C = CONFIG;
  const M = C.messages;

  let timeline;
  let confettiAnimation = null;
  let confettiPieces = [];

  /* ==========================================================
     BASIC HELPERS
     ========================================================== */

  function createElement(tag, className, text = "") {
    const element = document.createElement(tag);

    if (className) {
      element.className = className;
    }

    if (text) {
      element.textContent = text;
    }

    return element;
  }

  function add(element) {
    container.appendChild(element);
    return element;
  }

  function createTextScreen(
    text,
    className = "cinematic-text"
  ) {

    const section =
      createElement("section", "scene");

    const textElement =
      createElement(
        "div",
        className,
        text
      );

    section.appendChild(textElement);

    add(section);

    return {
      section,
      text: textElement
    };
  }

  /* ==========================================================
     THEME
     ========================================================== */

  document.documentElement.style.setProperty(
    "--primary",
    C.colors.primary
  );

  document.documentElement.style.setProperty(
    "--accent",
    C.colors.accent
  );

  document.documentElement.style.setProperty(
    "--background",
    C.colors.background
  );

  document.documentElement.style.setProperty(
    "--text",
    C.colors.text
  );

  document.documentElement.style.setProperty(
    "--muted",
    C.colors.muted
  );

  /* ==========================================================
     AMBIENT BACKGROUND
     ========================================================== */

  const backgroundGlow =
    createElement(
      "div",
      "background-glow"
    );

  add(backgroundGlow);

  const particleLayer =
    createElement(
      "div",
      "particle-layer"
    );

  add(particleLayer);

  /*
   * Small ambient particles.
   * These remain extremely subtle.
   */

  const particleCount = 30;

  const particles = [];

  for (
    let i = 0;
    i < particleCount;
    i++
  ) {

    const particle =
      createElement(
        "span",
        "particle"
      );

    const size =
      Math.random() * 2.5 + 1;

    particle.style.width =
      `${size}px`;

    particle.style.height =
      `${size}px`;

    particle.style.left =
      `${Math.random() * 100}%`;

    particle.style.top =
      `${Math.random() * 100}%`;

    particle.style.opacity =
      `${Math.random() * 0.4 + 0.1}`;

    particleLayer.appendChild(
      particle
    );

    particles.push(particle);
  }

  /*
   * Natural floating movement.
   */

  particles.forEach(
    (particle) => {

      gsap.to(
        particle,
        {
          x:
            gsap.utils.random(
              -35,
              35
            ),

          y:
            gsap.utils.random(
              -55,
              55
            ),

          opacity:
            gsap.utils.random(
              0.15,
              0.65
            ),

          duration:
            gsap.utils.random(
              4,
              8
            ),

          repeat: -1,

          yoyo: true,

          ease:
            "sine.inOut",

          delay:
            Math.random() * 4
        }
      );

    }
  );

  /*
   * Slow breathing background glow.
   */

  gsap.to(
    backgroundGlow,
    {
      scale: 1.18,
      opacity: 0.72,

      duration: 5,

      repeat: -1,

      yoyo: true,

      ease:
        "sine.inOut"
    }
  );

  /* ==========================================================
     OPENING
     ========================================================== */

  const opening1 =
    createTextScreen(
      M.opening[0],
      "cinematic-text"
    );

  const opening2 =
    createTextScreen(
      M.opening[1],
      "cinematic-text emphasis"
    );

  gsap.set(
    [
      opening1.section,
      opening2.section
    ],
    {
      autoAlpha: 0
    }
  );

  /* ==========================================================
     MIDDLE STATEMENTS
     ========================================================== */

  const middleScenes = [];

  M.middle.forEach(
    (message, index) => {

      const scene =
        createTextScreen(
          message,

          index % 2 === 1
            ? "cinematic-text emphasis"
            : "cinematic-text"
        );

      gsap.set(
        scene.section,
        {
          autoAlpha: 0
        }
      );

      middleScenes.push(
        scene
      );
    }
  );

  /* ==========================================================
     REVEAL
     ========================================================== */

  const reveal =
    createTextScreen(
      M.reveal,
      "cinematic-text reveal-text"
    );

  const thankYou =
    createTextScreen(
      M.thankYou,
      "cinematic-text thankyou-text"
    );

  gsap.set(
    [
      reveal.section,
      thankYou.section
    ],
    {
      autoAlpha: 0
    }
  );

  /* ==========================================================
     GOLD ACCENT LINE
     ========================================================== */

  const goldenLine =
    createElement(
      "div",
      "golden-line"
    );

  add(goldenLine);

  gsap.set(
    goldenLine,
    {
      scaleX: 0,
      autoAlpha: 0
    }
  );

  /* ==========================================================
     TEACHER PROFILE
     ========================================================== */

  const profile =
    createElement(
      "section",
      "scene profile-scene"
    );

  const profileContent =
    createElement(
      "div",
      "profile-content"
    );

  const smallLabel =
    createElement(
      "div",
      "profile-label",
      "WITH GRATITUDE"
    );

  const teacherName =
    createElement(
      "h1",
      "teacher-name",
      C.name
    );

  const teacherRole =
    createElement(
      "div",
      "teacher-role",
      C.role
    );

  const photoFrame =
    createElement(
      "div",
      "photo-frame"
    );

  const photo =
    createElement(
      "img",
      "teacher-photo"
    );

  photo.src = C.photo;

  photo.alt = C.name;

  photo.loading = "eager";

  const photoGlow =
    createElement(
      "div",
      "photo-glow"
    );

  photoFrame.appendChild(
    photo
  );

  photoFrame.appendChild(
    photoGlow
  );

  profileContent.appendChild(
    smallLabel
  );

  profileContent.appendChild(
    teacherName
  );

  profileContent.appendChild(
    teacherRole
  );

  profileContent.appendChild(
    photoFrame
  );

  profile.appendChild(
    profileContent
  );

  add(profile);

  gsap.set(
    profile,
    {
      autoAlpha: 0
    }
  );

  gsap.set(
    [
      smallLabel,
      teacherName,
      teacherRole,
      photoFrame
    ],
    {
      autoAlpha: 0,
      y: 25
    }
  );

  gsap.set(
    photo,
    {
      scale: 1.08
    }
  );

  /* ==========================================================
     APPRECIATION
     ========================================================== */

  const appreciation =
    createElement(
      "section",
      "scene appreciation-scene"
    );

  const appreciationContent =
    createElement(
      "div",
      "appreciation-content"
    );

  const appreciationSmall =
    createElement(
      "div",
      "profile-label",
      "A FEW WORDS"
    );

  const appreciationText =
    createElement(
      "p",
      "appreciation-text",
      M.appreciation
    );

  appreciationContent.appendChild(
    appreciationSmall
  );

  appreciationContent.appendChild(
    appreciationText
  );

  appreciation.appendChild(
    appreciationContent
  );

  add(appreciation);

  gsap.set(
    appreciation,
    {
      autoAlpha: 0
    }
  );

  gsap.set(
    [
      appreciationSmall,
      appreciationText
    ],
    {
      autoAlpha: 0,
      y: 25
    }
  );

  /* ==========================================================
     FINAL EMOTIONAL TWIST
     ========================================================== */

  const final1 =
    createTextScreen(
      M.finalOne,
      "cinematic-text final-text"
    );

  const final2 =
    createTextScreen(
      M.finalTwo,
      "cinematic-text final-text final-emphasis"
    );

  gsap.set(
    [
      final1.section,
      final2.section
    ],
    {
      autoAlpha: 0
    }
  );

  /* ==========================================================
     FINAL CLOSING
     ========================================================== */

  const closing =
    createElement(
      "section",
      "scene closing-scene"
    );

  const closingContent =
    createElement(
      "div",
      "closing-content"
    );

  const closingTitle =
    createElement(
      "h2",
      "closing-title",
      "Happy Teachers' Day"
    );

  const closingName =
    createElement(
      "div",
      "closing-name",
      C.name
    );

  const closingLine =
    createElement(
      "div",
      "closing-line",
      M.closing
    );

  const replay =
    createElement(
      "button",
      "replay-button",
      "Watch again"
    );

  closingContent.appendChild(
    closingTitle
  );

  closingContent.appendChild(
    closingName
  );

  closingContent.appendChild(
    closingLine
  );

  closingContent.appendChild(
    replay
  );

  closing.appendChild(
    closingContent
  );

  add(closing);

  gsap.set(
    closing,
    {
      autoAlpha: 0
    }
  );

  gsap.set(
    [
      closingTitle,
      closingName,
      closingLine,
      replay
    ],
    {
      autoAlpha: 0,
      y: 20
    }
  );

  /* ==========================================================
     REALISTIC CONFETTI
     ========================================================== */

  const confettiCanvas =
    document.createElement(
      "canvas"
    );

  confettiCanvas.className =
    "confetti-canvas";

  document.body.appendChild(
    confettiCanvas
  );

  const ctx =
    confettiCanvas.getContext(
      "2d"
    );

  function resizeConfettiCanvas() {

    const dpr =
      Math.min(
        window.devicePixelRatio || 1,
        2
      );

    confettiCanvas.width =
      window.innerWidth * dpr;

    confettiCanvas.height =
      window.innerHeight * dpr;

    confettiCanvas.style.width =
      `${window.innerWidth}px`;

    confettiCanvas.style.height =
      `${window.innerHeight}px`;

    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );
  }

  resizeConfettiCanvas();

  window.addEventListener(
    "resize",
    resizeConfettiCanvas
  );

  /*
   * Create one piece of confetti.
   */

  function createConfettiPiece(
    x,
    y,
    angle,
    power
  ) {

    const colors = [
      "#d4af37",
      "#f0d98a",
      "#ffffff",
      "#e7c75f",
      "#b8962e"
    ];

    const width =
      Math.random() * 7 + 4;

    const height =
      Math.random() * 11 + 5;

    return {

      x,
      y,

      vx:
        Math.cos(angle) *
        power *
        (
          0.75 +
          Math.random() * 0.5
        ),

      vy:
        Math.sin(angle) *
        power *
        (
          0.75 +
          Math.random() * 0.5
        ),

      width,

      height,

      rotation:
        Math.random() *
        Math.PI *
        2,

      rotationSpeed:
        (
          Math.random() - 0.5
        ) * 0.25,

      gravity:
        0.13 +
        Math.random() * 0.06,

      drag:
        0.985 +
        Math.random() * 0.008,

      wobble:
        Math.random() *
        Math.PI *
        2,

      wobbleSpeed:
        0.04 +
        Math.random() * 0.05,

      wobbleAmount:
        0.5 +
        Math.random() * 0.7,

      opacity: 1,

      life:
        260 +
        Math.random() * 150,

      color:
        colors[
          Math.floor(
            Math.random() *
            colors.length
          )
        ]
    };
  }

  /*
   * Create a burst.
   */

  function confettiBurst(
    originX,
    originY,
    amount = 70,
    spread = Math.PI * 0.9,
    power = 9
  ) {

    for (
      let i = 0;
      i < amount;
      i++
    ) {

      const angle =
        -Math.PI / 2 +
        (
          Math.random() - 0.5
        ) * spread;

      confettiPieces.push(
        createConfettiPiece(
          originX +
            (
              Math.random() - 0.5
            ) * 20,

          originY +
            (
              Math.random() - 0.5
            ) * 15,

          angle,

          power *
            (
              0.75 +
              Math.random() * 0.45
            )
        )
      );
    }
  }

  /*
   * Draw and animate confetti.
   */

  function drawConfetti() {

    ctx.clearRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );

    confettiPieces =
      confettiPieces.filter(
        (piece) =>
          piece.life > 0
      );

    confettiPieces.forEach(
      (piece) => {

        /*
         * Gravity.
         */

        piece.vy +=
          piece.gravity;

        /*
         * Air resistance.
         */

        piece.vx *=
          piece.drag;

        piece.vy *=
          0.997;

        /*
         * Natural flutter.
         */

        piece.wobble +=
          piece.wobbleSpeed;

        piece.x +=
          piece.vx +
          Math.sin(
            piece.wobble
          ) *
          piece.wobbleAmount;

        piece.y +=
          piece.vy;

        /*
         * Rotation.
         */

        piece.rotation +=
          piece.rotationSpeed;

        /*
         * Lifetime.
         */

        piece.life--;

        /*
         * Fade near the end.
         */

        if (
          piece.life < 45
        ) {

          piece.opacity =
            piece.life / 45;
        }

        if (
          piece.opacity <= 0
        ) {
          return;
        }

        ctx.save();

        ctx.translate(
          piece.x,
          piece.y
        );

        ctx.rotate(
          piece.rotation
        );

        ctx.globalAlpha =
          piece.opacity;

        ctx.fillStyle =
          piece.color;

        /*
         * Simulated 3D flipping.
         */

        const flip =
          Math.cos(
            piece.wobble
          );

        const drawWidth =
          piece.width *
          Math.max(
            0.18,
            Math.abs(flip)
          );

        ctx.fillRect(
          -drawWidth / 2,
          -piece.height / 2,
          drawWidth,
          piece.height
        );

        ctx.restore();
      }
    );

    /*
     * Continue animation while
     * pieces are still alive.
     */

    if (
      confettiPieces.length > 0
    ) {

      confettiAnimation =
        requestAnimationFrame(
          drawConfetti
        );

    } else {

      confettiAnimation =
        null;

      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );
    }
  }

  /*
   * Start the final celebration.
   */

  function startConfetti() {

    confettiPieces = [];

    if (
      confettiAnimation
    ) {

      cancelAnimationFrame(
        confettiAnimation
      );

      confettiAnimation =
        null;
    }

    /*
     * Major left burst.
     */

    confettiBurst(
      window.innerWidth * 0.20,
      window.innerHeight * 0.82,
      80,
      Math.PI * 0.95,
      9
    );

    /*
     * Major right burst.
     */

    confettiBurst(
      window.innerWidth * 0.80,
      window.innerHeight * 0.82,
      80,
      Math.PI * 0.95,
      9
    );

    drawConfetti();

    /*
     * Second smaller burst.
     */

    setTimeout(
      () => {

        confettiBurst(
          window.innerWidth * 0.35,
          window.innerHeight * 0.88,
          35,
          Math.PI * 0.75,
          7.5
        );

        confettiBurst(
          window.innerWidth * 0.65,
          window.innerHeight * 0.88,
          35,
          Math.PI * 0.75,
          7.5
        );

        if (
          !confettiAnimation
        ) {
          drawConfetti();
        }

      },
      550
    );
  }

  /* ==========================================================
     MUSIC
     ========================================================== */

  function tryMusic() {

    if (
      !audio ||
      !C.music
    ) {
      return;
    }

    audio.src =
      C.music;

    audio.play().catch(
      () => {
        showSoundButton();
      }
    );
  }

  function showSoundButton() {

    if (
      document.querySelector(
        ".sound-button"
      )
    ) {
      return;
    }

    const button =
      createElement(
        "button",
        "sound-button",
        "Tap for music"
      );

    document.body.appendChild(
      button
    );

    button.addEventListener(
      "click",
      () => {

        audio
          .play()
          .catch(() => {});

        button.remove();

      },
      {
        once: true
      }
    );
  }

  /* ==========================================================
     MAIN TIMELINE
     ========================================================== */

  function createTimeline() {

    const tl =
      gsap.timeline({
        paused: true
      });

    /* --------------------------------------------------------
       START
       -------------------------------------------------------- */

    tl.to(
      ".container",
      {
        autoAlpha: 1,
        duration: 0.8
      }
    );

    /* --------------------------------------------------------
       OPENING 1
       -------------------------------------------------------- */

    tl.to(
      opening1.section,
      {
        autoAlpha: 1,
        duration: 0.8
      }
    );

    tl.fromTo(
      opening1.text,

      {
        y: 20,
        autoAlpha: 0
      },

      {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        ease:
          "power3.out"
      }
    );

    tl.to(
      {},
      {
        duration: 1.4
      }
    );

    tl.to(
      opening1.text,
      {
        y: -20,
        autoAlpha: 0,
        duration: 0.7
      }
    );

    tl.to(
      opening1.section,
      {
        autoAlpha: 0,
        duration: 0.4
      }
    );

    /* --------------------------------------------------------
       OPENING 2
       -------------------------------------------------------- */

    tl.to(
      opening2.section,
      {
        autoAlpha: 1,
        duration: 0.5
      }
    );

    tl.fromTo(
      opening2.text,

      {
        scale: 0.96,
        y: 25,
        autoAlpha: 0
      },

      {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        duration: 1.3,
        ease:
          "power3.out"
      }
    );

    tl.to(
      {},
      {
        duration: 1.5
      }
    );

    tl.to(
      opening2.text,
      {
        autoAlpha: 0,
        scale: 1.04,
        duration: 0.7
      }
    );

    tl.to(
      opening2.section,
      {
        autoAlpha: 0,
        duration: 0.3
      }
    );

    /* --------------------------------------------------------
       MIDDLE STATEMENTS
       -------------------------------------------------------- */

    middleScenes.forEach(
      (scene, index) => {

        tl.to(
          scene.section,
          {
            autoAlpha: 1,
            duration: 0.4
          }
        );

        tl.fromTo(
          scene.text,

          {
            y: 25,
            autoAlpha: 0
          },

          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease:
              "power3.out"
          }
        );

        tl.to(
          {},
          {
            duration:
              index ===
              middleScenes.length - 1
                ? 1.2
                : 0.8
          }
        );

        tl.to(
          scene.text,
          {
            y: -20,
            autoAlpha: 0,
            duration: 0.55
          }
        );

        tl.to(
          scene.section,
          {
            autoAlpha: 0,
            duration: 0.3
          }
        );
      }
    );

    /* --------------------------------------------------------
       AND TODAY
       -------------------------------------------------------- */

    tl.to(
      reveal.section,
      {
        autoAlpha: 1,
        duration: 0.5
      }
    );

    tl.fromTo(
      reveal.text,

      {
        y: 20,
        autoAlpha: 0
      },

      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease:
          "power3.out"
      }
    );

    tl.to(
      {},
      {
        duration: 1
      }
    );

    tl.to(
      reveal.text,
      {
        autoAlpha: 0,
        duration: 0.5
      }
    );

    tl.to(
      reveal.section,
      {
        autoAlpha: 0,
        duration: 0.3
      }
    );

    /* --------------------------------------------------------
       GOLD LINE
       -------------------------------------------------------- */

    tl.to(
      goldenLine,
      {
        autoAlpha: 1,
        scaleX: 1,
        duration: 0.9,
        ease:
          "power3.inOut"
      }
    );

    tl.to(
      {},
      {
        duration: 0.4
      }
    );

    /* --------------------------------------------------------
       THANK YOU
       -------------------------------------------------------- */

    tl.to(
      thankYou.section,
      {
        autoAlpha: 1,
        duration: 0.4
      }
    );

    tl.fromTo(
      thankYou.text,

      {
        y: 25,
        autoAlpha: 0
      },

      {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        ease:
          "power3.out"
      }
    );

    tl.to(
      {},
      {
        duration: 1.2
      }
    );

    /*
     * GOLD LINE DISAPPEARS FIRST.
     * Therefore it can never cross the text.
     */

    tl.to(
      goldenLine,
      {
        scaleX: 0,
        autoAlpha: 0,
        duration: 0.6
      }
    );

    tl.to(
      thankYou.text,
      {
        autoAlpha: 0,
        duration: 0.5
      }
    );

    tl.to(
      thankYou.section,
      {
        autoAlpha: 0,
        duration: 0.3
      }
    );

    /* --------------------------------------------------------
       TEACHER REVEAL
       -------------------------------------------------------- */

    tl.to(
      profile,
      {
        autoAlpha: 1,
        duration: 0.7
      }
    );

    tl.to(
      smallLabel,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease:
          "power3.out"
      }
    );

    tl.to(
      teacherName,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease:
          "power3.out"
      },
      "-=0.25"
    );

    tl.to(
      teacherRole,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease:
          "power3.out"
      },
      "-=0.35"
    );

    /* --------------------------------------------------------
       PHOTO REVEAL
       -------------------------------------------------------- */

    tl.to(
      photoFrame,
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        ease:
          "power3.out"
      },
      "+=0.15"
    );

    tl.to(
      photo,
      {
        scale: 1,
        duration: 2,
        ease:
          "power2.out"
      },
      "<"
    );

    tl.to(
      {},
      {
        duration: 1.8
      }
    );

    /* --------------------------------------------------------
       APPRECIATION
       -------------------------------------------------------- */

    tl.to(
      profile,
      {
        autoAlpha: 0,
        y: -20,
        duration: 0.8,
        ease:
          "power2.in"
      }
    );

    tl.to(
      appreciation,
      {
        autoAlpha: 1,
        duration: 0.7
      }
    );

    tl.to(
      appreciationSmall,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7
      }
    );

    tl.to(
      appreciationText,
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        ease:
          "power3.out"
      },
      "-=0.2"
    );

    tl.to(
      {},
      {
        duration: 2.3
      }
    );

    tl.to(
      [
        appreciationSmall,
        appreciationText
      ],
      {
        autoAlpha: 0,
        y: -15,
        duration: 0.6
      }
    );

    tl.to(
      appreciation,
      {
        autoAlpha: 0,
        duration: 0.5
      }
    );

    /* --------------------------------------------------------
       THE FINAL TWIST
       -------------------------------------------------------- */

    tl.to(
      final1.section,
      {
        autoAlpha: 1,
        duration: 0.5
      }
    );

    tl.fromTo(
      final1.text,

      {
        y: 20,
        autoAlpha: 0
      },

      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease:
          "power3.out"
      }
    );

    tl.to(
      {},
      {
        duration: 1.3
      }
    );

    tl.to(
      final1.text,
      {
        autoAlpha: 0,
        duration: 0.6
      }
    );

    tl.to(
      final1.section,
      {
        autoAlpha: 0,
        duration: 0.3
      }
    );

    tl.to(
      final2.section,
      {
        autoAlpha: 1,
        duration: 0.5
      }
    );

    tl.fromTo(
      final2.text,

      {
        scale: 0.95,
        autoAlpha: 0
      },

      {
        scale: 1,
        autoAlpha: 1,
        duration: 1.3,
        ease:
          "power3.out"
      }
    );

    tl.to(
      {},
      {
        duration: 1.8
      }
    );

    tl.to(
      final2.text,
      {
        autoAlpha: 0,
        scale: 1.03,
        duration: 0.7
      }
    );

    tl.to(
      final2.section,
      {
        autoAlpha: 0,
        duration: 0.4
      }
    );

    /* --------------------------------------------------------
       FINAL SCREEN
       -------------------------------------------------------- */

    tl.to(
      closing,
      {
        autoAlpha: 1,
        duration: 1
      }
    );

    tl.to(
      closingTitle,
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        ease:
          "power3.out"
      }
    );

    tl.to(
      closingName,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8
      },
      "-=0.35"
    );

    tl.to(
      closingLine,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7
      },
      "-=0.3"
    );

    tl.to(
      replay,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6
      },
      "+=0.8"
    );

    /*
     * CONFETTI STARTS ONLY AFTER
     * THE FINAL SCREEN IS FULLY VISIBLE.
     */

    tl.call(() => {
      startConfetti();
    });

    return tl;
  }

  /* ==========================================================
     REPLAY
     ========================================================== */

  replay.addEventListener(
    "click",
    () => {

      /*
       * Remove old confetti.
       */

      confettiPieces = [];

      if (
        confettiAnimation
      ) {

        cancelAnimationFrame(
          confettiAnimation
        );

        confettiAnimation =
          null;
      }

      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      /*
       * Restart animation.
       */

      if (!timeline) {
        timeline =
          createTimeline();
      }

      timeline.restart();

      tryMusic();
    }
  );

  /* ==========================================================
     START
     ========================================================== */

  timeline =
    createTimeline();

  timeline.play();

  tryMusic();

});
