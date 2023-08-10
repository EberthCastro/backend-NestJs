export interface CreateProjectDto {
    title: string;
    description?: string;
    image: string;
    category: string;
    done?: boolean;
}