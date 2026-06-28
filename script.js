/* Desktop - hero images auto scroll X-axis */
const track = document.querySelector(".gallery-track");
track.innerHTML += track.innerHTML;

/* Mobile - hero images auto scroll Y-axis */
document.querySelectorAll(".mobile-gallery-track").forEach((track) => {
  track.innerHTML += track.innerHTML;
});

/* zig zag animation for schools logos */
document.querySelectorAll(".logo-track").forEach((track) => {
  const originals = [...track.children];

  // Calculate width of original items
  let width = 0;

  originals.forEach((item) => {
    width += item.offsetWidth;
  });

  // Add gap width (gap-6 = 24px)
  width += (originals.length - 1) * 24;

  // Duplicate only original items
  originals.forEach((item) => {
    track.appendChild(item.cloneNode(true));
  });

  // Set animation distance
  track.style.setProperty("--move", `${width}px`);
});

/* Mobile - pagination dots for school card */
const slider = document.getElementById("schoolSlider");
const dots = document.querySelectorAll("#schoolDots .dot");

slider.addEventListener("scroll", () => {
  const cardWidth = slider.children[0].offsetWidth + 16; // 16 = gap-4
  const index = Math.round(slider.scrollLeft / cardWidth);

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
});

// Exhibition Section slider control
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("featureSlider");
  const prevBtn = document.getElementById("featurePrev");
  const nextBtn = document.getElementById("featureNext");

  const gap = 16; // gap-4

  function getScrollAmount() {
    return slider.children[0].offsetWidth + gap;
  }

  function updateButtons() {
    const atStart = slider.scrollLeft <= 5;
    const atEnd =
      slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 5;

    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;

    // Previous button
    prevBtn.classList.toggle("opacity-40", atStart);
    prevBtn.classList.toggle("cursor-not-allowed", atStart);
    prevBtn.classList.toggle("pointer-events-none", atStart);

    // Next button
    nextBtn.classList.toggle("opacity-40", atEnd);
    nextBtn.classList.toggle("cursor-not-allowed", atEnd);
    nextBtn.classList.toggle("pointer-events-none", atEnd);
  }

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  });

  slider.addEventListener("scroll", updateButtons);
  window.addEventListener("resize", updateButtons);

  // Initial state
  updateButtons();
});

// Parent's review Section slider control
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("reviewSlider");
  const prevBtn = document.getElementById("reviewPrev");
  const nextBtn = document.getElementById("reviewNext");

  const gap = 16; // gap-4

  function scrollAmount() {
    return slider.children[0].offsetWidth + gap;
  }

  function updateButtons() {
    prevBtn.disabled = slider.scrollLeft <= 5;

    nextBtn.disabled =
      slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 5;
  }

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: scrollAmount(),
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -scrollAmount(),
      behavior: "smooth",
    });
  });

  slider.addEventListener("scroll", updateButtons);
  window.addEventListener("resize", updateButtons);

  updateButtons();
});
