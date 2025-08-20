// Creating an array of Projects in JSON
// No imports needed; images served statically from /public/Assets
import ReadMeGen from "../images/ReadMeGen.gif";
import PasswordGen from "../images/PasswordGenImg.png";
import Sunshine from "../images/Sunshine.gif";
export const projects = [
  {
    key: 1,
    title: "ReadMe_Gen",
    subtitle: "JQuery, Javascript, & NodeJS",
    description:
      "A readme generator template that will make generating a professional looking readme in a simple & easy fashion by following prompts in node.js. Simply run the app in Node and fill in the information that your readme requires. This will save the readme in a file for the user to export.",
    image: ReadMeGen, // Absolute path from public root
    href: "https://github.com/BinaryBitBytes/ReadMe_Gen",
  },
  {
    key: 2,
    title: "Password-Generator",
    subtitle: "HTML, CSS, & Javascript",
    description:
      "This is a basic password generator that uses a custom algorith to assemble strings, characters, numbers, and symbols to create a secure and complex password. Enjoy creating a new secure password with ease just with a click of a button! Once its generated, just copy and paste your new password.",
    image: PasswordGen,
    href: "https://binarybitbytes.github.io/Password-Generator/",
  },
  {
    key: 3,
    title: "Sunshine- Activity Suggester",
    subtitle:
      "Open Weather API, TrueWay Places API, Local Storage, Foundation.JS, Javascript, & HTML",
    description:
      "The Sunshine Application allows a social enthusiasts to pick a desired destination city in order to find appropriate activities based on ambient conditions at that destination and user intent. It also takes local coordinates in order to provide weather conditions of user current location.",
    image: Sunshine,
    href: "https://binarybitbytes.github.io/Sunshine/",
  },
];

// // Creating an array of Projects in JSON
// import readMe from "../Assets/ReadMeGen.gif";
// import passGen from "../Assets/passwordGenImg.jpg";
// import sunshine from "../Assets/Sunshine.gif";
// export const projects = [
//   {
//     key: 1,
//     title: "ReadMe_Gen",
//     subtitle: "JQuery, Javascript, & NodeJS",
//     description:
//       "A readme generator template that will make generating a professional looking readme in a simple & easy fashion by following prompts in node.js. Simply run the app in Node and fill in the information that your readme requires. This will save the readme in a file for the user to export.",
//     image: readMe,
//     link: "https://github.com/BinaryBitBytes/ReadMe_Gen",
//   },
//   {
//     key: 2,
//     title: "Password-Generator",
//     subtitle: "HTML, CSS, & Javascript",
//     description:
//       "This is a basic password generator that uses a custom algorith to assemble strings, characters, numbers, and symbols to create a secure and complex password. Enjoy creating a new secure password with ease just with a click of a button! Once its generated, just copy and paste your new password.",
//     image: passGen,
//     link: "https://binarybitbytes.github.io/Password-Generator/",
//   },
//   {
//     key: 3,
//     title: "Sunshine- Activity Suggester",
//     subtitle:
//       "Open Weather API, TrueWay Places API, Local Storage, Foundation.JS, Javascript, & HTML",
//     description:
//       "The Sunshine Application allows a social enthusiasts to pick a desired destination city in order to find appropriate activities based on ambient conditions at that destination and user intent. It also takes local coordinates in order to provide weather conditions of user current location.",
//     image: sunshine,
//     link: "https://binarybitbytes.github.io/Sunshine/",
//   },
// ];
