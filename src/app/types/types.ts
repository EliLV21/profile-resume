export interface Project {
  title: string;
  name: string;
  description?: string;
  image: string;
  url: string;
  repo?: string;
}

export type ProjectInfo = Record<string, unknown>;
