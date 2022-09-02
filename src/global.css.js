import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* CSS VARIABLES */
body {
  font-family: "Poppins", sans-serif;

  --header-height: 3.5rem;
  --little-menu-width: 5rem;
  --main-menu-width: 15rem;
  --menu-item-gap: 1.3rem;
  --menu-item-paddingY: 0.5rem;
  --menu-item-paddingLeft: 1.75rem;
  --menu-item-letter-spacing: 0.5px;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
}

/* SCROLL BAR */

body::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
body::-webkit-scrollbar-track {
  background: #181818;
}

/* Handle */
body::-webkit-scrollbar-thumb {
  display: ${props => (props.hideSCrollbar ? "none" : "block")};
  background: #555555;
  border-radius: 5px;
}

/* Handle on hover */
body::-webkit-scrollbar-thumb:hover {
  background: #555555;
} 
`;
