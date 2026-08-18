import { Link, useParams } from "react-router-dom";
import { skills, competitions, events } from "../data/dummyData";

function SkillDetail() {

    const { skillId } = useParams();

    const skill = skills.find(
        (item) => item.id === Number(skillId)
    );

    if (!skill) {
        return (
            <div className="container py-5">
                <h2>Skill not found</h2>

                <Link to="/" className="btn btn-primary">
                    Back to Home
                </Link>
            </div>
        );
    }

    const relatedCompetitions = competitions.filter(
        (item) => item.skillIds.includes(skill.id)
    );

    const relatedEvents = events.filter(
        (item) => item.skillId === skill.id
    );

    return (
        <div className="container py-5">

            {/* Breadcrumb */}
            <nav className="mb-4">
                <Link to="/">Home</Link> {" > "}
                Skills {" > "}
                {skill.name}
            </nav>


            {/* Skill Details */}
            <h1>{skill.name}</h1>

            <span className="badge bg-secondary">
                {skill.category}
            </span>

            <p className="mt-3">
                {skill.description}
            </p>


            {/* Competitions */}
            <h2 className="h4 mt-5">
                Competitions with this skill
            </h2>

            <div className="row g-3">

                {relatedCompetitions.length > 0 ? (

                    relatedCompetitions.map((competition) => (

                        <div
                            key={competition.id}
                            className="col-md-6 col-lg-4"
                        >

                            <div className="card h-100">
                                <div className="card-body">

                                    <h5>
                                        {competition.name}
                                    </h5>

                                    <p>
                                        {competition.startDate} -{" "}
                                        {competition.endDate}
                                    </p>

                                    <span className="badge bg-primary">
                                        {competition.status}
                                    </span>

                                    <br />

                                    <Link
                                        to={`/competitions/${competition.id}`}
                                        className="btn btn-sm btn-primary mt-3"
                                    >
                                        View Competition
                                    </Link>

                                </div>
                            </div>

                        </div>

                    ))

                ) : (

                    <div className="alert alert-info">
                        No competitions found.
                    </div>

                )}

            </div>


            {/* Events */}
            <h2 className="h4 mt-5">
                Related Events
            </h2>

            <div className="row g-3">

                {relatedEvents.length > 0 ? (

                    relatedEvents.map((event) => (

                        <div
                            key={event.id}
                            className="col-md-6 col-lg-4"
                        >

                            <div className="card h-100">
                                <div className="card-body">

                                    <h5>
                                        {event.name}
                                    </h5>

                                    <p>
                                        {event.date}
                                    </p>

                                    <span className="badge bg-primary">
                                        {event.type}
                                    </span>

                                    <br />

                                    <Link
                                        to={`/events/${event.id}`}
                                        className="btn btn-sm btn-primary mt-3"
                                    >
                                        View Event
                                    </Link>

                                </div>
                            </div>

                        </div>

                    ))

                ) : (

                    <div className="alert alert-info">
                        No events found.
                    </div>

                )}

            </div>

        </div>
    );
}

export default SkillDetail;