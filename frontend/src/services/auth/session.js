import { authService } from "./authService";

export function withSession(sessionExists) {
  return async ({ res }) => {
    try {
      const { session } = await authService.getSession(res.req.cookies);
      const context = {
        ...res,
        res: {
          ...res,
          session,
        },
      };

      return sessionExists(context);
    } catch (error) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
      };
    }
  };
}
