export type Event = {
    id: string; 
    title: string;
    subtitle: string;
    description: string;
    event_type: EventTypes;
    time: string;
    start_date: Date;
    end_date: Date;
    location: string;
};

export type EventTypes = {
  id: string,
  name: string;
  image: string;
}
