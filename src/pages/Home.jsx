import { Link } from "react-router-dom";

import {
        organizations,
        competitions,
        events
    } from "../data/dummyData";

import CompetitionCard from "../components/CompetitionCard";
import EventCard from "../components/EventCard";


function Home() {

        const upcomingEvents = [...events]
            .filter((event) => {
                return new Date(event.date) >= new Date();
            })
            .sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            })
            .slice(0, 3);


    const latestCompetitions = [...competitions]
        .sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        })
        .slice(0, 3);


    return (
        <main>

            {/* Hero Section */}
            <section className="bg-primary text-white py-5">

                <div className="container py-5">

                    <div className="row align-items-center">

                        <div className="col-lg-8">

                            <h1 className="display-3 fw-bold">
                                Skills Macau
                            </h1>

                            <p className="lead mt-3">
                                Discover competitions, training events
                                and skill development opportunities in Macau.
                            </p>

                            <div className="mt-4">

                                <Link
                                    to="/competitions"
                                    className="btn btn-light btn-lg me-2"
                                >
                                    Explore Competitions
                                </Link>

                                <Link
                                    to="/events"
                                    className="btn btn-outline-light btn-lg"
                                >
                                    Explore Events
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Stats Section */}
            <section className="py-5">

                <div className="container">

                    <div className="row g-4 text-center">

                        <div className="col-md-4">

                            <div className="card h-100 shadow-sm">

                                <div className="card-body">

                                    <h2 className="display-5 fw-bold text-primary">
                                        {organizations.length}
                                    </h2>

                                    <p className="mb-0">
                                        Organizations
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="card h-100 shadow-sm">

                                <div className="card-body">

                                    <h2 className="display-5 fw-bold text-primary">
                                        {competitions.length}
                                    </h2>

                                    <p className="mb-0">
                                        Competitions
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="card h-100 shadow-sm">

                                <div className="card-body">

                                    <h2 className="display-5 fw-bold text-primary">
                                        {upcomingEvents.length}
                                    </h2>

                                    <p className="mb-0">
                                        Upcoming Events
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Latest Competitions */}
            <section className="py-5 bg-light">

                <div className="container">

                    <div className="mb-4">

                        <h2 className="fw-bold">
                            Latest Competitions
                        </h2>

                        <p className="text-muted">
                            Discover the latest competitions available in Macau.
                        </p>

                    </div>


                    <div className="row g-4">

                        {latestCompetitions.map((competition) => (

                            <div
                                className="col-12 col-md-6 col-lg-4"
                                key={competition.id}
                            >

                                <CompetitionCard
                                    competition={competition}
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            
            {/* Upcoming Events */}
            <section className="py-5">

                <div className="container">

                    <div className="mb-4">

                        <h2 className="fw-bold">
                            Upcoming Events
                        </h2>

                        <p className="text-muted">
                            Explore upcoming training, workshops and other events.
                        </p>

                    </div>


                    <div className="row g-4">

                        {upcomingEvents.map((event) => (

                            <div
                                className="col-12 col-md-6 col-lg-4"
                                key={event.id}
                            >

                                <EventCard
                                    event={event}
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Home;