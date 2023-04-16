import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import {FaBootstrap} from "react-icons/fa";

export const icons = {
    html: {name: 'HTML', image:<SiHtml5 className="text-5xl" color="#FF5733"/>},
    css: {name: 'CSS', image:<SiCss3 className="text-5xl" color="#264de4"/>},
    javascript: {name: 'JS', image:<SiJavascript className="text-5xl" color="#FFFF00" />},
    react: {name: 'React', image:<SiReact className="text-5xl" color="#61DBFB"/> },
    tailwind: {name: 'Tailwind', image: <SiTailwindcss className="text-5xl" color="#38bdf8"/>},
    bootstrap: {name: 'Bootstrap', image: <FaBootstrap className="text-5xl" color="#6f42c1"/>},
    Csharp: {name: "C#", image: <img src="/images/c-sharp.png" className="max-h-16" alt="C#"/>},
    //dotnet: {name: "dotnet", image: <img src="/images/dotnet.png" alt="dotnet" />},

}

export const contacts = [
    {
        to: 'gmail', 
        image: <SiGmail className="text-2xl" color="black"/>,
        link: 'ricardo.dev0188@gmail.com'
    },
    {
        to: 'github', 
        image: <SiGithub className="text-2xl" color="black"/>, 
        link: 'https://github.com/AwesomeRaicho'
    },
    {
        to: 'linkedin', 
        image: <SiLinkedin className="text-2xl" color="black"/>, 
        link: 'https://www.linkedin.com/in/pedro-ricardo-araujo-fuentes-57ab82268/'
    }
]

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
    {
        name: 'Console Contact Manager',
        lenguage: 'C#',
        framework: '.NET',
        icons: [
            icons.Csharp,
        ],
        wip: false,
        description: 'When running this application on your terminal, you are able to add a contact and also view all added contacts. The Session class provides the main menus that will be used as the user interface, the "ContactBuilder" class is used to create contacts for adding and editing the contacts, a "DB" class is used to simulate a data base where we can store created contacts as well as retrieve them for viewing.',
        imgs: [
            '/images/contact-manager/contact-manager1.PNG',
            '/images/contact-manager/contact-manager2.PNG',
            '/images/contact-manager/contact-manager3.PNG',
            '/images/contact-manager/contact-manager4.PNG',
            '/images/contact-manager/contact-manager5.PNG',
        ],
        url: 'https://github.com/AwesomeRaicho/contact-management',
        github: 'https://github.com/AwesomeRaicho/contact-management',
        featured: true,
        id: 3
    },
]



export default Projects;