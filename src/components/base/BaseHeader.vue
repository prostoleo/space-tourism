<template>
  <header class="header">
    <BaseContainer>
      <div class="header__content">
        <router-link to="/" class="header__logo">
          <img
            src="/icons/header-logo.svg"
            alt="logo"
            class="header__logo-img"
          />
        </router-link>

        <hr class="hr" />

        <nav class="header__nav nav" :class="{ active: isMenuOpened }">
          <ul class="nav__list">
            <li class="nav__item">
              <router-link class="nav__link" to="/">
                <span>00</span>
                home
              </router-link>
            </li>
            <li class="nav__item">
              <router-link class="nav__link" to="/destination">
                <span>01</span>
                destination
              </router-link>
            </li>
            <li class="nav__item">
              <router-link class="nav__link" to="/crew">
                <span>02</span>
                crew
              </router-link>
            </li>
            <li class="nav__item">
              <router-link class="nav__link" to="/technology">
                <span>03</span>
                technology
              </router-link>
            </li>
          </ul>
        </nav>

        <button class="header__menu" @click="toggleMenu">
          <img src="/icons/menu-burger.svg" alt="" />
        </button>
      </div>
    </BaseContainer>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpened = ref(false);

const toggleMenu = () => (isMenuOpened.value = !isMenuOpened.value);
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
    }
  }

  .hr {
    display: none;
  }

  // .header__nav

  &__nav {
  }

  // .header__menu

  &__menu {
    position: relative;
    z-index: 100;
  }
}

// slightly transparent fallback
.backdrop-blur {
  background-color: rgba(255, 255, 255, 0.9);
}

// if backdrop support: very transparent and blurred
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .backdrop-blur {
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(2em);
    backdrop-filter: blur(2em);
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
  background: $primary;
  opacity: 0.9;
  mix-blend-mode: overlay;

  transform: translateX(110%);
  transition: all 150ms ease-in-out;

  // backdrop-filter: blur(5rem);
  backdrop-filter: blur(100px);

  &.active {
    transform: translateX(0%);
  }

  // .nav__list

  &__list {
    padding: 11.8rem 0 3.2rem 3.2rem;

    display: flex;
    flex-direction: column;

    gap: 3.2rem;
  }

  // .nav__item

  &__item {
  }

  // .nav__link

  &__link {
    color: $white;
    font-size: 1.6rem;

    text-transform: uppercase;

    display: inline-flex;
    align-items: center;
    gap: 1.1rem;

    span {
      font-weight: 600;
    }
  }
}
</style>
