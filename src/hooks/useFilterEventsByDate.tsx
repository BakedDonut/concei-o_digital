import { useEffect } from "react";
import { Event } from "../@types/event";

export type FilterType = 'Hoje' | 'Essa semana' | 'Esse mês' | 'Esse ano' | 'Sempre';

type SetFilteredEvents = React.Dispatch<React.SetStateAction<Event[]>>; //Tipagem usado em useState

export function useFilterEventByDate(filterSelected: FilterType, events: Event[], setFilteredEvents: SetFilteredEvents) {
  useEffect(() => {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(startOfToday);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Sunday is the first day of the week
    const startOfMonth = new Date(startOfToday.getFullYear(), startOfToday.getMonth(), 1);
    const startOfYear = new Date(startOfToday.getFullYear(), 0, 1);

    const endOfToday = new Date(startOfToday);
    endOfToday.setDate(endOfToday.getDate() + 1); // End of today (next day start)

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 7); // End of week

    const endOfMonth = new Date(startOfMonth);
    endOfMonth.setMonth(endOfMonth.getMonth() + 1); // Start of next month
    endOfMonth.setDate(0); // Last day of the current month

    const endOfYear = new Date(startOfYear);
    endOfYear.setFullYear(endOfYear.getFullYear() + 1); // Start of next year
    endOfYear.setDate(0); // Last day of the current year

    const filtered = events.filter(event => {
      const eventDate = new Date(event.date);

      switch (filterSelected) {
        case 'Hoje':
          return eventDate >= startOfToday && eventDate < endOfToday;
        case 'Essa semana':
          return eventDate >= startOfWeek && eventDate < endOfWeek;
        case 'Esse mês':
          return eventDate >= startOfMonth && eventDate <= endOfMonth;
        case 'Esse ano':
          return eventDate >= startOfYear && eventDate <= endOfYear;
        default:
          return true; // 'Sempre' ou qualquer outro valor não filtrado
      }
    });

    setFilteredEvents(filtered);
  }, [filterSelected, events, setFilteredEvents]);
}
