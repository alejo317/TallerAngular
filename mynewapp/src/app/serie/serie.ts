export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    poster: string;
    description: string;
    webpage: string;
   
    public constructor(id: number, name: string, channel: string, seasons: number, poster: string, description: string, webpage: string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.poster = poster;
      this.description = description;
      this.webpage = webpage;
    }
   }
