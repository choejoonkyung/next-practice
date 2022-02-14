import styled from "@emotion/styled";
import { useGlobalState } from "../providers/Global";
import useComfirmDialog from "./common/Dialog/ComfirmDialog/useComfirmDialog";

function TestState({ theme }: { theme: string }) {
  const { actions } = useGlobalState();
  const { open: openComfirmDialog } = useComfirmDialog();

  return (
    <Wrapper>
      <p>{theme}</p>
      <button onClick={actions.toLightTheme}>light 테마로 변경</button>
      <button onClick={openComfirmDialog}>모달 오픈</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: var(--main-bg-color);
`;

export default TestState;
