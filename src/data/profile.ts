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
  name: "Jayho",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "/profile.jpg",
  links: [
    { id: "github", title: "🐙 깃허브", url: "https://github.com/ipak83" },
    { id: "blog", title: "📝 블로그", url: "https://blog.naver.com/under_green" },
    { id: "email", title: "📧 이메일", url: "mailto:ipak83@gmail.com" },
  ],
};
