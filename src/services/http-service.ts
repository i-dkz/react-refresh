import apiClient from "./api-client";

interface Entity {
    id: number;
}

class httpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();

    const request = apiClient.get<T[]>(this.endpoint + "/", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint + "/" + entity);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + entity.id, entity);
  }

  delete<T extends Entity>(entity: T) {
    return apiClient.delete(this.endpoint + "/" + entity.id);
  }
}

const create = (endpoint: string) => new httpService(endpoint);

export default create;
