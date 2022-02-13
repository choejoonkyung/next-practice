import { useGlobalState } from "../providers/Global";
import useComfirmDialog from "./common/Dialog/ComfirmDialog/useComfirmDialog";

function TestState({ theme }: { theme: string }) {
  const { actions } = useGlobalState();
  const { open: openComfirmDialog } = useComfirmDialog();

  return (
    <>
      <p>{theme}</p>
      <button onClick={actions.toLightTheme}>light 테마로 변경</button>
      <button onClick={openComfirmDialog}>모달오픈</button>
    </>
  );
}

export default TestState;
