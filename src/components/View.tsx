import React from "react";

function View({ id }: { id: string }) {
  return <p>{id}</p>;
}

export default React.memo(View);
