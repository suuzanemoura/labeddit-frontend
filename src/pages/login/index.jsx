import { useForm } from "../../hooks/useForm";
import labeddit_logo from "../../assets/labeddit_logo.svg";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { goToPosts, goToSignUp } from "../../routes/coordinator";
import { useNavigate } from "react-router";
import { useRequestData } from "../../hooks/useRequestData";
import { useToast } from "../../hooks/useToast";
import Cookies from "universal-cookie";

export default function LoginPage() {
  const navigate = useNavigate();
  const { isLoading, requestData } = useRequestData();
  const { errorToast, Toast } = useToast();

  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get("labedditUserToken");

    if (token) {
      goToPosts(navigate);
    }
  }, []);

  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: "",
  });

  const [showPassword, SetShowPassword] = useState("password");
  const handleShowPassword = (type) => {
    SetShowPassword(type);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const response = await requestData(
      "users/login",
      "POST",
      form,
      undefined,
      undefined,
    );

    response.data.token
      ? (clearInputs(),
        cookies.set("labedditUserToken", response.data.token, { path: "/" }),
        console.log(response.data.token),
        goToPosts(navigate))
      : errorToast(response.data);
  };

  return (
    <>
      <main className="flex min-h-full flex-col justify-center px-8 gap-24">
        <div className="flex justify-center items-center flex-col">
          <img
            className="mx-auto w-auto"
            src={labeddit_logo}
            alt="Logo da rede social Labeddit"
          />
          <p className="font-light text-center">
            O projeto de rede social da Labenu
          </p>
        </div>

        <div className="flex items-center flex-col w-full">
          <form
            className="form"
            onSubmit={onSubmit}
          >
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChangeInputs}
              autoComplete="email"
              placeholder="Email"
              required
              className="input"
            />
            <input
              id="password"
              name="password"
              type={showPassword}
              value={form.password}
              onChange={onChangeInputs}
              autoComplete="current-password"
              placeholder="Senha"
              required
              className="input"
            />
            {showPassword === "password" ? (
              <AiOutlineEye
                className="absolute text-gray-900 right-4 mt-[85px] sm:mt-[93px]"
                onClick={() => handleShowPassword("text")}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute text-gray-900 right-4 mt-[85px] sm:mt-[93px]"
                onClick={() => handleShowPassword("password")}
              />
            )}
            <div className="w-full h-full flex flex-col items-center gap-4 pt-14">
              <button
                type="submit"
                className="button"
              >
                {!isLoading ? (
                  "Continuar"
                ) : (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-6 h-6 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </button>
              <hr className="hr" />
              <button
                type="button"
                className="button-outline"
                onClick={() => goToSignUp(navigate)}
              >
                Crie uma conta!
              </button>
            </div>
          </form>
        </div>
      </main>
      <Toast />
    </>
  );
}
