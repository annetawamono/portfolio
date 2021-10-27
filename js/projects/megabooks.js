let project = {
    "name": "Megabooks",
    "short_name": "Megabooks📚",
    "background_color": "#02D13C",
    "text_class": "black",
    "hero_image": "media/images/megabooks-hero.jpg",
    "intro": "This project is a bookstore solution for managers to keep track of book purchases. Managers can register a new account, or login with an existing account to get access to the customer dashboard. I was the sole developer for the project, and tackled the backend and frontend of the project. It was my first real go at building an application using VueJS and GraphQL. Having come from a LAMP background, I was pleasantly surprised at how quickly I could get around Vue and GraphQL, and how much fun it was to learn.",
    "goals": "This project came to me as a test for a job application I did in early 2021. The project scope was to create a CRUD application with a user authentication system, using GraphQL to make my API requests and VueJS for my frontend. The time budget was 2 weeks. I was free to choose everything else about the project - what data source to resolve my GraphQL endpoints with, how I built my authentication, what frontend design frameworks to use etc.",
    "spotlight": "The most memorable part of this project was creating my GraphQL server. I came into this test knowing nothing about GraphQL, except for it being used in some Jamstack frameworks like Gatsby. A few quick youtube tutorials and some advice from a friend pointed me in the direction of Vue Apollo. It creates an easy way for me to use GraphQL in my Vue projects. Great! Now I had to figure out how I was going to make it work with a database. I chose MongoDB Atlas as my database cloud storage so that I wouldn’t need to run a separate MongoDB server to manage. I then created my type definitions for my schema, which I found was quite intuitive. Kind of like planning out a SQL database. I could even plan it out on paper. The real magic came when I got to use the GraphQL playground. It really made it clear how powerful this kind of querying is. You don’t have to make multiple calls to an API to receive the exact data you’re looking for, and the schema connects the data like a relational database.",
    "proud": ["Other features I’m proud of", "User authentication using json web tokens", "Form validation with vuetify using custom rules", "Vuex for state management across components"],
    "learned": "Speaking non-technically, I learned that it’s important to reach out to your peers early on when making a project to clear up any doubts you have and to get yourself on the right path. It was very intimidating to build something with tech I’ve never used before and that slowed me down for the first few days of the project. On the technical side, I found that using VueJS is a great reactive framework for this kind of quick turnaround project. The vue-cli made setting up the project that much quicker and efficient. It’s my experience with Vue in this project that lead me to use it for my PWA app.",
    "link": "http://megabooks-vue-js-solution.vercel.app/",
    "github": "https://github.com/annetawamono/megabooks-vue-js-solution",
    "type": "web",
    "stack": [
        "Vue2",
        "GraphQL",
        "MongoDB",
        "Vuetify"
    ]
}

export default project;