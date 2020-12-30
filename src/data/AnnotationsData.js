// challenges
import challenge01 from "../assets/img/challenge01.jpg";
// videoclips
import videoclip01 from "../assets/video/videoclip01.webm";
import poster01 from "../assets/img/poster01.jpg";
import videoclip02 from "../assets/video/videoclip02.webm";
import poster02 from "../assets/img/poster02.jpg";
import videoclip03 from "../assets/video/videoclip03.webm";
import poster03 from "../assets/img/poster03.jpg";

const AnnotationsData = {
  title: "Practica, practica, practica",
  subTitle: "A medida que aprendo, hago anotaciones y comparto...",
  sectionVisualGuides: {
    title: "Guías visuales",
    visualGuides: [],
  },
  sectionVidioClips: {
    title: "Video Clips",
    videoClips: [
      {
        name: "Efecto parallax - Básico",
        video: videoclip01,
        poster: poster01,
        linkPen: "https://codepen.io/miltoncodeyt/full/wmZaXQ",
      },
      {
        name: "Menú - Animado Vertical - Mobile",
        video: videoclip02,
        poster: poster02,
        linkPen: "https://codepen.io/miltoncodeyt/full/qoYQpx",
      },
      {
        name: "Card Layout - Flexbox",
        video: videoclip03,
        poster: poster03,
        linkPen: "https://codepen.io/miltoncodeyt/full/EEvNLM",
      },
    ],
  },
  sectionChallenges: {
    title: "Retos",
    challenges: [
      {
        name: "FAQ accordion card",
        image: challenge01,
        linkPreview: "https://fm-faq-accordion-card.vercel.app/",
        linkCode:
          "https://gitlab.com/miltoncodeyt/fm-challenge-faq-accordion-card-main",
        linkFM:
          "https://www.frontendmentor.io/solutions/react-pure-css-_CTnfkZ0z",
      },
    ],
  },
  sectionTopCodepens: {
    title: "Top codepens",
    topCodepens: [
      {
        title: "Activate modal",
        srcPen:
          "https://codepen.io/miltoncodeyt/embed/preview/yLOOjPP?height=265&theme-id=dark&default-tab=result",
      },
      {
        title: "Animate banner - Flexbox",
        srcPen:
          "https://codepen.io/miltoncodeyt/embed/preview/eYZNRxP?height=265&theme-id=dark&default-tab=result",
      },
      {
        title: "Pure CSS - Slider animation",
        srcPen:
          "https://codepen.io/miltoncodeyt/embed/preview/mGbjJW?height=265&theme-id=dark&default-tab=result",
      },
      {
        title: "Dado - Grid Layout",
        srcPen:
          "https://codepen.io/miltoncodeyt/embed/preview/QYpbeX?height=265&theme-id=dark&default-tab=result",
      },

      {
        title: "Off canvas navigation - Grid Layout",
        srcPen:
          "https://codepen.io/miltoncodeyt/embed/preview/QYvxvQ?height=265&theme-id=dark&default-tab=result",
      },
      {
        title: "Personalize scrollbar",
        srcPen:
          "https://codepen.io/miltoncodeyt/embed/preview/MWeejGx?height=265&theme-id=dark&default-tab=result",
      },
    ],
  },
};

export default AnnotationsData;
