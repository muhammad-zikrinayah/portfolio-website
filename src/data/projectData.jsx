import IMAGES from "./images";

const designProjects = [
  {
    id: "d1",
    label: "Gowayysia",
    description:
      "Modern travel website UI design focused on showcasing the beauty of Southeast Asia 🌏🌿Designed to help users easily discover hidden gems, book destinations, and feel connected with nature and culture in one seamless experience.",
    img: IMAGES.gowayysia,
    link: "https://dribbble.com/shots/26266807-Gowayssia-Southeast-Asia-Travel-Website-UI",
  },
  {
    id: "d2",
    label: "Social Media App for Plant Lovers",
    description: (
      <>
        Design for a social media platform dedicated to plant lovers around the
        world. Whether you're beginner or a seasoned botanist, this app allows
        users to:
        <br />
        - Discover a wide variety of plants in the Wikiplantsection
        <br />
        - Share their plant collection and setup via Feedy (social timeline)
        <br />
        - Read the latest plant-related news and articles
        <br />
        - Track their progress and achievements as plant enthusiasts
        <br />- Make friends with other phytophiles and interact via posts and
        notifications
      </>
    ),
    img: IMAGES.flory,
    link: "https://dribbble.com/shots/26158941-Social-Media-App-for-Plant-Lovers",
  },
  
];

const appProjects = [];

const Project = {
  design: designProjects,
  app: appProjects,
  all: [...designProjects, ...appProjects],
};

export default Project;
