import type { ServiceMore } from "./types";
import { WEB } from "./web";
import { MKT } from "./mkt";
import { AUTO } from "./auto";
import { CONSULT } from "./consult";

// the staircase and information sections for every service in the Services menu, by service key
export const MORE: Record<string, ServiceMore> = { ...WEB, ...MKT, ...AUTO, ...CONSULT };
