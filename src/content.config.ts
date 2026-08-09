import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    client: z.string(),
    teamSize: z.string(),
    technologies: z.array(z.string()),
    achievements: z.array(z.string()),
    featured: z.boolean().optional(),
  }),
});

const expertiseCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/expertise' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    skills: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
  expertise: expertiseCollection,
};
