export const getMessageErrorToastLogin = (message) => {
  switch (message) {
    case "email: Invalid email":
      return "'Email' ou 'Senha' incorretos. Tente novamente.";

    case "password: String must contain at least 8 character(s)":
      return "'Email' ou 'Senha' incorretos. Tente novamente.";

    case "'Email' ou 'Password' incorretos. Tente novamente.":
      return "'Email' ou 'Senha' incorretos. Tente novamente.";

    default:
      return "Erro inesperado. Tente novamente.";
  }
};
