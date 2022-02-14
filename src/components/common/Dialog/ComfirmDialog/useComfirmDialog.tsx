import styled from "@emotion/styled";
import { useCallback, useMemo } from "react";
import { useDialog } from "../../../../providers/Dialog";

const useComfirmDialog = () => {
  const { openDialog, closeDialog } = useDialog();

  const openTestModal = useCallback(() => {
    openDialog({
      node: (
        <DialogWrapper role="dialog">
          <h2>모달</h2>
          <p>테스트 모달입니다.</p>
          <button onClick={closeDialog}>닫기</button>
        </DialogWrapper>
      ),
    });
  }, [openDialog]);

  return useMemo(
    () => ({
      open: openTestModal,
    }),
    [openTestModal]
  );
};

const DialogWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  color: var(--main-bg-color);
`;

export default useComfirmDialog;
