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
    name: "nix",
    display: "nix",
    color: yellow,
    variants: [
      {
        name: "nix-shell",
        display: "nix shell",
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
        name: "nestjs-auth-service",
        display: "nestjs-auth-service",
        color: lightGreen,
        customCommand: 'git clone https://github.com/pnstack/nestjs-auth-service.git TARGET_DIR'
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
    display: "NextJS",
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
    name: "docs",
    display: "Documentation",
    color: blue,
    variants: [
      {
        name: "docusaurus",
        display: "Docusaurus",
        color: magenta,
      },
    ],
  },
  {
    name: "node",
    display: "node",
    color: yellow,
    variants: [
      {
        name: "node-typescript",
        display: "node-typescript",
        color: blue,
      },
    ],
  },
  {
    name: "svelte",
    display: "svelte",
    color: blue,
    variants: [
      {
        name: "svelte-tailwind-ts",
        display: "svelte-tailwind-ts",
        color: blue,
      },
    ],
  },
  {
    name: "python",
    display: "Python",
    color: blue,
    variants: [
      {
        name: "python-fastapi",
        display: "FastAPI Project",
        color: lightGreen,
      },
      {
        name: "python-flask",
        display: "Flask Project",
        color: cyan,
      },
      {
        name: "python-django",
        display: "Django Project",
        color: green,
        customCommand: "django-admin startproject TARGET_DIR",
      }
    ],
  },
  {
    name: "rust",
    display: "Rust",
    color: red,
    variants: [
      {
        name: "rust-cargo",
        display: "Cargo New Project",
        color: red,
        customCommand: "cargo new TARGET_DIR",
      },
      {
        name: "rust-actix",
        display: "Actix Web Project",
        color: lightRed,
        customCommand: "cargo new TARGET_DIR && cd TARGET_DIR && cargo add actix-web",
      },
      {
        name: "rust-rocket",
        display: "Rocket Web Framework",
        color: magenta,
        customCommand: "cargo new TARGET_DIR && cd TARGET_DIR && cargo add rocket",
      }
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
