export type Event = {
    id: string; 
    title: string;
    subtitle: string;
    description: string;
    event_type: {
      id: string;
      name: string;
      image: string;
    };
    time: string;
    start_date: Date;
    end_date: Date;
    location: string;
};