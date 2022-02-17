import Service from ".";

interface AutoCompleteData {
  results: any[];
}

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
