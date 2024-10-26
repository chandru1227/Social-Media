import Sidebar from "./component/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandHome } from "./component/landingpage/LandHome";
import Dashboardnav from "./component/pages/Dashboardnav";
import Overview from './component/pages/Overview'
import { Outlet } from "react-router-dom";
import SignInSignUp from "./component/signin";
// import Leetcode from "./component/pages/Leetcode";
// import YouTubeDashboard from "./component/pages/Youtube";
import YouTubeForm from "./component/pages/Youtube";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandHome />} />
          <Route path="/signin" element={<SignInSignUp />} />

          <Route exact path="/das" element={<Sidebar />}>
            <Route index element={<Overview />} />
            {/* <Route path="friends" element={<Friends />} /> */}
            <Route path="youtube" element={<YouTubeForm />} />
            
          </Route>
          {/* <Route path="/leetcode" element={<Leetcode />} /> */}

          <Route path="/sddd" element={<LandHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
