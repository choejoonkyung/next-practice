import { useCallback, useMemo } from "react";
import { useDialog } from "../../../../providers/Dialog";

const useComfirmDialog = () => {
  const { openDialog, closeDialog } = useDialog();

  const openTestModal = useCallback(() => {
    openDialog({
      node: (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "rgba(0,0,0,0.7)",
            zIndex: "1050",
          }}
        >
          <div
            style={{
              position: "fixed",
              zIndex: "1050",
              top: "50%",
              left: "50%",
              margin: "0",
              transform: "translate(-50%, -50%)",
              background: "#fff",
            }}
          >
            <h2>모달</h2>
            <p>테스트 모달입니다.</p>
            <button onClick={closeDialog}>닫기</button>
          </div>
        </div>
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

export default useComfirmDialog;
