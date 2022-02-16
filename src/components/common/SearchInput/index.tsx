import styled from "@emotion/styled";
import { useState } from "react";
import { debounce } from "throttle-debounce";
import SSRSafeSuspense from "../../utils/SSRSafeSuspense";
import SearchResult from "./SearchResult";

function SearchInput() {
  const [openResult, setOpenResult] = useState(false);
  const [query, setQuery] = useState("");

  const inputText = debounce(
    300,
    async ({ target }: React.ChangeEvent<HTMLInputElement>) =>
      setQuery(target.value)
  );

  return (
    <div>
      <Input
        type="text"
        name="search"
        onChange={inputText}
        onFocus={() => {
          setOpenResult(true);
        }}
        onBlur={() => {
          setOpenResult(false);
        }}
        autoComplete="off"
        placeholder="무엇이든 찾아보세요"
      />
      {openResult ? (
        <SSRSafeSuspense fallback={<p>불러오고 있습니다.</p>}>
          <SearchResult query={query} />
        </SSRSafeSuspense>
      ) : null}
    </div>
  );
}

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #b0b8c1;
  caret-color: #3182f6;
  &:focus {
    border-bottom: 1px solid #3182f6;
  }
`;

export default SearchInput;
