import {
  blue,
  cyan,
  green,
  lightGreen,
  lightRed,
  magenta,
  red,
  reset,
  yellow,
} from "kolorist";

export enum FrameworkType {
  node = "node",
}

export type ColorFunc = (str: string | number) => string;
export type Framework = {
  name: string;
  display: string;
  color: ColorFunc;
  variants: FrameworkVariant[];
  type?: keyof typeof FrameworkType;
};
export type FrameworkVariant = {
  name: string;
  display: string;
  color: ColorFunc;
  customCommand?: string;
};

export const FRAMEWORKS: Framework[] = [
  {
    name: "base",
    display: "base",
    color: yellow,
    variants: [
      {
        name: "base-project",
        display: "Base Project",
        color: blue,
      },
    ],
  },
  {
    name: "nestjs",
    display: "NestJS",
    color: cyan,
    variants: [
      {
        name: "nest-prisma",
        display: "nest-prisma",
        color: lightGreen,
      },
      {
        name: "nestjs-cli",
        display: "nestjs-cli ↗",
        color: magenta,
        customCommand: "npx @nestjs/cli new TARGET_DIR",
      },
    ],
  },
  {
    name: "nextjs",
    display: "NestJS",
    color: magenta,
    variants: [
      {
        name: "next-ts-tailwind",
        display: "Nextjs Typescript TailwindCSS",
        color: magenta,
      },
      {
        name: "create-next-app",
        display: "create-next-app ↗",
        color: magenta,
        customCommand: "npx create-next-app@latest TARGET_DIR",
      },
    ],
  },
  {
    name: "vite",
    display: "Vite",
    color: reset,
    variants: [
      {
        name: "create-vite",
        display: "create-vite ↗",
        color: reset,
        customCommand: "npm create vite@latest TARGET_DIR",
      },
      {
        name: "create-vite-extra",
        display: "create-vite-extra ↗",
        color: reset,
        customCommand: "npm create vite-extra@latest TARGET_DIR",
      },
      {
        name: "create-electron-vite",
        display: "create-electron-vite ↗",
        color: reset,
        customCommand: "npm create electron-vite@latest TARGET_DIR",
      },
    ],
  },
];

export const TEMPLATES = FRAMEWORKS.map(
  (f) => (f.variants && f.variants.map((v) => v.name)) || [f.name]
).reduce((a, b) => a.concat(b), []);
