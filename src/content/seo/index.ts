import type { SeoPageData } from "@/lib/seo";
import { PAGES as RAW } from "./registry.mjs";

export const PAGES = RAW as unknown as SeoPageData[];
