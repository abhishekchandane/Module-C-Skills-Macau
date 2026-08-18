import { Link, useNavigate, useParams } from "react-router-dom";

import {
    events,
    organizations,
    skills
} from "../data/dummyData";


function EventDetail() {

    const { eventId } = useParams();

    const navigate = useNavigate();


    const event = events.find(
        (item) => item.id === Number(eventId)
    );


    if (!event) {
        return (
            <main className="container py-5">

                <div className="alert alert-warning">
                    Event not found.
                </div>

                <Link
                    to="/events"
                    className="btn btn-primary"
                >
                    Back to Events
                </Link>

            </main>
        );
    }


    const organization = organizations.find(
        (item) => item.id === event.organizationId
    );


    const skill = skills.find(
        (item) => item.id === event.skillId
    );


    return (
        <main>

            {/* Breadcrumb */}
            <section className="bg-light py-3">

                <div className="container">

                    <nav aria-label="breadcrumb">

                        <ol className="breadcrumb mb-0">

                            <li className="breadcrumb-item">
                                <Link to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="breadcrumb-item">
                                <Link to="/events">
                                    Events
                                </Link>
                            </li>

                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                {event.name}
                            </li>

                        </ol>

                    </nav>

                </div>

            </section>


            {/* Event Details */}
            <section className="py-5">

                <div className="container">

                    <span className="badge bg-primary mb-3">
                        {event.type}
                    </span>


                    <h1 className="fw-bold mb-4">
                        {event.name}
                    </h1>


                    <div className="mb-4">

                        <p>
                            <strong>Organization:</strong>{" "}
                            {organization?.name}
                        </p>


                        <p>
                            <strong>Skill:</strong>{" "}

                            {skill ? (

                                <Link
                                    to={`/skills/${skill.id}`}
                                >
                                    {skill.name}
                                </Link>

                            ) : (
                                "N/A"
                            )}

                        </p>


                        <p>
                            <strong>Date:</strong>{" "}
                            {event.date}
                        </p>


                        <p>
                            <strong>Time:</strong>{" "}
                            {event.startTime} - {event.endTime}
                        </p>


                        <p>
                            <strong>Location:</strong>{" "}
                            {event.location}
                        </p>


                        <p>
                            <strong>Fee:</strong>{" "}
                            {event.fee || "Free"}
                        </p>

                    </div>


                    <h4>
                        Description
                    </h4>

                    <p className="mb-5">
                        {event.description}
                    </p>


                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => navigate("/events")}
                    >
                        Back to Events
                    </button>

                </div>

            </section>

        </main>
    );
}

export default EventDetail;