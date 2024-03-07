import { Post } from "./post";

export type Filters = {
  sort: keyof Post | '';
  query: string;
}