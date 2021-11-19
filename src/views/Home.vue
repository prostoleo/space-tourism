<template>
  <section class="home-section">
    <BaseContainer>
      <div class="home-section__content">
        <h5 class="home-section__subtitle">so, you want to travel to space</h5>
        <h1 class="home-section__title">space</h1>
        <p class="home-section__p">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>

        <button class="btn home-section__btn">
          <span>explore</span>
        </button>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup></script>

<script>
import BaseContainer from '../components/base/BaseContainer.vue';
export default {
  name: 'Home',
  components: { BaseContainer },
};
</script>

<style lang="scss" scoped>
.home-section {
  background: url(/img/home/background-home-mobile.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;

  padding-bottom: 4.5em;

  min-height: 100vh;

  & > .container {
    min-height: 100vh;

    display: flex;
    // align-items: center;
    justify-content: center;

    padding-top: 11.2rem;
  }

  // .home-section__content

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
      text-align: center;
      color: $white;
    }
  }

  // .home-section__subtitle

  &__subtitle {
    font-size: 1.6rem;
    font-weight: 400;
    text-transform: uppercase;

    margin-bottom: 1em;
  }

  // .home-section__title

  &__title {
    font-size: 8rem;
    line-height: 125%;

    margin-bottom: 0.05em;
  }

  // .home-section__p

  &__p {
    font-size: 1.5rem;
    color: $secondary;
  }

  // .home-section__btn

  &__btn {
    // margin-top: 4em;
    margin: 4em auto 0;

    width: 15rem;
    height: 15rem;

    padding: 1.45em;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: $white;

    font-size: 2rem;
    text-transform: uppercase;

    position: relative;
    z-index: 1;

    span {
      color: $primary;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      width: 100%;
      height: 100%;

      border-radius: 50%;
      background: hsla(0, 0%, 59%);

      opacity: 0%;
      transform: scaleX(1.1) scaleY(1.1);

      transition: opacity 150ms ease-in-out, transform 300ms ease-in-out 150ms;
    }

    &:hover::before,
    &:focus::before {
      opacity: 10.36%;
      transform: scaleX(1.5) scaleY(1.5);

      transition: transform 300ms ease-in-out, opacity 150ms ease-in-out 150ms;
    }
  }
}
.btn {
}
</style>
