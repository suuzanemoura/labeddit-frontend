import { useLocation, useNavigate, useParams } from "react-router";
import labeddit_icon from "../assets/labeddit_icon.svg";
import close_icon from "../assets/close_icon.svg";
import { goToLogin } from "../routes/coordinator";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();


  const renderHeader = () => {
  switch (location.pathname) {
    case "/signup":
      return (
        <>
          <div className="col-start-2 col-end-2 flex items-center justify-center">
            <img
              src={labeddit_icon}
              alt="Ícone do logtipo da rede social Labeddit"
              className="w-7"
            />
          </div>
          <div className="col-start-3 col-end-3 flex items-center justify-end mr-7">
            <button
              className="button-header"
              type="button"
              onClick={() => goToLogin(navigate)}
            >
              Entrar
            </button>
          </div>
        </>
      );

    case "/posts":
      return (
        <>
          <div className="col-start-2 col-end-2 flex items-center justify-center">
            <img
              src={labeddit_icon}
              alt="Ícone do logtipo da rede social Labeddit"
              className="w-7"
            />
          </div>
          <div className="col-start-3 col-end-3 flex items-center justify-end mr-7">
            <button
              className="button-header"
              type="button"
              onClick={() => goToLogin(navigate)}
            >
              Sair
            </button>
          </div>
        </>
      );

    case `/posts/${params.postId}`:
      return (
        <>
          <div className="col-start-1 col-end-1 flex items-center justify-start ml-7">
            <button
              className="button-header"
              type="button"
              onClick={() => navigate(-1)}
            >
              <img
                src={close_icon}
                alt="Ícone para fechar em formato de X"
                className="w-6"
              />
            </button>
          </div>
          <div className="col-start-2 col-end-2 flex items-center justify-center">
            <img
              src={labeddit_icon}
              alt="Ícone do logtipo da rede social Labeddit"
              className="w-7"
            />
          </div>
          <div className="col-start-3 col-end-3 flex items-center justify-end mr-7">
            <button
              className="button-header"
              type="button"
              onClick={() => goToLogin(navigate)}
            >
              Sair
            </button>
          </div>
        </>
      );

    default:
      <>
        <div className="col-start-2 col-end-2 flex items-center justify-center">
          <img
            src={labeddit_icon}
            alt="Ícone do logtipo da rede social Labeddit"
            className="w-7"
          />
        </div>
      </>;
  }}

  return (
    <header className="w-full h-[50px] bg-lighter-gray grid grid-cols-3">
      {renderHeader()}
    </header>
  );
};
