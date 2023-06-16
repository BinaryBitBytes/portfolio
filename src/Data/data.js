// Creating an array of Projects in JSON
import readMe from './ProjectImages/ReadMeGen.gif'
import passGen from './ProjectImages/passwordGenImg.jpg'
import sunshine from './ProjectImages/Sunshine.gif'
export const projects = [
    {
        key: 1,
        title: 'ReadMe_Gen' ,
        subtitle: 'JQuery, Javascript, & NodeJS' ,
        description: 'A readme generator template that will make generating a professional looking readme simply and easily by following prompts in node.js.',
        image: readMe,
        link: 'https://github.com/BinaryBitBytes/ReadMe_Gen',
    },
    {
        key: 2,
        title: 'Password-Generator',
        subtitle: 'HTML, CSS, & Javascript' ,
        description: 'This is a basic password generator. Enjoy!',
        image: passGen,
        link: 'https://binarybitbytes.github.io/Password-Generator/',
    },
    {
        key:3,
        title: 'Sunshine- Activity Suggester',
        subtitle: 'Open Weather API, TrueWay Places API, Local Storage, Foundation.JS, Javascript, & HTML',
        description:'The Sunshine Application allows a social enthusiasts to pick a desired destination city in order to find appropriate activities based on ambient conditions at that destination and user intent. It also takes local coordinates in order to provide weather conditions of user current location.' ,
        image: sunshine,
        link: 'https://binarybitbytes.github.io/Sunshine/',
    },
]
