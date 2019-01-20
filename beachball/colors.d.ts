import { Seeder } from './types';
declare type ColorGen = {
    (alpha?: number): string;
};
export default function colors(seeder: Seeder): ColorGen;
export {};
