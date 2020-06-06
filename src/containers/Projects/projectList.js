export default [
    {
        name: "Chime",
        brief: "A full-stack messenger web application.",
        thumbnail: "chime-web.jpg",
        descriptions: [
            "A messenging application developed in React. I also built a back-end server for this.",
            "The application includes messaging functionality, and the ability to view other people's profiles and edit their own."
        ],
        tools: ["TypeScript","React, Redux", "NodeJS", "Express", "PostGreSQL"],
        links: [
            {
                url: "https://chimeapp.netlify.app",
                name: "Website"
            },
            {
                url: "https://github.com/lincolnChoy/Chime-Front-End",
                name: "GitHub - React"
            },
            {
                url: "https://github.com/lincolnChoy/Chime_API_V2",
                name: "GitHub - Node back-end"
            }
        ],
        screenshots: []
    },
    {
        name: "Chime - Mobile app",
        brief: "A full-stack messenger mobile application.",
        thumbnail: "chime-mobile.jpg",
        descriptions: [
            "A messenging application developed in React Native. It uses the same back-end server used in my Chime web application.",
            "The application includes messaging functionality, and the ability to view other people's profiles and edit their own."
        ],
        tools: ["JavaScript", "React Native, Redux", "NodeJS", "Express", "PostGreSQL"],
        links: [
            {
                url: "https://github.com/lincolnChoy/Chime",
                name: "GitHub - React Native"
            },
            {
                url: "https://github.com/lincolnChoy/Chime_API_V2",
                name: "GitHub - Node back-end"
            }
        ],
        screenshots: []
    },
    {
        name: "Pacamana Jones",
        brief: "A parody of the timeless arcade game, Pacman.",
        thumbnail: "pacman.jpg",
        descriptions: [
            "A parody of a timeless classic, Pacman. Developed in Java using the JavaFX library with fellow programmer Henry Shen.",
            "This version features an Indiana-Jones themed storyline in which the player must collect artifacts and avoid the ghosts in the maze."
        ],
        tools : ["Java", "JavaFX", "Audacity", "Photoshop"],
        links: [{
            url: "https://github.com/lincolnChoy/Pacamana-Jones",
            name: "GitHub"
        }],
        screenshots: ["https://i.imgur.com/g2sZMSI.png"]
    },
    {
        name: "SwimmyFishy",
        brief: "A spin-off on the classic FlappyBird game developed on Android.",
        thumbnail: "swimmyfishy.jpg",
        descriptions: [
            "A spin-off on the classic FlappyBird game developed on Android using Java. Developed with fellow programmer Henry Shen.",
            "All visual assets were self made."
        ],
        tools: [ "Android Studio", "Java", "Photoshop" ],
        links: [{
            url: "https://github.com/lincolnChoy/SwimmyFishy",
            name: "GitHub"
        }],
        screenshots: ["https://i.imgur.com/ecGV17i.png"]
    },
    {
        name: "Pong",
        brief: "A VHDL implementation of a classic arcade game, Pong.",
        thumbnail: "pong.jpg",
        descriptions: [
            "A VHDL implementation of a classic arcade game, Pong. Developed with fellow programmer Henry Shen.", 
            "It was developed on the Cyclone V FPGA board which has a VGA interface to display the graphics.",
            `As there is no operating system on this board, there are no screenshots available for this game. The preview
            image shown for this project is a very close depiction of our game.
            `
        ],
        tools: [ "VHDL", "Quartus", "Cyclone V FPGA board" ],
        links: [{
            url: "https://github.com/lincolnChoy/Pong-game",
            name: "GitHub"
        }],
        screenshots: []
    },
    {
        name: "lincoln.choy",
        brief: "This portfolio website is also something I made myself.",
        thumbnail: "portfolio.jpg",
        descriptions: [
            "Developed in React. No npm packages were used for any of the animations, it was all done in purely css."
        ],
        tools: ["React"],
        links: [{
            url: "https://github.com/lincolnChoy/Portfolio",
            name: "GitHub"
        }],
        screenshots: []
    }
]