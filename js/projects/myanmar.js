let project = {
    "name": "Myanmar Photo Album",
    "short_name": "Myanmar🛕",
    "background_color": "#E5651C",
    "text_class": "black",
    "hero_image": "media/images/myanmar.jpg",
    "intro": "This project is a photo album I created for a trip I took with my family to Myanmar in 2017. We traveled north, starting from Yangon to Kalaw and Maymyo. I brought a disposable camera with me and took photos of my family and the beautiful scenery. The project opens up with a brief introduction and then an interactive map of Myanmar that moves it’s marker to each city upon selection. You’re also able to view the photos I took in each city. I’ve flourished the album with animations driven by jQuery and AnimeJS to enhance the storytelling and appeal.",
    "goals": "When the concept for this project was brewing in my mind, I was very inspired by the beautiful creative websites I saw on Awwwards.com. I wanted to create an experience for the user. This would be my first attempt at combining my love for storytelling with my love for tech.  I designed the website using photoshop. I wanted the UI to be simple and have a flow to it, so that the user is guided through the website. I knew that I wanted to experiment with text and layout animations, so I used AnimeJS for the text and jQuery for all the other animations since I was more familiar with it.",
    "spotlight": "A highlight of this project for me was figuring out how to chain together the animations on the interactive map with the text animations. The sequence of events happens as follows: When the user clicks the next or previous buttons => the marker on the map fades out from view => the title text animates out => the marker moves to the current city => the title text animates in. I was able to choreograph this sequence using jQueries callback functions. It allowed the events to occur linearly, so that the next event only occurs once the previous one ended.",
    "proud": ["Some other features that I’m proud of", "Responsive layout", "Interactive image background that follows the cursor’s position within a div"],
    "learned": "There are 2 things that stood out to me about making this project. The first was learning how to structure my sass files with partials. Prior to this project, I was placing all of my styles in one long stylesheet. I had come across the 7-1 Sass folder structure and used a smaller modified version for my project. This helped me organize my styles into components/pages and made it much easier to find where I wanted to make changes and update accordingly. The second I learned was how difficult it is to manage a project with many images. Looking back on the project, I didn’t properly format my images or reduce their sizes enough to make the website speed efficient. I’ve created a project todo to address these issues soon.",
    "link": "https://annetawamono.github.io/myanmar/",
    "github": "https://github.com/annetawamono/myanmar",
    "type": "web",
    "stack": [
        "HTML",
        "Javascript",
        "Sass",
        "jQuery"
    ]
};

export default project;