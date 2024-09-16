export type TTechnologiesIconName = (typeof TECHNOLOGIES)[number]["iconName"];
export type TTechnologiesLabel = (typeof TECHNOLOGIES)[number]["label"];

export const TECHNOLOGIES = [
  { label: "CSS", iconName: "css" },
  { label: "Expo", iconName: "expo" },
  { label: "Express", iconName: "express" },
  { label: "Firebase", iconName: "firebase" },
  { label: "Git", iconName: "git" },
  { label: "HTML", iconName: "html" },
  { label: "JavaScript", iconName: "javascript" },
  { label: "Jest", iconName: "jest" },
  { label: "Material UI", iconName: "material-ui" },
  { label: "Mongo DB", iconName: "mongo-db" },
  { label: "Nest.js", iconName: "nest-js" },
  { label: "Next.js", iconName: "next-js" },
  { label: "Node.js", iconName: "node-js" },
  { label: "Nuxt.js", iconName: "nuxt-js" },
  { label: "React/React Native", iconName: "react" },
  { label: "Sass", iconName: "sass" },
  { label: "Tailwind CSS", iconName: "tailwind-css" },
  { label: "TypeScript", iconName: "typescript" },
  { label: "Vercel", iconName: "vercel" },
  { label: "Vue.js", iconName: "vue-js" },
] as const;
