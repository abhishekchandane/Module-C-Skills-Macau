import { Link } from "react-router-dom";

function CompetitionCard({ competition }) {

    return (
        <div className="card h-100 shadow-sm">

            <img
                src={competition.coverImage}
                className="card-img-top"
                alt={competition.name}
            />

            <div className="card-body">

                <span className="badge bg-primary mb-2">
                    {competition.status}
                </span>

                <h5 className="card-title">
                    {competition.name}
                </h5>

                <p className="card-text mb-2">
                    Organization ID: {competition.organizationId}
                </p>

                <p className="card-text text-muted">
                    {competition.startDate} - {competition.endDate}
                </p>

                <Link
                    to={`/competitions/${competition.id}`}
                    className="btn btn-outline-primary"
                >
                    View Details
                </Link>

            </div>

        </div>
    );
}

export default CompetitionCard;