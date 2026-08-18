import { useState } from "react";

import {
    competitions,
    organizations,
    skills
} from "../data/dummyData";

import CompetitionCard from "../components/CompetitionCard";


function Competitions() {

    const [status, setStatus] = useState("All");
    const [organization, setOrganization] = useState("All");
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [sortBy, setSortBy] = useState("newest");


    // Select / Remove skill
    function handleSkill(skillId) {

        if (selectedSkills.includes(skillId)) {

            setSelectedSkills(
                selectedSkills.filter((id) => id !== skillId)
            );

        } else {

            setSelectedSkills([
                ...selectedSkills,
                skillId
            ]);

        }
    }


    // Filter competitions
    let result = competitions.filter((competition) => {

        if (
            status !== "All" &&
            competition.status !== status
        ) {
            return false;
        }

        if (
            organization !== "All" &&
            competition.organizationId !== Number(organization)
        ) {
            return false;
        }

        if (
            selectedSkills.length > 0 &&
            !selectedSkills.every((skillId) =>
                competition.skillIds.includes(skillId)
            )
        ) {
            return false;
        }

        return true;
    });


    // Sort competitions
    result.sort((a, b) => {

        if (sortBy === "newest") {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }

        if (sortBy === "oldest") {
            return new Date(a.createdAt) - new Date(b.createdAt);
        }

        if (sortBy === "name-az") {
            return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);
    });


    return (
        <main>

            <div className="container py-5">

                <h1 className="fw-bold">
                    Competitions
                </h1>

                <p className="text-muted">
                    Explore skills competitions and opportunities
                    available in Macau.
                </p>


                {/* Status */}

                <div className="mb-4">

                    <h5>Status</h5>

                    <div className="d-flex flex-wrap gap-2">

                        {["All", "Upcoming", "Ongoing", "Completed"].map(
                            (item) => (

                                <button
                                    key={item}
                                    className={
                                        status === item
                                            ? "btn btn-primary"
                                            : "btn btn-outline-primary"
                                    }
                                    onClick={() => setStatus(item)}
                                >
                                    {item}
                                </button>

                            )
                        )}

                    </div>

                </div>


                {/* Organization */}

                <div className="mb-4">

                    <label className="form-label fw-bold">
                        Organization
                    </label>

                    <select
                        className="form-select"
                        value={organization}
                        onChange={(e) =>
                            setOrganization(e.target.value)
                        }
                    >

                        <option value="All">
                            All Organizations
                        </option>

                        {organizations.map((item) => (

                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.name}
                            </option>

                        ))}

                    </select>

                </div>


                {/* Skills */}

                <div className="mb-4">

                    <h5>Skills</h5>

                    <div className="d-flex flex-wrap gap-2">

                        {skills.map((skill) => (

                            <button
                                key={skill.id}
                                className={
                                    selectedSkills.includes(skill.id)
                                        ? "btn btn-primary"
                                        : "btn btn-outline-primary"
                                }
                                onClick={() =>
                                    handleSkill(skill.id)
                                }
                                aria-pressed={selectedSkills.includes(
                                    skill.id
                                )}
                            >
                                {skill.name}
                            </button>

                        ))}

                    </div>

                </div>


                {/* Sort */}

                <div className="mb-4">

                    <label className="form-label fw-bold">
                        Sort by
                    </label>

                    <select
                        className="form-select"
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value)
                        }
                    >

                        <option value="newest">
                            Newest
                        </option>

                        <option value="oldest">
                            Oldest
                        </option>

                        <option value="name-az">
                            Name A-Z
                        </option>

                        <option value="name-za">
                            Name Z-A
                        </option>

                    </select>

                </div>


                {/* Result */}

                <p
                    className="text-muted"
                    aria-live="polite"
                >
                    Showing {result.length} / {competitions.length} competitions
                </p>


                {/* Cards */}

                <div className="row g-4">

                    {result.length > 0 ? (

                        result.map((competition) => (

                            <div
                                key={competition.id}
                                className="col-12 col-md-6 col-lg-4"
                            >
                                <CompetitionCard
                                    competition={competition}
                                />
                            </div>

                        ))

                    ) : (

                        <div className="alert alert-info">
                            No competitions match your filters.
                        </div>

                    )}

                </div>

            </div>

        </main>
    );
}

export default Competitions;