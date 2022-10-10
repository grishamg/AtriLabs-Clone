import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "navbar_container": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "",
        "justifyContent": "space-between",
        "alignSelf": "auto",
        "overflow": "hidden",
        "marginRight": "80px",
        "marginLeft": "80px",
        "fontFamily": "IBM Plex Sans",
        "width": "",
        "alignContent": "stretch",
        "alignItems": "center",
        "flexWrap": "nowrap",
        "float": "none",
        "clear": "none",
        "textAlign": "left",
        "flexDirection": "row",
        "flexGrow": null,
        "marginTop": "50px"
      },
      "callbacks": {}
    },
    "navbar_title": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "center",
        "alignContent": "center"
      },
      "callbacks": {}
    },
    "TextBox1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 700,
        "fontSize": "25px"
      },
      "custom": {
        "text": "WebFolio X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "navbar_links": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Link1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": " Portfolio",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Contact",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "values": [
          "Pages"
        ]
      },
      "callbacks": {}
    },
    "Image3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/shopping-bag.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex5": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "250px",
        "flexDirection": "column",
        "marginLeft": "80px",
        "marginRight": "",
        "marginTop": "50px",
        "justifyContent": "center",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "30px"
      },
      "custom": {
        "text": "I'm Sam, and I design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "borderWidth": "",
        "borderColor": "#732020",
        "borderRadius": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "30px",
        "textAlign": "left"
      },
      "custom": {
        "text": "user interfaces for startups"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "45%",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300,
        "fontSize": "20px",
        "textAlign": "left",
        "lineHeight": ""
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "90%",
        "height": "3px",
        "marginLeft": "60px",
        "marginRight": "0px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pngegg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex6": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "",
        "flexDirection": "column",
        "marginLeft": "80px",
        "marginRight": "80px"
      },
      "callbacks": {}
    },
    "Flex7": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "marginLeft": "80px",
        "marginRight": "80px"
      },
      "callbacks": {}
    },
    "TextBox8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": "normal",
        "fontSize": "40px",
        "textAlign": "center",
        "marginLeft": "",
        "marginRight": ""
      },
      "custom": {
        "text": "Past Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex8": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between",
        "marginLeft": "",
        "marginRight": "",
        "marginTop": "20px"
      },
      "callbacks": {}
    },
    "Image6": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "600px",
        "height": "600px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60e7971cc340a26c7a072b55_app-x-thumbnail-image-portfolio-x-webflow-template.jpg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex9": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "center",
        "flexDirection": "column",
        "alignContent": "space-between",
        "alignItems": "stretch",
        "rowGap": "25px",
        "width": "70%"
      },
      "callbacks": {}
    },
    "TextBox10": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "20px"
      },
      "custom": {
        "text": "Appx - Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "25px"
      },
      "custom": {
        "text": "Web Design for Finance Startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 300
      },
      "custom": {
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex10": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "10px"
      },
      "callbacks": {}
    },
    "Link5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "15px",
        "textAlign": "left"
      },
      "custom": {
        "text": "View Project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upper-right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex11": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "stretch",
        "justifyContent": "center",
        "height": "60px",
        "marginLeft": "60px",
        "marginRight": "60px",
        "marginBottom": "100px",
        "marginTop": "20px"
      },
      "callbacks": {}
    },
    "TextBox14": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": "normal",
        "fontSize": "20px",
        "marginTop": "10px"
      },
      "custom": {
        "text": "Browse Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "20px",
        "height": "20px",
        "alignSelf": "flex-start",
        "paddingLeft": "2px",
        "paddingRight": "2px",
        "paddingTop": "2px",
        "paddingBottom": "2px",
        "marginTop": "13px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upper-right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex12": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "",
        "marginLeft": "80px",
        "marginRight": "80px",
        "overflow": "hidden"
      },
      "callbacks": {}
    },
    "Flex13": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "45%",
        "justifyContent": "center",
        "rowGap": "20px",
        "alignItems": "flex-start"
      },
      "callbacks": {}
    },
    "Flex14": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%"
      },
      "callbacks": {}
    },
    "TextBox15": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600,
        "fontSize": "30px"
      },
      "custom": {
        "text": "Who’s behind all this great work?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor incididunt ut labor."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex15": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignContent": "flex-start",
        "alignItems": "center",
        "justifyContent": "flex-start",
        "marginTop": "10px"
      },
      "callbacks": {}
    },
    "TextBox17": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "About Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15px",
        "height": "15px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upper-right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60ea69b0fa1c928d8bf0fd95_about-me-portfolio-weblow-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "90%",
        "height": "3px",
        "marginLeft": "60px",
        "marginRight": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pngegg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex16": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between",
        "marginLeft": "80px",
        "marginRight": "80px",
        "marginTop": "40px"
      },
      "callbacks": {}
    },
    "Flex17": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox18": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "35px"
      },
      "custom": {
        "text": "My Work Skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex18": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox19": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "My Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15px",
        "height": "15px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upper-right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex19": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "600px"
      },
      "callbacks": {}
    },
    "Flex20": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "marginLeft": "80px",
        "marginRight": "80px",
        "marginTop": "20px"
      },
      "callbacks": {}
    },
    "Flex21": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "30%",
        "alignItems": "flex-start",
        "justifyContent": "space-around",
        "rowGap": "",
        "height": "300px"
      },
      "callbacks": {}
    },
    "Image15": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "135px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60ea77319a34cc79a055e157_ui-ux-design-skill-icon-portfolio-x-webflow-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "20px"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "3px",
        "width": "100%",
        "borderRadius": "0px",
        "borderWidth": "0px",
        "borderStyle": "solid"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pngegg%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex22": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between",
        "marginLeft": "80px",
        "marginRight": "80px",
        "marginTop": "40px"
      },
      "callbacks": {}
    },
    "TextBox22": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "25px"
      },
      "custom": {
        "text": "Articles & News"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex24": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox23": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "18px"
      },
      "custom": {
        "text": "Browse more articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15px",
        "height": "15px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upper-right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex25": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "marginLeft": "80px",
        "marginRight": "80px",
        "marginTop": "15px"
      },
      "callbacks": {}
    },
    "Flex29": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between",
        "marginLeft": "",
        "marginRight": ""
      },
      "callbacks": {}
    },
    "Image18": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60e6731781706b20f84605e1_design-sprints-thumbnail-blog-post-portfolio-x-webflow-template-p-800.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex30": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "justifyContent": "center",
        "rowGap": "15px"
      },
      "callbacks": {}
    },
    "TextBox27": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Design - 1 September 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "What did I learn from doing 50+ design sprints"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "3px",
        "width": "90%",
        "marginLeft": "60px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pngegg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex31": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "80px",
        "marginRight": "80px",
        "marginTop": "70px",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "Flex32": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "60%",
        "rowGap": "15px"
      },
      "callbacks": {}
    },
    "TextBox29": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "30px"
      },
      "custom": {
        "text": "Interested in working together?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "27px"
      },
      "custom": {
        "text": "Get in touch today."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit nulla arcu porttitor molestie sed mauris sollicitudin id ornare egestas"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "height": "100px",
        "marginRight": "30px",
        "alignSelf": "center"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-right.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "90%",
        "height": "3px",
        "marginLeft": "60px",
        "marginRight": "60px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pngegg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex33": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "80px",
        "marginTop": "40px",
        "marginRight": "80px",
        "columnGap": "15px"
      },
      "callbacks": {}
    },
    "Flex34": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": "32%",
        "height": "300px",
        "alignItems": "stretch",
        "justifyContent": "space-around"
      },
      "callbacks": {}
    },
    "TextBox32": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "25px"
      },
      "custom": {
        "text": "Webfolio X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet tragon consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px",
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "value": "Enter your email",
        "placeholder": "Placeholder Text"
      },
      "callbacks": {}
    },
    "Flex36": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox34": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "Subscribe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15px",
        "height": "15px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upper-right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex47": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignItems": "stretch",
        "justifyContent": "flex-start",
        "flexDirection": "column",
        "width": "35%",
        "height": "300px",
        "rowGap": "40px",
        "columnGap": "10px",
        "alignSelf": "auto"
      },
      "callbacks": {}
    },
    "Flex48": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "175px",
        "width": "100%",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "TextBox39": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "23px",
        "paddingTop": "15px"
      },
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex49": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "TextBox40": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Home V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Home V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "About V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "About V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex50": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "TextBox45": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Blog V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Blog V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Blog V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex51": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "TextBox49": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Case Study"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Past Clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Product"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex52": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30%",
        "flexDirection": "column",
        "alignItems": "stretch",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "TextBox57": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "23px",
        "paddingTop": "15px"
      },
      "custom": {
        "text": "Utility Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Start Here"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "404 Not Found"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Password Protected"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Licenses"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Changelog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "More Templates"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex53": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "15px",
        "marginLeft": "80px",
        "marginRight": "80px",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "TextBox65": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Copyright © Webfolio X | Designed by BRIX Templates - Powered by Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "3px",
        "width": "90%",
        "marginLeft": "60px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pngegg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instagram.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex54": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Image33": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "3px",
        "width": "90%",
        "marginLeft": "60px",
        "marginRight": "60px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pngegg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {}
}};

function getViewportDimension() {
  const width = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
