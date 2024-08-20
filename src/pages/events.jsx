import { useParams } from "react-router-dom";

const events = [
  {
    short: "JuaraGCP2024SMG",
    title: "JuaraGCP Semarang 2024",
    url: "https://bit.ly/JuaraGCPSmg",
  },
];

export const Events = () => {
  let { id } = useParams();
  const event = events.find((e) => e.short === id);
  if (!event) {
    console.error("Event not found");
    return null;
  }
  window.location.href = event.url;
  return null;
};
