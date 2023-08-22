import type { IProject } from '@ts/interfaces';

export const getFindProjectBySlug = (projects: ReadonlyArray<IProject>, slug: string): IProject | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getRemainingProjectsFilteredBySlug = (projects: ReadonlyArray<IProject>, slug: string): IProject[] => {
  return projects.filter((project) => project.slug !== slug);
};
