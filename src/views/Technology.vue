<template>
  <section class="technology">
    <base-container>
      <div class="technology__wrapper">
        <h1 class="technology__page-title">
          <span>03</span>
          space launch 101
        </h1>
        <div class="technology__controls controls">
          <button
            v-for="(technology, i) in technologies"
            :key="i"
            class="btn controls__btn"
            :class="{ active: i === active }"
            :aria-label="`go to point ${i + 1}`"
            type="button"
            @click="setActive(i)"
          >
            {{ i + 1 }}
          </button>
        </div>

        <div ref="tabContent" class="technology__tab tab">
          <div class="tab__img">
            <picture>
              <source
                media="(max-width: 1199px)"
                :srcset="tech?.img.landscape"
              />
              <source
                media="(min-width: 1200px)"
                :srcset="tech?.img.portrait"
              />
              <img :src="tech?.img.landscape" alt="" height="170" />
            </picture>
          </div>

          <div class="tab__content">
            <h3 class="tab__subtitle">the terminology</h3>
            <h2 class="tab__title">{{ tech?.name }}</h2>

            <p class="tab__description">
              {{ tech?.description }}
            </p>
          </div>
        </div>
      </div>
    </base-container>
  </section>
</template>

<script setup>
import { computed, ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import gsap from 'gsap';
// import useAnimDestination from '@/composables/animation/useAnimDestination.js';

const store = useStore();
console.log('store: ', store);

const tabContent = ref(null);

//* анимация
/* const { beforeEnter, enter, leave } = useAnimDestination(); 
console.log('beforeEnter: ', beforeEnter);
*/
function beforeEnter(el) {
  gsap.set(el, {
    y: '40%',
    opacity: 0.5,
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
      y: 0,
      opacity: 1,
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

const technologies = computed(() => store.getters.getTechnologies);
console.log('technologies: ', technologies);

const tech = computed(() =>
  technologies.value.find((el, index) => index === active.value)
);
</script>

<script>
import BaseContainer from '../components/base/BaseContainer.vue';
export default {
  name: 'Technology',
  components: { BaseContainer },
};
</script>

<style lang="scss" scoped>
.technology {
  padding-top: 13rem;
  padding-bottom: 8rem;

  color: $white;

  background: url(/img/technology/background-technology-mobile.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @include mq(med) {
    background: url(/img/technology/background-technology-tablet.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  @include mq(xlg) {
    padding-top: 21rem;

    background: url(/img/technology/background-technology-desktop.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  // .technology__wrapper

  &__wrapper {
    // text-align: center;

    position: relative;
  }

  // .technology__page-title

  &__page-title {
    @extend %tpl-page-title;

    margin-bottom: 2em;
    text-align: center;

    @include mq(med) {
      text-align: left;
      // padding-left: 4%;
      margin-bottom: 3em;
    }

    @include mq(xlg) {
      margin-bottom: 1.5em;
    }
  }

  // .technology__controls

  &__controls {
  }

  // .technology__tab

  &__tab {
  }
}
.controls {
  position: absolute;
  top: 27rem;
  left: 50%;

  z-index: 7;

  transform: translate(-50%, -50%);

  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 1.6rem;

  @include mq(med) {
    top: 47rem;
  }

  @include mq(xlg) {
    top: 49rem;
    flex-direction: column;
    // top: 51%;
    top: 21rem;
    left: 3.5%;
  }

  // .controls__btn

  &__btn {
    width: 4rem;
    height: 4rem;

    font-size: 1.6rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 1px solid hsla(0, 100%, 100%, 0.25);

    color: $white;

    &.active {
      background-color: $white;
      color: $primary;
      border: 1px solid transparent;
    }

    &:hover {
      border: 1px solid hsla(0, 100%, 100%, 1);
    }

    @include mq(xlg) {
      width: 8rem;
      height: 8rem;
    }
  }
}

.tab {
  text-align: center;

  @include mq(xlg) {
    text-align: left;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;

    gap: 6rem;

    // padding-left: 4%;
  }

  // .tab__content
  &__content {
    @include mq(xlg) {
      margin-left: min(15rem, 18%);
      // max-width: 47rem;
      max-width: 49rem;
    }
  }

  // .tab__img

  &__img {
    margin-bottom: 10rem;

    position: relative;
    // padding: 0 0 100% 0;
    // padding-bottom: 45.33%;
    padding-bottom: 17rem;
    margin-left: -4%;
    width: 109%;

    img {
      // width: 100%;
      // object-fit: cover;
      position: absolute;
      inset: 0;
      // width: 100%;
      width: 100%;
      height: 100%;
      max-height: 17rem;

      object-fit: cover;
      object-position: bottom center;
    }

    @include mq(med) {
      margin-bottom: 14.5rem;
      padding-bottom: 31rem;

      img {
        max-height: 31rem;
      }
    }

    @include mq(xlg) {
      position: absolute;
      width: 51.5rem;
      right: -4%;
      top: 0;
      // margin-bottom: 10rem;
      padding-bottom: 52.7rem;

      img {
        max-height: 52.7rem;
        // position: static;
      }
    }
  }

  // .tab__subtitle

  &__subtitle {
    font-size: 1.4rem;
    font-family: 'Barlow Condensed', serif;
    letter-spacing: 16.86%;

    color: $secondary;
    text-transform: uppercase;

    margin-bottom: 0.6em;

    @include mq(med) {
      font-size: 1.6rem;
    }
  }

  // .tab__title

  &__title {
    font-size: 2.4rem;
    margin-bottom: 0.67em;

    text-transform: uppercase;

    @include mq(med) {
      font-size: 4rem;
    }

    @include mq(xlg) {
      font-size: 5.6rem;
    }
  }

  // .tab__description

  &__description {
    margin: 0 auto;
    max-width: 65ch;

    font-size: 1.5rem;
    line-height: 167%;

    color: $secondary;

    @include mq(med) {
      font-size: 1.6rem;
    }

    @include mq(xlg) {
      font-size: 1.8rem;
      margin: 0;
    }
  }
}
</style>
