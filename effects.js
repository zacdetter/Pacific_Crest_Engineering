// function debounce(func, delay) {
//     let timeoutId;
//     return function() {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(func, delay);
//     };
//   }
  
//   function handleScroll() {
//     const slideElements = document.querySelectorAll('.slide-in');
//     slideElements.forEach(element => {
//       const slideInAt = (window.scrollY + window.innerHeight) - element.clientHeight / 2;
//       const elementBottom = element.offsetTop + element.clientHeight;
//       const isHalfShown = slideInAt > element.offsetTop;
//       const isNotScrolledPast = window.scrollY < elementBottom;
//       if (isHalfShown && isNotScrolledPast) {
//         element.classList.add('slide-in--show');
//       } else {
//         element.classList.remove('slide-in--show');
//       }
//     });
//   }
  
//   window.addEventListener('scroll', debounce(handleScroll, 20));
  

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in--show');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('slide-in--show');
    }
  });
}

function setupIntersectionObserver() {
  const slideElements = document.querySelectorAll('.slide-in');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  slideElements.forEach(element => {
    observer.observe(element);
  });
}

window.addEventListener('DOMContentLoaded', setupIntersectionObserver);

  
  