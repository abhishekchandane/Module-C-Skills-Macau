import { Link, useNavigate, useParams } from "react-router-dom";

import {
    competitions,
    organizations,
    skills
} from "../data/dummyData";


function CompetitionDetail() {

    const { competitionId } = useParams();

    const navigate = useNavigate();


    const competition = competitions.find(
        (item) => item.id === Number(competitionId)
    );


    if (!competition) {
        return (
            <main className="container py-5">

                <div className="alert alert-warning">
                    Competition not found.
                </div>

                <Link
                    to="/competitions"
                    className="btn btn-primary"
                >
                    Back to Competitions
                </Link>

            </main>
        );
    }


    const organization = organizations.find(
        (item) => item.id === competition.organizationId
    );


    const relatedSkills = skills.filter(
        (skill) => competition.skillIds.includes(skill.id)
    );


    const currentIndex = competitions.findIndex(
        (item) => item.id === competition.id
    );


    const previousCompetition =
        competitions[currentIndex - 1];

    const nextCompetition =
        competitions[currentIndex + 1];


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
                                <Link to="/competitions">
                                    Competitions
                                </Link>
                            </li>

                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                {competition.name}
                            </li>

                        </ol>

                    </nav>

                </div>

            </section>


            {/* Competition */}
            <section className="py-5">

                <div className="container">

                    <img
                        src={competition.coverImage}
                        alt={competition.name}
                        className="img-fluid w-100 rounded mb-4"
                    />


                    <span className="badge bg-primary mb-3">
                        {competition.status}
                    </span>


                    <h1 className="fw-bold">
                        {competition.name}
                    </h1>


                    <p className="mb-2">
                        <strong>Organization:</strong>{" "}
                        {organization?.name}
                    </p>


                    <p className="mb-4">
                        <strong>Date:</strong>{" "}
                        {competition.startDate} -{" "}
                        {competition.endDate}
                    </p>


                    <h4>
                        Description
                    </h4>

                    <p>
                        {competition.description}
                    </p>


                    {/* Related Skills */}
                    <h4 className="mt-4">
                        Skills
                    </h4>

                    <div className="d-flex flex-wrap gap-2">

                        {relatedSkills.map((skill) => (

                            <Link
                                key={skill.id}
                                to={`/skills/${skill.id}`}
                                className="badge bg-secondary text-decoration-none"
                            >
                                {skill.name}
                            </Link>

                        ))}

                    </div>


                    {/* Navigation */}
                    <div className="d-flex justify-content-between mt-5">

                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => navigate("/competitions")}
                        >
                            Back
                        </button>


                        <div className="d-flex gap-2">

                            {previousCompetition && (
                                <Link
                                    to={`/competitions/${previousCompetition.id}`}
                                    className="btn btn-outline-primary"
                                >
                                    Previous
                                </Link>
                            )}


                            {nextCompetition && (
                                <Link
                                    to={`/competitions/${nextCompetition.id}`}
                                    className="btn btn-primary"
                                >
                                    Next
                                </Link>
                            )}

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default CompetitionDetail;