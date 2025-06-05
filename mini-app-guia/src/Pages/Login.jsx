import { useForm } from "react-hook-form";
import { useUser } from "../Context/userContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useUser();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const success = login(data);
    if (success) {
      navigate("/private");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", { required: true })} placeholder="Usuario" />
        <input {...register("password", { required: true })} placeholder="Contraseña" type="password" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}