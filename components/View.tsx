import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function View() {
  const { data } = useSWR("/api/swr", fetcher, {
    suspense: true,
  });

  return <>{data.name}</>;
}

export default View;
