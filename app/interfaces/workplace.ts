type Project = {
    description: string;
    role: string;
    technologies: string[];
};

type Workplace = {
    name: string;
    from: string;
    to: string;
    location: string;
    logo?: string;
    projects: Project[];
};

export type { Workplace, Project };