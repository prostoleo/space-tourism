<template>
  <header class="header">
    <BaseContainer>
      <div class="header__content">
        <router-link to="/" class="header__logo">
          <img
            srcset="/icons/header-logo.svg 58w"
            sizes="(max-width: 767px) 40px, 48px"
            src="/icons/header-logo.svg"
            alt="logo"
            class="header__logo-img"
            width="40"
            height="40"
          />
        </router-link>

        <div class="hr" />

        <nav
          class="header__nav nav backdrop-blur"
          :class="{ active: isMenuOpened }"
        >
          <ul class="nav__list">
            <li class="nav__item">
              <router-link
                class="nav__link"
                to="/"
                tabindex="0"
                @click="closeMenu"
              >
                <span>00</span>
                home
              </router-link>
            </li>
            <li class="nav__item">
              <router-link
                class="nav__link"
                to="/destination"
                tabindex="0"
                @click="closeMenu"
              >
                <span>01</span>
                destination
              </router-link>
            </li>
            <li class="nav__item">
              <router-link
                class="nav__link"
                to="/crew"
                tabindex="0"
                @click="closeMenu"
              >
                <span>02</span>
                crew
              </router-link>
            </li>
            <li class="nav__item">
              <router-link
                class="nav__link"
                to="/technology"
                tabindex="0"
                @click="closeMenu"
              >
                <span>03</span>
                technology
              </router-link>
            </li>
          </ul>
        </nav>

        <button
          class="header__menu hamburger hamburger--collapse"
          :class="{ 'is-active': isMenuOpened }"
          type="button"
          aria-label="open / close menu"
          @click="toggleMenu"
        >
          <!-- <img src="/icons/menu-burger.svg" alt="" /> -->
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </BaseContainer>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpened = ref(false);

const toggleMenu = () => (isMenuOpened.value = !isMenuOpened.value);
const closeMenu = () => (isMenuOpened.value = false);
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  padding: 2.4rem 0;

  z-index: 10;

  @include mq(med) {
    padding: 0;
  }

  // .header__content

  &__content {
    display: flex;
    align-items: center;

    justify-content: space-between;
  }

  // .header__logo

  &__logo {
    // .header__logo-img
    &-img {
      width: 40px;
      height: 40px;

      @include mq(med) {
        width: 48px;
        height: 48px;
      }
    }
  }

  .hr {
    display: none;

    @include mq(xlg) {
      display: block;
      background-color: hsla(0, 0%, 59%, 0.25);

      width: 50%;
      height: 1px;
      transform: translateX(12%);
      position: relative;
      z-index: 1;
    }
  }

  // .header__nav

  &__nav {
  }

  // .header__menu

  &__menu {
    position: relative;
    z-index: 100;
    // background: $white;

    span.hamburger-box::before,
    span.hamburger-box::after {
      background-color: $white;
      color: $white;
    }
    span.hamburger-inner::before,
    span.hamburger-inner::after,
    span.hamburger-inner {
      // background-color: $white;
      background-color: $white;
      color: $white;
      opacity: 0.9;
    }

    @include mq(med) {
      display: none;
    }
  }
}

// slightly transparent fallback
.backdrop-blur {
  // background-color: rgba(255, 255, 255, 0.9) !important;
  background-color: $primary-opacity90 !important;

  @include mq(med) {
    background-color: hsla(0, 100%, 100%, 0.25) !important;
    mix-blend-mode: overlay;
  }
}

// if backdrop support: very transparent and blurred
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .backdrop-blur {
    // background-color: rgba(255, 255, 255, 0.5) !important;
    // background-color: rgba(255, 255, 255, 0.5) !important;
    background-color: $primary-opacity50 !important;
    -webkit-backdrop-filter: blur(2em) !important;
    backdrop-filter: blur(2em) !important;

    @include mq(med) {
      background-color: $white-slight;
      // -webkit-backdrop-filter: unset !important;
      // backdrop-filter: unset !important;
    }
  }
}

.nav {
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;

  height: 100%;
  max-width: 25rem;
  width: 100%;

  // background: rgb(28, 29, 98);
  // background: $primary;
  // opacity: 0.9;
  // mix-blend-mode: overlay;

  transform: translateX(110%);
  transition: all 150ms ease-in-out;

  // backdrop-filter: blur(5rem);
  // backdrop-filter: blur(1rem);
  // -webkit-backdrop-filter: blur(1rem);

  @include mq(med) {
    position: static;
    right: unset;
    bottom: unset;
    top: unset;

    width: unset;
    height: unset;

    padding: 0 4.8rem;
    // background: rgba($color: #ffffff, $alpha: 0.04);
    background: hsla(0, 0%, 100%, 0.04) !important;

    max-width: unset;
    transform: translateX(0%);
  }

  @include mq(xlg) {
    padding: 0 12.3rem;
  }

  &.active {
    transform: translateX(0%);
  }

  // .nav__list

  &__list {
    padding: 11.8rem 0 3.2rem 3.2rem;

    display: flex;
    flex-direction: column;

    gap: 3.2rem;

    @include mq(med) {
      padding: unset;
      flex-direction: row;
      gap: 1.5rem;
    }

    @include mq(xlg) {
      padding: unset;
      flex-direction: row;
      gap: 5rem;
    }
  }

  // .nav__item

  &__item {
  }

  // .nav__link

  &__link {
    width: 100%;
    display: block;

    font-size: 1.6rem;
    color: $white;

    padding: 0.25em 0.5em;

    text-transform: uppercase;

    display: inline-flex;
    align-items: center;
    gap: 1.1rem;
    outline: none !important;

    @include mq(med) {
      padding: 4rem 0;
      gap: 2rem;

      span {
        display: none;
      }
    }

    @include mq(xlg) {
      span {
        display: inline;
      }
    }

    span {
      font-weight: 600;
    }

    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;

      height: 100%;
      width: 3px;

      background: $white;

      transform: scaleY(0);
      transform-origin: center center;
      transition: transform 150ms ease-in-out;

      @include mq(med) {
        bottom: 0;
        left: 0;
        right: 0;
        top: 100%;

        width: 100%;
        height: 3px;

        transform: scaleX(0);
      }
    }

    &::after {
      opacity: 0;
      transform: scale(1);
      transition: opacity 150ms ease-in-out;
    }

    &:hover::after,
    &:focus::after {
      opacity: 0.6;
    }

    &.router-link-exact-active::before {
      transform: scaleY(1);

      @include mq(med) {
        transform: scaleX(1);
      }
    }
  }
}
</style>
