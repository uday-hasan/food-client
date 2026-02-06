import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
// // import { env } from "@/env";

// export const authClient = createAuthClient({
//   baseURL: `https://food-server-lilac.vercel.app/api/auth`,
//   plugins: [
//     inferAdditionalFields({
//       user: {
//         role: {
//           type: "string",
//         },
//       },
//     }),
//   ],
// });

// auth-client.ts
export const authClient = createAuthClient({
  // Point this to your FRONTEND URL (the one with the rewrite)
  // In production, this should be your Vercel URL
  baseURL: "https://food-client-chi.vercel.app",
  plugins: [
    inferAdditionalFields({
      user: { role: { type: "string" } },
    }),
  ],
});
