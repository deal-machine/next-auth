function AuthPageServerSideRendering(props) {
  return (
    <div>
      <h1>Server-Side-Rendering Auth Page</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
export default AuthPageServerSideRendering;

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: {},
    },
  };
}
