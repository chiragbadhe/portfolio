import Vue from "vue";
import Vuex from "vuex";
/*import { stat } from "fs";*/
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
        name: "Chirag",
        surname: "Badhe",
        birthDay: new Date(2003, 6, 3),
        startDescription: "Hello I’m Chirag",
        description:
            " I'm a blockchain enthusiast. I'm fascinated with the concept of 'programmable money' and love to experiment with DeFi, Internet of Things (Iot), Arduino also like making electronics gadgets.",
    },
    technologies: {
        programming:  [
            { name: "HTML & (S)CSS", level: 95 },
            { name: "Javascript (ES6)", level: 65 },
            { name: "Python", level: 60 , },
        ],
        frameworks: [
            { name: "Vue.js & Nuxt.js", level: 75 },
            { name: "Tailwind.css", level: 90 },
            { name: "Nuxt", level: 75 },
            { name: "Node.js & Express.js", level: 60 },
        ],
        tools:[
            { name: "git" },
            { name: "Vercel" },
            { name: "Netlify" },
        ]
    },
    projects: [{
        
        name: "Dmail",
        description: "Dmail is protocol for sending end-to-end encrypted emails over decentralized network to any ethereum address.",
        link: "https://dmail.so/",
        icon: ['fab', 'mail'],
        startDate: "2021",
        endDate: "Present",
        developer: "UnevenSoftware",
        tags: [
            { name: "#blockchain" },
            { name: "#ethereum" },
            { name: "#web" },
            { name: "#nuxt" }
        ]
    },
    ], events: [
        { 
            name: "Untitled Labs ",
            description: "I work in this company as a frontend developer, I mostly use Nuxt & TailwindCSS",
            role: "FrontEnd Developer ",
            type: "Work",
            startDate: "Dec, 2020",
            endDate: "Present",
            roles:[
                {description:" Developed and maintained front-end with Nuxt.js." }
            ]
        },
    ], socials: [
        {
            name: "LinkedIn",
            link: "https://in.linkedin.com/in/chirag-badhe-851530186",
            icon: "linkedin" 
        }, {
            name: "Github",
            link: "https://github.com/chiragbadhe",
            icon: "github" 
        }, {
            name: "Twitter",
            link: "https://twitter.com/badhechirag",
            icon: "twitter" 
        }, {
            name: "instagram",
            link: "https://www.instagram.com/gil.ndr/",
            icon: "instagram" 
        }, 
    ]
},

    getters: { age: state => {
            let ageDiff = Date.now() - state.profile.birthDay;
            let ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 2005);
        },
        profile: state => state.profile,
        projects: state => state.projects,
        technologies: state => state.technologies,
        events: state => state.events,
        socials: state => state.socials
    },
    mutations: {},
    actions: {}
});