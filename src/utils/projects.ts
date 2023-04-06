import arpeggio from '../assets/projects/arpeggio.webp';
import nextShop from '../assets/projects/next-shop.webp';
import pokedex from '../assets/projects/pokedex.webp';
import portfolio from '../assets/projects/portfolio.webp';
import weatherProject from '../assets/projects/weather-project.webp';

const projects = [
    {
        title: 'This portfolio!',
        description: 'This portfolio was made using React and Typescript',
        src: portfolio,
        alt: 'my portfolio',
        link: 'https://github.com/B-e-sa/portfolio'
    },
    {
        title: 'Arpeggio',
        description: 'Arpeggio is an "museum" like site, with several famous artists and their artworks',
        src: arpeggio,
        alt: 'arpeggio',
        link: 'https://github.com/B-e-sa/react-art-museum'
    },
    {
        title: 'Next Sushi Shop',
        description: 'An restaurant web commerce made with Next.JS',
        src: nextShop,
        alt: 'next shop',
        link: 'https://github.com/B-e-sa/next-sushi-shop'
    },
    {
        title: 'Pokedex',
        description: 'An interactive pokedex interface build with RESTful Pokémon API and vanilla JS',
        src: pokedex,
        alt: 'pokedex project',
        link: 'https://github.com/B-e-sa/API-Pokedex'
    },
    {
        title: 'Weather Project',
        description: 'An weather forecast app made with React and the OpenWeather API',
        src: weatherProject,
        alt: 'weather project',
        link: 'https://github.com/B-e-sa/react-weather'
    },
];

export default projects;
