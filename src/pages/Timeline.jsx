import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { competitions, milestones } from "../data/dummyData";
import "./Timeline.css";


function Timeline() {

    const [image, setImage] = useState(null);

    useEffect(() => {

        const items = document.querySelectorAll(".timeline-item");

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        });

        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();

    }, []);


    const competition = competitions.find(
        (item) => item.id === "ws48"
    );

    const timelineData = milestones
        .filter((item) => item.competitionId === "ws48")
        .sort((a, b) => a.year - b.year);


    return (
        <main>

            <div className="container py-5">

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">

                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="breadcrumb-item active">
                            Timeline
                        </li>

                    </ol>
                </nav>


                <div className="text-center mb-5">

                    <span className="badge bg-primary">
                        WorldSkills
                    </span>

                    <h1 className="fw-bold mt-2">
                        WorldSkills Timeline
                    </h1>

                    <p className="text-muted">
                        Explore the history of WorldSkills and Macau's participation.
                    </p>

                </div>


                {/* Timeline */}

                <div className="timeline">

                    {timelineData.map((item, index) => (

                        <div
                            key={item.id}
                            className={`timeline-item ${
                                index % 2 === 0
                                    ? "timeline-left"
                                    : "timeline-right"
                            }`}
                        >

                            <div className="timeline-dot">
                                {item.year}
                            </div>

                            <div className="card shadow-sm">

                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="card-img-top"
                                    />
                                )}

                                <div className="card-body">

                                    <h5>
                                        {item.title}
                                    </h5>

                                    <p className="mb-0">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>


                {/* Gallery */}

                <h2 className="h4 fw-bold mt-5 mb-3">
                    WorldSkills Gallery
                </h2>

                <div className="row g-3">

                    {competition?.gallery?.map((photo, index) => (

                        <div
                            key={index}
                            className="col-6 col-md-3"
                        >

                            <button
                                className="gallery-button"
                                onClick={() => setImage(photo)}
                                aria-label="Open image"
                            >

                                <img
                                    src={photo}
                                    alt={`WorldSkills ${index + 1}`}
                                    loading="lazy"
                                    className="img-fluid rounded"
                                />

                            </button>

                        </div>

                    ))}

                </div>

            </div>


            {/* Lightbox */}

            {image && (

                <div
                    className="timeline-modal"
                    onClick={() => setImage(null)}
                    role="dialog"
                    aria-modal="true"
                >

                    <img
                        src={image}
                        alt="WorldSkills"
                        className="img-fluid"
                    />

                </div>

            )}

        </main>
    );
}

export default Timeline;