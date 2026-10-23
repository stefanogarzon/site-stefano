import { existsSync, readFileSync } from 'node:fs';

export const exists = (path: string) => existsSync(`dist/${path}`);
export const read = (path: string) => readFileSync(`dist/${path}`, 'utf8');
