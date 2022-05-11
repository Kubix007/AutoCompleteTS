import http from "../HttpRequest/HttpRequest";
import { TechnologyData } from "../../shared/types";

class TechnologyDataService {
  getAll() {
    return http.get<Array<TechnologyData>>("/technologies");
  }

  get(id: string) {
    return http.get<TechnologyData>(`/technologies/${id}`);
  }

  create(data: TechnologyData) {
    return http.post<TechnologyData>("/technologies", data);
  }

  update(data: TechnologyData, id: string) {
    return http.put<any>(`/technologies/${id}`, data);
  }

  delete(id: string) {
    return http.delete<any>(`/technologies/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/technologies`);
  }
}

export default new TechnologyDataService();
