// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Coming soon!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Coming soon!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Below is a brief summary of my professional activities. For details, dowload my latest CV using the link to the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-are-electricity-markets-fit-for-purpose-part-v-towards-future-ready-markets",
        
          title: 'Are electricity markets fit for purpose? Part V: Towards future-ready markets <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/clean-energy-for-billions/are-electricity-markets-fit-for-purpose-part-v-towards-future-ready-markets-2e2bb42a46d0?source=rss-a256e97b7666------2", "_blank");
          
        },
      },{id: "post-are-electricity-markets-fit-for-purpose-part-iv-is-the-commodity-wrong",
        
          title: 'Are electricity markets fit for purpose? Part IV: Is the commodity wrong? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/clean-energy-for-billions/are-electricity-markets-fit-for-purpose-part-4-is-the-commodity-wrong-7520ea53fee8?source=rss-a256e97b7666------2", "_blank");
          
        },
      },{id: "post-are-electricity-markets-fit-for-purpose-part-iii-an-elephant-called-risk",
        
          title: 'Are electricity markets fit for purpose? Part III: An elephant called Risk <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/clean-energy-for-billions/are-electricity-markets-fit-for-purpose-part-3-an-elephant-called-risk-2b7b37b4df7e?source=rss-a256e97b7666------2", "_blank");
          
        },
      },{id: "post-price-cannibalisation-effect",
        
          title: 'Price cannibalisation effect <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/clean-energy-for-billions/price-cannibalisation-effect-a09f4ed371e6?source=rss-a256e97b7666------2", "_blank");
          
        },
      },{id: "post-are-electricity-markets-fit-for-purpose-part-ii-the-incompleteness-of-lcoe",
        
          title: 'Are electricity markets fit for purpose? Part II: The Incompleteness of LCoE <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/clean-energy-for-billions/are-electricity-markets-fit-for-purpose-part-2-the-incompleteness-of-lcoe-658c44470cce?source=rss-a256e97b7666------2", "_blank");
          
        },
      },{id: "post-are-electricity-markets-fit-for-purpose-part-i-designed-for-the-past",
        
          title: 'Are electricity markets fit for purpose? Part I: Designed for the past <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/clean-energy-for-billions/are-electricity-markets-fit-for-purpose-part-1-designed-for-the-past-495df82eb04a?source=rss-a256e97b7666------2", "_blank");
          
        },
      },{id: "post-climate-change-and-ai-hooked-society-a-compatibility-check",
        
          title: 'Climate Change and AI-hooked Society: A Compatibility Check <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/clean-energy-for-billions/climate-change-and-an-ai-hooked-society-a-compatibility-check-d9a6a8d97cf6?source=rss-a256e97b7666------2", "_blank");
          
        },
      },{id: "post-ascent",
        
          title: 'Ascent <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@anubhavrath/ascent-c23b36ba0036?source=rss-a256e97b7666------2", "_blank");
          
        },
      },{id: "post-sun-blissed",
        
          title: 'Sun-blissed <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@anubhavrath/sun-kissed-b2c69d2d2d32?source=rss-a256e97b7666------2", "_blank");
          
        },
      },{id: "post-hopes-amp-dreams",
        
          title: 'Hopes &amp; Dreams <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@anubhavrath/hopes-dreams-fb2fd7de006b?source=rss-a256e97b7666------2", "_blank");
          
        },
      },{id: "books-determined",
          title: 'Determined',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/determined/";
            },},{id: "books-fooled-by-randomness",
          title: 'Fooled by Randomness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/fooled_by_randomness/";
            },},{id: "books-the-tyranny-of-merit",
          title: 'The Tyranny of Merit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_tyranny_of_merit/";
            },},{id: "news-website-launched-sparkles-smile",
          title: 'Website launched! :sparkles: :smile:',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%75%62%68%61%76.%72%61%74%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/anubhavratha", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@anubhavrath", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6mOvVGYAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/anubhavratha", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
