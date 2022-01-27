import { useEffect, useState } from "react";
import { FallbackProps } from "react-error-boundary";
import { isAxiosError } from "../hooks/useErrorboundary";

function ErrorView(props: FallbackProps) {
  const [code, setCode] = useState(0);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (isAxiosError(props.error) && props.error.response) {
      setCode(props.error.response.status);
      setDesc(props.error.response.data.description);
    }
  }, []);

  return (
    <div role="alert">
      <p>에러가 발생 했습니다!</p>
      <p>{code}</p>
      <pre>{desc}</pre>
      <button onClick={() => props.resetErrorBoundary()}>다시 시도</button>
    </div>
  );
}

export default ErrorView;
