export interface SocialLinks {
    linkedin?: string;
    github?: string;
    twitter?: string;
    behance?: string;
    dribbble?: string;
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    social: SocialLinks;
}