import type { TTechStack } from '@ts/types';

export interface IProject {
  label: 'front-end' | 'back-end' | 'full-stack';
  primaryColor: string;
  secondaryColor: string;
  slug: string;
  previewImageURL: string;
  logoURL: string;
  title: string;
  description: string[];
  stack: TTechStack[];
  createdAt: string;
}
