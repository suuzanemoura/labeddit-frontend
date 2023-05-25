import loading from "../assets/loading.svg";
import { useRequestData } from "../hooks/useRequestData";
import { useTextarea } from "../hooks/useTextarea";
import { useToast } from "../hooks/useToast";
import { getMessageErrorToastCreatePostOrComment } from "../utils/ReturnMessageToast";

export function Textarea({
  headers,
  path,
  placeholder,
  button,
  setNewContent,
}) {
  const { isLoading, requestData } = useRequestData();
  const { successToast, errorToast, Toast } = useToast();
  const [textareaForm, onChangeTextarea, clearInputs] = useTextarea("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const response = await requestData(path, "POST", textareaForm, headers);

    response.data.message
      ? (clearInputs(),
        successToast(response.data.message),
        setNewContent(textareaForm))
      : errorToast(getMessageErrorToastCreatePostOrComment(response.data));
  };

  return (
    <>
      <form
        className="form gap-4"
        onSubmit={onSubmit}
      >
        <textarea
          className="textarea"
          placeholder={placeholder}
          value={textareaForm.content}
          onChange={onChangeTextarea}
        />
        <button
          type="submit"
          className="button rounded-xl"
        >
          {isLoading ? (
            <img
              src={loading}
              alt="Carregando sua requisição"
              className="inline w-6 h-6 mr-3 animate-spin"
            />
          ) : (
            button
          )}
        </button>
      </form>
      <Toast />
    </>
  );
}
