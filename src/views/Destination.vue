<template>
  <section class="destination">
    <BaseContainer>
      <div class="destination__content">
        <h1 class="destination__page-title">
          <span>01</span>
          pick your destination
        </h1>

        <div class="destination__tabs tab">
          <div class="tab__controlers">
            <button
              v-for="(dest, i) in destinations"
              :key="i"
              class="btn tab__btn"
              :class="{ active: i === active }"
              type="button"
              :aria-label="`Switch to ${dest.title}`"
              @click="setActive(i)"
            >
              {{ dest.title }}
            </button>
          </div>

          <transition ref="tabContent">
            <!-- @before-enter="beforeEnter" -->
            <!-- @enter="enter" -->
            <!-- @leave="leave" -->
            <!-- :css="false" -->
            <div class="tab__content">
              <div class="tab__img">
                <picture>
                  <source
                    :srcset="curDestination?.img.webp"
                    :alt="curDestination?.img.altText"
                  />
                  <img
                    :src="curDestination?.img.png"
                    :alt="curDestination?.img.altText"
                  />
                </picture>
              </div>

              <div class="tab__text-wrapper">
                <div class="tab__text">
                  <h2 class="tab__title">
                    {{ curDestination?.title }}
                  </h2>
                  <p class="tab__description">
                    {{ curDestination?.description }}
                  </p>
                </div>

                <!-- <hr class="tab__divider" /> -->

                <div class="tab__info info">
                  <div class="info__item">
                    <h3 class="info__subtitle">avg. distance</h3>
                    <h4 class="info__title">
                      {{ curDestination?.avgDistance }}
                    </h4>
                  </div>
                  <div class="info__item">
                    <h3 class="info__subtitle">est. travel time</h3>
                    <h4 class="info__title">
                      {{ curDestination?.travelTime }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup>
import { computed, ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import gsap from 'gsap';
// import useAnimDestination from '@/composables/animation/useAnimDestination.js';

const store = useStore();

const tabContent = ref(null);

//* анимация
/* const { beforeEnter, enter, leave } = useAnimDestination(); 
console.log('beforeEnter: ', beforeEnter);
*/
function beforeEnter(el) {
  gsap.set(el, {
    x: '110%',
    onComplete: enter(el),
  });
  // .then(() => enter(el));
}
function enter(el, done) {
  console.log('done: ', done);
  gsap
    /* .set(el, {
      x: '110%',
    }) */
    .to(el, {
      duration: 1,
      x: 0,
      ease: 'Power2.easeOut',
      // onComplete: done,
    });
}
/* function leave(el) {
  gsap.to(el, {
    duration: 1,
    // scaleX: 1,
    // scaleY: 1,
    x: '-110%',
    // ease: 'elastic.inOut(2.5, 1)',
    onComplete: enter(el),
    // onComplete: beforeEnter(el),
  });
  // gsap.to(el, {
  //   duration: 0.2,
  //   delay: 0.5,
  //   opacity: 0,
  //   // onComplete: done,
  // });
} */

/* function beforeLeave(el) {
  gsap.set(el, {
    x: 0,
    onComplete: leave(el),
  });
} */

const active = ref(0);

const setActive = (index) => {
  // leave(tabContent.value, beforeEnter);
  // leave(tabContent.value);

  //* работает
  beforeEnter(tabContent.value);
  // beforeLeave(tabContent.value);

  active.value = index;
  // beforeEnter(tabContent.value);
  // enter(tabContent.value);
};

const destinations = computed(() => store.getters.getDestination);

const curDestination = computed(() =>
  destinations.value.find((el, index) => index === active.value)
);

//* анимация
</script>

<script>
import BaseContainer from '../components/base/BaseContainer.vue';
export default {
  name: 'Destination',
  components: { BaseContainer },
};
</script>

<style lang="scss" scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s;
}
.fade-enter-from {
  transform: translateX(110%);
}

.fade-leave-to {
  transform: translateX(-110%);
}

.fade-leave-from,
.fade-enter-to {
  transform: translateX(0);
} */

.destination {
  min-height: 100vh;
  padding-top: 8.8rem;
  padding-bottom: 5.8rem;

  @include mq(med) {
    padding-top: 12.8rem;
  }

  @include mq(xlg) {
    padding-top: 21.2rem;
    padding-bottom: 11.8rem;
    min-height: unset;
  }

  // .destination__content

  &__content {
    text-align: center;
  }

  // .destination__page-title

  &__page-title {
    font-size: 1.6rem;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 0.16875em;

    // margin-bottom: 2em;
    text-transform: uppercase;

    color: $white;

    span {
      font-weight: 600;
      opacity: 25%;
    }

    @include mq(med) {
      text-align: left;
    }

    @include mq(xlg) {
      font-size: 2.8rem;
      margin-left: 4%;
    }
  }

  // .destination__tabs

  &__tabs {
  }
}
.tab {
  position: relative;

  /* @include mq(xlg) {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 15rem;
  } */

  // .tab__controlers

  &__controlers {
    display: flex;
    align-items: center;

    justify-content: center;

    gap: 1.5rem;

    /* position: absolute;
    left: 50%;
    // top: 70%;
    top: 40%;
    transform: translate(-50%, -50%); */
    position: relative;
    // top: 220px;
    transform: translateY(22rem);
    z-index: 2;

    @include mq(med) {
      transform: translateY(35rem);
    }

    @include mq(xlg) {
      display: inline-flex;
      gap: 3.5rem;
      transform: translate(21rem, 7rem);
      // position: absolute;
    }
  }

  // .tab__btn

  &__btn {
    display: inline-block;

    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.4rem;
    letter-spacing: 16.857%;

    padding-bottom: 0.786em;

    color: $secondary;
    text-transform: uppercase;

    position: relative;

    @include mq(med) {
      font-size: 1.6rem;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      width: 100%;
      height: 3px;

      background: $white;
      opacity: 0;

      transform-origin: center center;
      transform: scaleX(0);

      transition: all 150ms ease-in-out;
    }

    &.active::before {
      transform: scaleX(1);
      opacity: 1;
      transition: all 150ms ease-in-out;
    }

    &:hover::before,
    &:focus::before {
      transform: scaleX(1);
      opacity: 0.5;
      transition: all 150ms ease-in-out;
    }
  }

  // .tab__content

  &__content {
    @include mq(xlg) {
      margin-top: 6.4rem;

      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      gap: 15rem;
    }
  }

  // .tab__img

  &__img {
    max-width: 17rem;
    margin: 0 auto;

    margin-bottom: 7.7rem;

    img {
      width: 100%;
      height: 100%;
    }

    @include mq(med) {
      max-width: 30rem !important;
    }

    @include mq(xlg) {
      max-width: 44.5rem !important;
      margin-bottom: 0;
    }
  }

  // .tab__text
  &__text {
    // .tab__text-wrapper
    &-wrapper {
      @include mq(xlg) {
        text-align: left;
      }
    }
  }

  // .tab__title

  &__title {
    font-size: 5.6rem;
    text-transform: uppercase;

    margin-bottom: 0.05em;

    @include mq(med) {
      font-size: 8rem;
    }

    @include mq(xlg) {
      font-size: 10rem;
    }
  }

  // .tab__description

  &__description {
    max-width: 65ch;
    margin: 0 auto;
    font-family: 'Barlow', sans-serif;
    font-size: 1.5rem;

    line-height: 167%;

    color: $secondary;

    padding-bottom: 2em;
    border-bottom: 1px solid hsl(231, 15%, 26%);

    @include mq(med) {
      font-size: 1.6rem;
    }

    @include mq(xlg) {
      max-width: 50ch;
      font-size: 1.8rem;
      padding-bottom: 3em;
    }
  }

  // .tab__divider

  &__divider {
  }

  // .tab__info

  &__info {
  }
}
.btn {
}
.info {
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;

  gap: 3rem;

  @include mq(med) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @include mq(xlg) {
    justify-content: flex-start;
    gap: 7.9rem;
  }

  // .info__item

  &__item {
    display: flex;
    flex-direction: column;

    gap: 1.2rem;
  }

  // .info__subtitle

  &__subtitle {
    font-size: 1.4rem;
    font-family: 'Barlow Condensed', sans-serif;

    letter-spacing: 16.86%;

    color: $secondary;
    text-transform: uppercase;
  }

  // .info__title

  &__title {
    font-size: 2.8rem;
  }
}
</style>
