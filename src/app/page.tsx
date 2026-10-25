import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-4 py-12">
      <ProfileHeader name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
      <hr className="mx-auto w-2/3 border-zinc-300 dark:border-zinc-700" />
      <ul className="flex flex-col gap-4">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
