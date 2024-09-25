import { useEffect } from "react";
import { Event } from "../@types/event";

export type FilterType = 'Hoje' | 'Essa semana' | 'Esse mês' | 'Esse ano' | 'Sempre';

type SetFilteredEvents = React.Dispatch<React.SetStateAction<Event[]>>;

export function useFilterEventByDate(filterSelected: FilterType, events: Event[], setFilteredEvents: SetFilteredEvents) {
  useEffect(() => {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfToday = new Date(startOfToday);
    endOfToday.setDate(endOfToday.getDate() + 1); // End of today

    const startOfWeek = new Date(startOfToday);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Sunday is the first day of the week
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 7); // End of week

    const startOfMonth = new Date(startOfToday.getFullYear(), startOfToday.getMonth(), 1);
    const endOfMonth = new Date(startOfMonth);
    endOfMonth.setMonth(endOfMonth.getMonth() + 1); // Start of next month
    endOfMonth.setDate(0); // Last day of the current month

    const startOfYear = new Date(startOfToday.getFullYear(), 0, 1);
    const endOfYear = new Date(startOfYear);
    endOfYear.setFullYear(endOfYear.getFullYear() + 1); // Start of next year
    endOfYear.setDate(0); // Last day of the current year

    const filtered = events.filter(event => {
      const eventStartDate = new Date(event.start_date);
      const eventEndDate = new Date(event.end_date);

      switch (filterSelected) {
        case 'Hoje':
          return eventStartDate >= startOfToday && eventEndDate < endOfToday;
        case 'Essa semana':
          return eventStartDate < endOfWeek && eventEndDate >= startOfWeek;
        case 'Esse mês':
          return eventStartDate <= endOfMonth && eventEndDate >= startOfMonth;
        case 'Esse ano':
          return eventStartDate <= endOfYear && eventEndDate >= startOfYear;
        default:
          return true; // 'Sempre' ou qualquer outro valor não filtrado
      }
    });

    setFilteredEvents(filtered);
  }, [filterSelected, events, setFilteredEvents]);
}
