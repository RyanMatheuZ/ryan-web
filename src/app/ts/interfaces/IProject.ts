import type { TTechStack } from '@ts/types';

interface IProject {
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

export default IProject;
