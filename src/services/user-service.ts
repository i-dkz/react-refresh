import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class userService {
  getAllUsers() {
    const controller = new AbortController();

    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  createUsers(newUser: User) {
    return apiClient.post("/users/" + newUser);
    
  }

  updateUsers(updatedUser: User, user: User) {
    return apiClient.patch("/users/" + user.id, updatedUser);

  }

  deleteUsers(id: number) {
    return apiClient.delete("/users/" + id);

  }
}

export default new userService();
