import { Elysia } from "elysia";
import axios from "axios";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get(`/weather/:location`, async ({ params: { location } }) => {
    const apiKey = process.env.WEATHER_API_KEY;
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
    );
    return response.data;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
