import api from "./api";

export async function getCEPInfo(cep: string) {
  const response = await api.get(`/cep/${cep}`);

  return response.data;
}

export async function getHistory() {
  const response = await api.get(`/history`);

  return response.data;
}
