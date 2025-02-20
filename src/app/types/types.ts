export interface Project {
  title: string;
  name: string;
  description?: string;
  image: string;
  url: string;
  repo?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ProjectInfo = Record<string, any>;
