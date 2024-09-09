export type Event = {
    id: string; 
    title: string;
    subtitle: string;
    description: string;
    type_event_id: {
      id: string;
      name: string;
    };
    time: string;
    date: Date;
};