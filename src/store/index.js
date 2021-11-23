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
    crewMembers: [
      {
        position: 'commander',
        name: 'douglas hurley',
        description:
          'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        img: {
          webp: '/img/crew/image-douglas-hurley.webp',
          png: '/img/crew/image-douglas-hurley.webp',
          altText: 'image of crew member - Douglas Hurley',
        },
      },
      {
        position: 'mission specialist',
        name: 'mark shuttleworth',
        description:
          'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        img: {
          webp: '/img/crew/image-mark-shuttleworth.webp',
          png: '/img/crew/image-mark-shuttleworth.webp',
          altText: 'image of crew member - Mark Shuttleworth',
        },
      },
      {
        position: 'pilot',
        name: 'victor glover',
        description:
          'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        img: {
          webp: '/img/crew/image-victor-glover.webp',
          png: '/img/crew/image-victor-glover.webp',
          altText: 'image of crew member - Victor Glover',
        },
      },
      {
        position: 'flight engineer',
        name: 'anousheh ansari',
        description:
          'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        img: {
          webp: '/img/crew/image-anousheh-ansari.webp',
          png: '/img/crew/image-anousheh-ansari.webp',
          altText: 'image of crew member - Anoushen Ansari',
        },
      },
    ],
    technologies: [
      {
        name: 'launch vehicle',
        description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
        img: {
          landscape: '/img/technology/image-launch-vehicle-landscape.jpg',
          portrait: '/img/technology/image-launch-vehicle-portrait.jpg',
          altText: 'image of launch vehicle',
        },
      },
      {
        name: 'spaceport',
        description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
        img: {
          landscape: '/img/technology/image-spaceport-landscape.jpg',
          portrait: '/img/technology/image-spaceport-portrait.jpg',
          altText: 'image of spacefort',
        },
      },
      {
        name: 'space capsule',
        description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
        img: {
          landscape: '/img/technology/image-space-capsule-landscape.jpg',
          portrait: '/img/technology/image-space-capsule-portrait.jpg',
          altText: 'image of capsule',
        },
      },
    ],
  },

  getters: {
    getDestination(state) {
      return state.destination;
    },
    getCrewMembers(state) {
      return state.crewMembers;
    },
    getTechnologies(state) {
      return state.technologies;
    },
  },
});
