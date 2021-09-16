// import React from "react";
// import { Provider } from "react-redux";
// import ZuriApp from "./App";
// import { store } from "./redux/index";
import LandingPage from "./components/LandingPage";

// const MainApp = () => {
//   return (
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>
//   );
// };

const Root = () => {
  // return <div>hi part 2</div>;
  return <LandingPage />;
};
export default Root;

// export default function Root(props) {
//   return <section>{props.name} is mounted! from root2</section>;
// }
