import { useEffect, useState } from "react";

import EventCard from "../components/EventCard";

import { events } from "../data/dummyData";


function Events() {

    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [hidePast, setHidePast] = useState(false);

    const [searchText, setSearchText] = useState("");


    // 300ms debounce
    useEffect(() => {

        const timer = setTimeout(() => {
            setSearchText(search);
        }, 300);


        return () => clearTimeout(timer);

    }, [search]);


    const today = new Date().toISOString().split("T")[0];


    const filteredEvents = events
        .filter((event) => {

            if (
                searchText &&
                !event.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            ) {
                return false;
            }

            if (type && event.type !== type) {
                return false;
            }

            if (hidePast && event.date < today) {
                return false;
            }

            return true;

        })
        .sort((a, b) => a.date.localeCompare(b.date));


    const eventTypes = [
        "Workshop",
        "Lecture",
        "Training",
        "Experience",
        "Selection Briefing"
    ];


    return (
        <main>

            <section className="py-5">

                <div className="container">

                    <h1 className="fw-bold mb-4">
                        Events
                    </h1>


                    {/* Filters */}
                    <div className="row g-3 mb-4">

                        <div className="col-md-6">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search events..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                aria-label="Search events"
                            />

                        </div>


                        <div className="col-md-3">

                            <select
                                className="form-select"
                                value={type}
                                onChange={(e) =>
                                    setType(e.target.value)
                                }
                                aria-label="Filter by event type"
                            >

                                <option value="">
                                    All Types
                                </option>

                                {eventTypes.map((eventType) => (

                                    <option
                                        key={eventType}
                                        value={eventType}
                                    >
                                        {eventType}
                                    </option>

                                ))}

                            </select>

                        </div>


                        <div className="col-md-3">

                            <div className="form-check mt-2">

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="hidePast"
                                    checked={hidePast}
                                    onChange={(e) =>
                                        setHidePast(e.target.checked)
                                    }
                                />

                                <label
                                    className="form-check-label"
                                    htmlFor="hidePast"
                                >
                                    Hide past events
                                </label>

                            </div>

                        </div>

                    </div>


                    {/* Events */}
                    {filteredEvents.length > 0 ? (

                        <div className="row g-4">

                            {filteredEvents.map((event) => (

                                <div
                                    key={event.id}
                                    className="col-12 col-md-6 col-lg-4"
                                >
                                    <EventCard event={event} />
                                </div>

                            ))}

                        </div>

                    ) : (

                        <div className="alert alert-info">
                            No events found.
                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}

export default Events;