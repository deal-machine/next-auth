import { useState } from "react";
import { useRouter } from "next/router";
export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        method="POST"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/auth-page-ssr");
        }}
      >
        <input
          placeholder="Usuário"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </div>
  );
}
