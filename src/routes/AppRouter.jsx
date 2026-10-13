import RootLayout from "../components/layout/RootLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/Homepage";
import AboutPage from "../pages/about/AboutPage";
import WorkMain from "../pages/work/WorkMain";
import WorkDetail from "../pages/work/WorkDetail";
import Contact from "../pages/contact/Contact";


function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkMain />} />
        <Route path="/workDetails" element={<WorkDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    
  );
}

export default AppRouter;
