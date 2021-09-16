import "./App.css";

import { BrowserRouter } from "react-router-dom";
import HeaderSearchSuggestion from "./header/HeaderSearchSuggestion";
import Footer from "./footer/footer";
/* import CompanyName from "./companyName/CompanyName"; */
import ProjectName from "./projectName/ProjectName";
/* import LaunchPage from "./launch/LaunchPage";
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderSearchSuggestion />
        {/*   <CompanyName /> */}
        {/* <LaunchPage /> */}
        <ProjectName />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
