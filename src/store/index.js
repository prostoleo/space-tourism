import { createStore } from 'vuex';

export default createStore({
  state: {
    destination: [
      {
        title: 'moon',
        description:
          'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. ',
        img: {
          webp: '/img/destination/image-moon.webp',
          png: '/img/destination/image-moon.png',
          altText: 'Image of Moon',
        },
        avgDistance: '384400 km',
        travelTime: '3 days',
      },
      {
        title: 'mars',
        description:
          'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! ',
        img: {
          webp: '/img/destination/image-mars.webp',
          png: '/img/destination/image-mars.png',
          altText: 'Image of Mars',
        },
        avgDistance: '225 mil km',
        travelTime: '9 months',
      },
      {
        title: 'europa',
        description:
          'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        img: {
          webp: '/img/destination/image-europa.webp',
          png: '/img/destination/image-europa.png',
          altText: 'Image of Europa',
        },
        avgDistance: '628 mil. km',
        travelTime: '3 years',
      },
      {
        title: 'titan',
        description:
          'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        img: {
          webp: '/img/destination/image-titan.webp',
          png: '/img/destination/image-titan.png',
          altText: 'Image of Titan',
        },
        avgDistance: '1.6 bil. km',
        travelTime: '7 years',
      },
    ],
  },

  getters: {
    getDestination(state) {
      return state.destination;
    },
  },
});
