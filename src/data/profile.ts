export type Link = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
  links: Link[];
};

export const profile: Profile = {
  name: "박주연",
  bio: "Claude Code Master",
  imageUrl: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "blog", title: "블로그", url: "https://velog.io" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com" },
    { id: "youtube", title: "YouTube", url: "https://youtube.com" },
  ],
};
