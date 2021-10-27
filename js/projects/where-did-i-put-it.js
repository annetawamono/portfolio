let project = {
    "name": "Where did I put it App",
    "short_name": "Where did I put it🤷‍♀️",
    "background_color": "#1E1D2B",
    "text_class": "white",
    "hero_image": "media/images/where-did-i-put-it-hero.jpg",
    "intro": "This project is a mobile app that I made for my mom so that she can keep track of where she put her things. She had just started renting an apartment for work, so she was moving between 2 places every week. One day she said “I keep buying 2 of everything! It’s impossible for me to know what’s where”. That cry for help led me to build the Where did I put it app. This CRUD app lets users input information about an item or set of items and register it to a house. The app is designed to have a mobile only experience, and it can be used offline as data is stored locally. I designed the app using Penpot and built it using Vuetify for my frontend and IndexedDB for my data storage.",
    "goals": "Appeasing my mom with my tech skills was the main motivator for building this project. I had to create it as a mobile experience that was easy to use because that is what’s most accessible to my mom. At this point I hadn’t done a lot of native mobile development, and I did consider building it with React Native, but I gave myself a short time frame to build this. Progressive Web Apps was the solution I went with, as I could use my web development skill set to build out a mobile experience. I kept the scope of the project small, so no authentication and no cloud storage.",
    "spotlight": "The most challenging feature of the project was working with IndexedDB, as it was my first experience working with it. Instead of using the IndexedDB API, I used Jake Archibald’s version of the API that utilizes promises. My components would communicate with the API through vuex actions. Most database operations are simple to do with IndexedDB (like returning a list of objects), but it has no native function for returning, deleting or updating a single result from a data store. I was able to make these kinds of operations on single items by keeping the state of the list of items saved in vuex, performing operations on the single item there, and then updating the entire list to the object store.",
    "proud": ["Category filtering system", "The layout of the app", "Actually installing it as an app on my mom’s phone"],
    "learned": "This is the second project I’ve built with VueJS and I got to expand my knowledge on a lot of Vue principles, like props, emits, the Vue life cycle, slots and much more. I’ve also learned that vuex can return different sets of the same data if needed. For example, in the project, I had my components get an array of all the houses plus their house IDs (key), however my Home component needed vuex to return an array of only the house names. I was able to accommodate for both those instances by creating different getters.",
    "link": "https://goofy-agnesi-2f1761.netlify.app/",
    "github": "https://github.com/annetawamono/where-did-i-put-it-PWA",
    "type": "web",
    "stack": [
        "Vue2",
        "Vuetify",
        "PWA",
        "IndexedDB"
    ]
}

export default project;