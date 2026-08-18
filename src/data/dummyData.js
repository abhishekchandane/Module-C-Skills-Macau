export const organizations = [
    {
        id: 1,
        name: "Macau Polytechnic University"
    },
    {
        id: 2,
        name: "Macau Youth Federation"
    },
    {
        id: 3,
        name: "Macau Productivity and Technology Transfer Center"
    }
];


export const skills = [
    {
        id: 1,
        name: "Web Development",
        category: "Technology",
        description: "Skills related to modern web development.",
        icon: "https://placehold.co/100x100?text=Web"
    },
    {
        id: 2,
        name: "Graphic Design",
        category: "Creative",
        description: "Skills related to visual and graphic design.",
        icon: "https://placehold.co/100x100?text=Design"
    },
    {
        id: 3,
        name: "Artificial Intelligence",
        category: "Technology",
        description: "Skills related to artificial intelligence and machine learning.",
        icon: "https://placehold.co/100x100?text=AI"
    }
];


export const competitions = [
    {
        id: 1,
        name: "Macau Web Development Challenge",
        organizationId: 1,
        createdAt: "2026-08-10",
        startDate: "2026-09-10",
        endDate: "2026-09-15",
        status: "Upcoming",
        description:
            "A competition focused on modern web development skills.",
        coverImage:
            "https://placehold.co/800x450?text=Web+Development",
        skillIds: [1]
    },

    {
        id: 2,
        name: "Macau Creative Design Competition",
        organizationId: 2,
        createdAt: "2026-08-12",
        startDate: "2026-09-20",
        endDate: "2026-09-25",
        status: "Upcoming",
        description:
            "A creative design competition for young talents.",
        coverImage:
            "https://placehold.co/800x450?text=Creative+Design",
        skillIds: [2]
    },

    {
        id: 3,
        name: "AI Innovation Challenge",
        organizationId: 3,
        createdAt: "2026-08-15",
        startDate: "2026-10-01",
        endDate: "2026-10-05",
        status: "Upcoming",
        description:
            "An innovation competition focused on artificial intelligence.",
        coverImage:
            "https://placehold.co/800x450?text=AI+Innovation",
        skillIds: [3]
    },

    {
        id: 4,
        name: "International Coding Competition",
        organizationId: 1,
        createdAt: "2026-07-20",
        startDate: "2026-07-25",
        endDate: "2026-07-30",
        status: "Completed",
        description:
            "An international coding competition.",
        coverImage:
            "https://placehold.co/800x450?text=Coding",
        skillIds: [1]
    }
];


export const events = [
    {
        id: 1,
        name: "React Development Workshop",
        organizationId: 1,
        skillId: 1,
        type: "Workshop",
        date: "2026-08-25",
        startTime: "14:00",
        endTime: "16:00",
        location: "Macau",
        fee: "",
        description:
            "A practical workshop covering React development."
    },

    {
        id: 2,
        name: "Graphic Design Training",
        organizationId: 2,
        skillId: 2,
        type: "Training",
        date: "2026-08-28",
        startTime: "10:00",
        endTime: "13:00",
        location: "Macau Youth Center",
        fee: "",
        description:
            "Training session for graphic design skills."
    },

    {
        id: 3,
        name: "AI Technology Lecture",
        organizationId: 3,
        skillId: 3,
        type: "Lecture",
        date: "2026-09-05",
        startTime: "15:00",
        endTime: "17:00",
        location: "Macau",
        fee: "",
        description:
            "Introduction to artificial intelligence technologies."
    },

    {
        id: 4,
        name: "Web Experience Session",
        organizationId: 1,
        skillId: 1,
        type: "Experience",
        date: "2026-09-12",
        startTime: "09:00",
        endTime: "12:00",
        location: "Macau",
        fee: "",
        description:
            "Hands-on web development experience session."
    }
];


export const milestones = [
    {
        id: 1,
        competitionId: "ws48",
        year: 2024,
        title: "Macau Skills Competition Initiative",
        description:
            "Skills competitions and training opportunities expanded for young people.",
        image: "https://placehold.co/800x450?text=2024"
    },

    {
        id: 2,
        competitionId: "ws48",
        year: 2025,
        title: "International Competition Participation",
        description:
            "More young people participated in international skills competitions.",
        image: "https://placehold.co/800x450?text=2025"
    },

    {
        id: 3,
        competitionId: "ws48",
        year: 2026,
        title: "Skills Macau Platform",
        description:
            "A centralized platform for discovering competitions and training opportunities.",
        image: "https://placehold.co/800x450?text=2026"
    }
];