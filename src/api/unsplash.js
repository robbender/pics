import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9XvhPxp1mKzFZa1VG7uSbj1gWgdBRr1PyK7kf9-0Nz0",
  },
});
