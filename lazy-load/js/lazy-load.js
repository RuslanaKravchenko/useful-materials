/*
 * Intersection Observer с unobserve (один на все)
 */
//=====================  Лучший вариант =====================
const images = document.querySelectorAll(".feed img");

const options = {
  rootMargin: "100px",
};

const onEntry = (entries, observer) => {
  console.log("🐷");

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.dataset.lazy;

      image.src = src;
      image.classList.add("appear");

      observer.unobserve(image);
    }
  });
};

const io = new IntersectionObserver(onEntry, options);

images.forEach((image) => io.observe(image));

// ========= вариант 2 ==================
// const images = document.querySelectorAll(".feed img");

// const lazyLoad = (targets) => {
//   const options = {
//     rootMargin: "100px",
//   };

//   const onEntry = (entries, observer) => {
//     console.log("🐷");

//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const image = entry.target;
//         const src = image.dataset.lazy;

//         image.src = src;
//         image.classList.add("appear");

//         observer.unobserve(image);
//       }
//     });
//   };

//   const io = new IntersectionObserver(onEntry, options);

//   targets.forEach((target) => io.observe(target));
// };

// lazyLoad(images);

// ======Intersection Observer с disconnect (на каждый свой)==========

// const images = document.querySelectorAll(".feed img");

// const lazyLoad = (target) => {
//   const options = {
//     rootMargin: "100px",
//   };

//   const io = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const image = entry.target;
//         const src = image.dataset.lazy;

//         image.src = src;
//         image.classList.add("appear");

//         observer.disconnect();
//       }
//     });
//   }, options);

//   io.observe(target);
// };

// images.forEach((image) => lazyLoad(image));
