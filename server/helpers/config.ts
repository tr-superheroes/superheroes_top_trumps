import * as dotenv from "dotenv";
dotenv.config();
export const CONFIG = { TOKEN: process.env.ACCESS_TOKEN ?? 0 } as const;
