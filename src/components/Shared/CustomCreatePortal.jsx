import ReactDOM from "react-dom";

// Create Portal RENDER A COMPONENT IN THE PROVIDED BY US CONTAINER IN HTML
// PLEASE PROVIDE AS PROPS A COMPONENT TO RENDER & CONTAINER'S ID WHERE RENDER THIS COMPONENT
// example <CustomCreatePortal component={<Some/>} id="overlay-root"/>

const CustomCreatePortal = ({ component, id }) => {
  return ReactDOM.createPortal(component, document.getElementById(id));
};
export default CustomCreatePortal;
