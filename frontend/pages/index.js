import { useState } from "react";

export default function HomeScreen() {
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
        onSubmit={(event) => {
          event.preventDefault();
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
        {console.log(values)}
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </div>
  );
}
