import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import {FaBootstrap} from "react-icons/fa";


export const icons = {
    html: {name: 'HTML', image:<SiHtml5 className="text-5xl" color="#FF5733"/>},
    css: {name: 'CSS', image:<SiCss3 className="text-5xl" color="#264de4"/>},
    javascript: {name: 'JS', image:<SiJavascript className="text-5xl" color="#FFFF00" />},
    react: {name: 'React', image:<SiReact className="text-5xl" color="#61DBFB"/> },
    tailwind: {name: 'Tailwind', image: <SiTailwindcss className="text-5xl" color="#38bdf8"/>},
    bootstrap: {name: 'Bootstrap', image: <FaBootstrap className="text-5xl" color="#6f42c1"/>}
}

const Projects = [
    {
        name: 'Japanese Memory Game',
        lenguage: 'JavaScript',
        framework: 'React',
        icons: [
            icons.html,
            icons.css,
            icons.javascript,
            icons.react
        ],
        wip: true,
        description: 'Collection of hiragana and katakana memory games',
        imgs: ['/images/memory-game/memory-game.PNG',
        '/images/memory-game/memory-game1.PNG',
        '/images/memory-game/memory-game2.PNG',
        '/images/memory-game/memory-game3.PNG',
        '/images/memory-game/memory-game4.PNG'],
        url: 'https://hiragana-katakana-games.netlify.app/',
        github: 'https://github.com/AwesomeRaicho/hiragana-katakana-games',
        featured: true,
        id: 1
    },
    {
        name: 'Pokemon API App',
        lenguage: 'JavaScript',
        framework: 'React',
        icons: [
            icons.html,
            icons.css,
            icons.javascript,
            icons.react
        ],
        wip: true,
        description: 'The PokeAPI-powered app displays information about different Pokemon characters, their abilities, and their stats. Users can search and filter by various criteria and view detailed information about each Pokemon.',
        imgs: [
            '/images/pokemon/main-pokemon.PNG',
            '/images/pokemon/pokemon1.PNG',
            '/images/pokemon/pokemon2.PNG',
            '/images/pokemon/pokemon3.PNG',
            '/images/pokemon/pokemon4.PNG',
        ],
        url: 'https://awesomeraicho-pokemon-app.netlify.app/',
        github: 'https://github.com/AwesomeRaicho/pokemonAPI',
        featured: true,
        id: 2
    },
]



export default Projects;