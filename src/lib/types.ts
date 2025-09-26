export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type Subject = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    hint: string;
  };
  path: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    hint: string;
  };
  path: string;
  price?: string;
};

export type DashboardProgress = {
  subject: string;
  progress: number;
};

export type BookmarkedNote = {
  id: string;
  title: string;
  subject: string;
};
