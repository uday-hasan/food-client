import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
// import { env } from "@/env";

export const authClient = createAuthClient({
  baseURL: `https://food-server-lilac.vercel.app/api/auth`,
  plugins: [
    inferAdditionalFields({
      user: {
        role: {
          type: "string",
        },
      },
    }),
  ],
});
