/* eslint-disable no-unused-vars */
import gsap from 'gsap/gsap-core';

export default function foo() {
  const beforeEnter = (el) => {
    gsap.set(el, {
      x: '110%',
    });
  };
  const enter = (el) => {
    gsap.to(el, {
      duration: 1,
      x: 0,
      // ease: 'elastic.inOut(2.5, 1)',
      // onComplete: done,
    });
  };
  const leave = (el) => {
    gsap.to(el, {
      duration: 1,
      // scaleX: 1,
      // scaleY: 1,
      x: '-110%',
      // ease: 'elastic.inOut(2.5, 1)',
    });
    /* gsap.to(el, {
      duration: 0.2,
      delay: 0.5,
      opacity: 0,
      // onComplete: done,
    }); */
  };
}
