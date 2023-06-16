interface Intern {
    name: string;
    age: number;
    skills: string[];
}

interface Junior {
    name: string;
    age: number;
    skills: string[];
    date_of_promotion: Date;
    domain: Domain;
}

declare enum Domain {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend",
}

interface Company {
    Interns: Intern[];
    Juniors: Junior[];
    Country: string;
}

export { Company };
