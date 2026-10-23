import type { APIContext } from 'astro';
import { feed } from '../lib/rss';

export const GET = ({ site }: APIContext) => feed('pt', site!);
