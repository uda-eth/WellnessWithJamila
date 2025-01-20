
import { useQuery } from "@tanstack/react-query";

const CALENDAR_API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

export function useGoogleCalendar() {
  return useQuery({
    queryKey: [`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${CALENDAR_API_KEY}`],
    enabled: !!CALENDAR_API_KEY && !!CALENDAR_ID,
  });
}
