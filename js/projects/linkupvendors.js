let project = {
    "name": "Link Up Vendors plugin",
    "short_name": "Link Up Vendors✊🏾",
    "background_color": "#2C1CE5",
    "text_class": "white",
    "hero_image": "media/images/linkup-hero.jpg",
    "intro": "This Wordpress plugin was made for the LINK Picnic festival website. This festival runs yearly and puts on activities and cultural events celebrating African and Caribbean diaspora. I volunteered on their web team in 2020. The plugin allows the web team to enter information about vendors who will be participating in the festival. The vendors will appear on the Marketplace page, separated by category, and optionally with their own vendor’s page.",
    "goals": "When I started volunteering for LINK, the Marketplace page didn’t exist yet. The festival’s organizer wanted to move the festival online due to lockdown restrictions and a big part of the festival is having third party vendors selling their products and services on site. The Marketplace page had to accommodate many different kinds of vendors (e.g. restaurants, NGOs) and their information, but have a consistent look when presenting them on the page. I offered to develop a plugin that would allow them to input vendors on the admin page, assign them to a new/existing category, and output a styled list of vendors on the Marketplace page.",
    "spotlight": "A big challenge for me when building this project was to create error messages for the user if the information they input for a vendor was invalid. In the backend, vendors are custom post types with meta boxes to input vendor information. I could validate the meta boxes using Wordpress functions like is_email(), but I couldn’t display error messages on the edit post page. The solution I came up with was to use Wordpress transients and settings API. Transients are cached data stored on the database. I created error transients whenever an input didn’t validate. The settings API checks if any error transients exist and creates a settings error with the appropriate validation error message. Once the user enters valid input, the transient is deleted.",
    "proud": ["Plugin shortcode", "Custom posts and meta boxes to input vendor information and create vendor pages", "Admin settings page"],
    "current": "This plugin is currently being used by LINK Picnic festival’s website. Most recently it was used to prepare for their 2021 festival. I’ve received feedback on how much faster it was for them to upload new vendor information, as well as suggestions on features they’d like to see. Some features include dynamically creating vendor pages from meta input.",
    "learned": "I learned that developing on Wordpress needs extensive testing to ensure your plugin doesn’t break or that it won’t break other plugins. My local Wordpress installation was a different version to LINK’s production site. On top of that, they had over 50 plugins installed. I ran into a lot of unexpected errors when installing the plugin on the production site that were hard to diagnose unless I tested the code on production. I think in the future, I will spin up a new Wordpress site using instawp.io that matches my client’s production site, including plugins that they have installed that could potentially affect my development.",
    "link": "https://linkpicnicfestival.com/",
    "github": "https://github.com/annetawamono/linkup-vendor-plugin",
    "type": "web",
    "stack": [
        "PHP",
        "Wordpress",
        "CSS"
    ]
}

export default project;