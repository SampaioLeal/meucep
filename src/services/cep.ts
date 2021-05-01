import api from "./api";

export async function getCEPInfo(cep: string) {
  const response = await api.get(`/cep/${cep}`);

  return response.data;
}
