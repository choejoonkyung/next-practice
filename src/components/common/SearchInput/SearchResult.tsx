import styled from "@emotion/styled";
import useSWR from "swr";
import { getResults } from "../../../utils/Service/getResults";

interface SearchResultProps {
  query: string;
}

function SearchResult({ query }: SearchResultProps) {
  const { data } = useSWR(
    query ? `/autocomplete?q=${query}` : null,
    () => getResults(query),
    {
      suspense: true,
    }
  );

  return (
    <SearchResultModal>
      {query === "" ? <p>검색어를 입력해주세요.</p> : null}
      {data?.results.length === 0 ? <p>검색결과가 없습니다.</p> : null}
      {data?.results.map((v) => (
        <p key={v.id}>{v.title}</p>
      ))}
    </SearchResultModal>
  );
}

const SearchResultModal = styled.div``;

export default SearchResult;
