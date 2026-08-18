import { Link } from "react-router-dom";


function EventCard({ event }) {

    const isPast = new Date(event.date) < new Date();


    return (
        <div className={`card h-100 ${isPast ? "opacity-50" : ""}`}>

            <div className="card-body">

                <span className="badge bg-primary mb-2">
                    {event.type}
                </span>

                <h5 className="card-title">
                    {event.name}
                </h5>

                <p className="mb-1">
                    <strong>Date:</strong> {event.date}
                </p>

                <p className="mb-1">
                    <strong>Time:</strong>{" "}
                    {event.startTime} - {event.endTime}
                </p>

                <p className="mb-3">
                    <strong>Location:</strong> {event.location}
                </p>

                <Link
                    to={`/events/${event.id}`}
                    className="btn btn-primary"
                >
                    View Details
                </Link>

            </div>

        </div>
    );
}

export default EventCard;