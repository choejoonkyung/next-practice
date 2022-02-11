import { useGlobalState } from "../providers/Global";

function TestState({ theme }: { theme: string }) {
  console.log("TestState Component render!");
  const { actions } = useGlobalState();
  return (
    <>
      <p>{theme}</p>
      <button onClick={actions?.toLightTheme}>light 테마로 변경</button>
    </>
  );
}

export default TestState;
