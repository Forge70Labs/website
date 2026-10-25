/** Click Me In Pro features, in display order. Perform leads as the headline feature. */
export interface ProFeature {
  icon: "perform" | "songs" | "sets" | "gigs";
  title: string;
  description: string;
}

export const proFeatures: ProFeature[] = [
  {
    icon: "perform",
    title: "Perform",
    description: "Play a set or gig song by song, with each tempo and time signature loaded automatically.",
  },
  {
    icon: "songs",
    title: "Songs",
    description: "Keep a library of your songs with their tempo and time signature.",
  },
  {
    icon: "sets",
    title: "Sets",
    description: "Arrange songs into set lists, in running order.",
  },
  {
    icon: "gigs",
    title: "Gigs",
    description: "Plan gigs with a venue, a date, and the sets you'll play.",
  },
];
