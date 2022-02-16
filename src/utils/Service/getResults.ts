import Service from ".";
import { AutoCompleteData } from "../../../pages/api/autocomplete";

export async function getResults(query: string) {
  const { data } = await Service.getInstance().get<AutoCompleteData>(
    `/api/autocomplete`,
    {
      params: {
        q: query,
      },
    }
  );
  return data;
}
