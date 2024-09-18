export type Event = {
    id: string; 
    title: string;
    subtitle: string;
    img: string;
    description: string;
    event_type: {
      id: string;
      name: string;
    };
    time: string;
    date: Date;
    location: string;
};