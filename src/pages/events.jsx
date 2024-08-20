import { useParams } from "react-router-dom";

const events = [
  {
    short: "JuaraGCP2024SMG",
    title: "JuaraGCP Semarang 2024",
    url: "https://bit.ly/JuaraGCPSmg",
  },
  // Add more events if needed
];

export const Events = () => {
  let { id } = useParams();

  // Find the event that matches the id
  const event = events.find((e) => e.short === id);

  // If no matching event is found, you can handle it here
  if (!event) {
    console.error("Event not found");
    return null; // or navigate to a "not found" page
  }

  // Redirect to the event's URL
  window.location.href = event.url;

  return null; // Return null since we're redirecting and don't need to render anything
};
