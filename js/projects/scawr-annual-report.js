let project = {
  name: "SCAWR Annual Report",
  short_name: "SCAWR Annual Report 📖",
  background_color: "#1E1D2B",
  text_class: "white",
  hero_image: "media/images/scawr-annual-report.jpg",
  intro:
    "As part of Studio Locale's charity initiative OPEN was a week long project, bringing the entire team, from marketing to design and development, to the table to help a local organization achieve their next level. This year we had the pleasure of working with the Somali Canadian Association of Waterloo (SCAWR). They were in need of an annual report to present to potential donators and to bring awareness to the amazing work they are doing for their community, so we built a digital annual report solution for them that they could reuse every year.",
  goals:
    "This annual report had to serve SCAWR in the long term, so it had to be easy for them to change the content year after year. The report was also meant to be shared with their own community, of which many are recent immigrants who needed translations in Somali. Another consideration was that in their community, information is more effectively communicated orally, so some audio component was vital. For our own goals, we wanted to bring the best aspects of the digital medium which includes interaction, animation and design. <br><br>To address all of these requirements, my lead and I decided on a tech stack of Nuxt and Directus. Directus is an open source headless CMS that we like working with and hosting on our own servers. It has a large variety of field types to cover any type of media and it can handle internationalization and translations out of the box. We chose Nuxt as our frontend because we both enjoy working in Vue and as a framework, Nuxt let's us prototype quite rapidly.",
  spotlight:
    "While I worked on both the front and backend, my best contributions were the UI and interaction aspects of the site. The primary form of interaction is scroll driven events. It occurs when the navbar updates to display the name of the section the user is currently on, as well as in the testimonial section that switches from a vertical scroll to a horizontal scroll. <br><br>I used the Intersection Observer API to identify when a user had entered a new section. The API invokes a callback that can be used to trigger events. I used a event bus system to communicate these scroll events between the different components, rather than trying emit them from child to parent or creating a store. The event bus suited our project because only simple data was being passed with the events and there was no need for any states to be mutated. The same event bus was used to switch between translations. <br><br>The vertical to horizontal scroll switch is my Vue implementation of <a href='https://medium.com/@lucas.eckman/ditch-the-carousel-creating-a-horizontal-scroll-effect-7a36c0f1c456'>Lucas Eckman's Horizontal Scroll Effect</a> in React. I have built a few smaller projects in Next and that React experience helped me to extract the logic of Lucas' implementation and translate it into a Vue context.",
  video: ["pQlHfzVDh1Q", "4URMsKR7F3M", "yygbrI_Vytw"],
  proud: [
    "Custom audio player",
    "Prototyping rapidly with my lead and the design team",
  ],
  type: "web",
  stack: ["Nuxt 3", "Directus CMS", "Laravel Forge", "Digital Ocean"],
};

export default project;
