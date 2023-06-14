export type SVGIcon = {
  title?: string;
  className?: string;
  onClick?: () => void;
}

export type Anime = {
  name: string;
  data: {
    images: {
      jpg: {
        image_url: string;
        large_image_url: string;
      };
    };
    genres: { name: string }[];
    score: number;
    aired: {
      from: string;
      to: string;
      string: string;
      prop: {
        from: {
          year: string;
        };
        to: {
          year: string;
        };
      };
    }
    episodes: number;
    studios: {
      name: string;
    }[];
    synopsis: string;
    rating: string;
    rank: string;
    popularity: number;
    status: string;
    trailer: {
      embed_url: string;
    }
    url: string;
    type: string;
    duration: string;
  };
};