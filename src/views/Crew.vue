<template>
  <section class="crew">
    <BaseContainer>
      <div class="crew__wrapper">
        <h1 class="crew__page-title">
          <span>02</span>
          meet your crew
        </h1>

        <div ref="tabContent" class="crew__tab tab">
          <div class="tab__img">
            <picture>
              <source
                :srcset="`${member.img.webp} 550w`"
                :alt="member?.img.altText"
                sizes="(max-width: 767px) 327px, (max-width: 1199px) 539px, 615px"
              />
              <img :src="member?.img.png" :alt="member?.img.altText" />
            </picture>
          </div>

          <div class="tab__content">
            <div class="tab__dots">
              <button
                v-for="(crewMember, i) in crewMembers"
                :key="i"
                class="tab__dot"
                :class="{ active: i === active }"
                type="button"
                :aria-label="`go to crew member - ${crewMember.name}`"
                tabindex="0"
                @click="setActive(i)"
              ></button>
            </div>
            <div class="tab__text">
              <h3 class="tab__position">
                {{ member.position }}
              </h3>
              <h2 class="tab__name">
                {{ member.name }}
              </h2>
              <p class="tab__description">
                {{ member.description }}
              </p>
            </div>
          </div>
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
console.log('store: ', store);

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

const crewMembers = computed(() => store.getters.getCrewMembers);
console.log('crewMembers: ', crewMembers);

const member = computed(() =>
  crewMembers.value.find((el, index) => index === active.value)
);
</script>

<script>
import BaseContainer from '../components/base/BaseContainer.vue';
export default {
  name: 'Crew',
  components: { BaseContainer },
};
</script>

<style lang="scss" scoped>
.crew {
  min-height: 100vh;

  padding-top: 8.8rem;
  padding-bottom: 3.5rem;

  background: url(/img/crew/background-crew-mobile.jpg);
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;

  @include mq(med) {
    padding-bottom: 0;

    background: url(/img/crew/background-crew-tablet.jpg);
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
  }

  @include mq(xlg) {
    background: url(/img/crew/background-crew-desktop.jpg);
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
  }

  // .crew__wrapper

  &__wrapper {
    @include mq(med) {
      margin-top: 6rem;
    }

    @include mq(xlg) {
      margin-top: 7.6rem;
      padding-left: 7%;
    }
  }

  // .crew__page-title

  &__page-title {
    @extend %tpl-page-title;

    @include mq(med) {
      text-align: left;
      margin-right: auto;
    }
  }

  // .crew__tab

  &__tab {
  }
}
.tab {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include mq(med) {
    margin-top: 6rem;
  }

  @include mq(xlg) {
    flex-direction: row;
    align-items: flex-start;
    gap: 8rem;
    margin-top: 8.5rem;
  }

  // .tab__img

  &__img {
    margin: 3.2rem 0;
    // order: 1;

    border-bottom: 1px solid #383b4b;

    @include mq(med) {
      order: 1;
      border-bottom: none;

      margin-bottom: 0;
    }

    @include mq(xlg) {
      // transform: scale(1.1, 1.1);
    }

    img {
      // width: 32.7rem;
      // height: 22.3rem;
      @include adaptive-value-min-max(max-height, 200, 280);
      object-fit: contain;

      @include mq(med) {
        //  @include adaptive-min-max-value(max-height, 572, 280);
        max-height: 57.2rem !important;
      }

      @include mq(xlg) {
        max-height: unset !important;
      }
    }
  }

  // .tab__content

  &__content {
    text-align: center;

    @include mq(med) {
      display: flex;
      flex-direction: column;
    }

    @include mq(xlg) {
      text-align: left;
    }
  }

  // .tab__dots

  &__dots {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 1.6rem;

    margin-bottom: 3.2rem;

    @include mq(med) {
      order: 3;
      margin: 4rem auto;
    }

    @include mq(xlg) {
      margin: 12rem auto 4rem 0;
    }
  }

  // .tab__dot

  &__dot {
    display: inline-block;
    padding: 1em;

    border-radius: 50%;

    background: $white;
    opacity: 17.44%;

    &.active {
      opacity: 1;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  // .tab__text

  &__text {
  }

  // .tab__position

  &__position {
    font-size: 1.6rem;
    font-family: 'Barlow', serif;

    color: $white;
    opacity: 49.51%;

    margin-bottom: 0.5em;

    @include mq(med) {
      font-size: 2.4rem;
    }

    @include mq(xlg) {
      font-size: 3.2rem;
    }
  }

  // .tab__name

  &__name {
    font-size: 2.4rem;
    font-family: 'Barlow', serif;

    color: $white;
    // opacity: 49.51%;

    margin-bottom: 0.65em;

    @include mq(med) {
      font-size: 4rem;
    }

    @include mq(xlg) {
      font-size: 5.6rem;
    }
  }

  // .tab__description

  &__description {
    font-family: 'Barlow', serif;
    font-size: 1.5rem;
    line-height: 167%;
    color: $secondary;

    max-width: 60ch;
    margin: 0 auto;

    @include mq(med) {
      font-size: 1.6rem;
    }

    @include mq(xlg) {
      font-size: 1.8rem;
      max-width: 40ch;
      margin: 0;
    }
  }
}
</style>
