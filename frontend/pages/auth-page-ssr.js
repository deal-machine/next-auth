import { withSession } from "../src/services/auth/session";

export const getServerSideProps = withSession(({ res }) => {
  return {
    props: {
      session: res.session,
    },
  };
});

export default function AuthPageServerSideRendering(props) {
  return (
    <div>
      <h1>Server-Side-Rendering Auth Page</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
