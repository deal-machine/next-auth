import { withSessionHOC } from "../src/services/auth/session";

function AuthPageStatic(props) {
  return (
    <div>
      <h1>Static Auth Page</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
export default withSessionHOC(AuthPageStatic);
