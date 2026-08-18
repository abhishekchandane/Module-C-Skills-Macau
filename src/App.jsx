import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Competitions from "./pages/Competitions";
import CompetitionDetail from "./pages/CompetitionDetail";
import SkillDetail from "./pages/SkillDetail";

import Events from "./pages/Events";

import EventDetail from "./pages/EventDetail";

import Timeline from "./pages/Timeline";


function App() {

    return (
        <>
            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/competitions"
                    element={<Competitions />}
                />

                <Route
                    path="/competitions/:competitionId"
                    element={<CompetitionDetail />}
                />

                  <Route
                      path="/skills/:skillId"
                      element={<SkillDetail />}
                  />

                    <Route
                      path="/events"
                      element={<Events />}
                  />


                  <Route
                      path="/events/:eventId"
                      element={<EventDetail />}
                  />


                <Route
                    path="/timeline"
                    element={<Timeline />}
                />
            </Routes>

            <Footer />
        </>
    );
}

export default App;