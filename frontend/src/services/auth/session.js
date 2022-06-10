import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authService } from "./authService";

export function withSession(sessionExists) {
  return async ({ res }) => {
    try {
      const { session } = await authService.getSession(res.req.cookies);

      const context = {
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

function useSession() {
  const [session, setSession] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getSession()
      .then((userSession) => {
        setSession(userSession.session);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    session,
    error,
    loading,
  };
}

// Higher-Order Component
export function withSessionHOC(Component) {
  return function Wrapper(props) {
    const router = useRouter();
    const { error, loading, session } = useSession();

    if (!loading && error) router.push("/");

    const modifiedProps = {
      ...props,
      session,
    };
    return <Component {...modifiedProps} />;
  };
}
