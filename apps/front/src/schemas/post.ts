
export interface Post  {
    id: number;
    title: string;
    body: string;
    author: string;
    coverImage?: string;
    date: Date;
    tags: string[];
}
