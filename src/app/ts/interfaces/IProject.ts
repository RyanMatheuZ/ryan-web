import type { TTechStack } from '@ts/types';

export interface IProject {
  label: string;
  primaryColor: string;
  secondaryColor: string;
  slug: string;
  title: string;
  description: string[];
  stack: TTechStack[];
  link: string;
  createdAt: string;
}
