import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={96}
        height={96}
        priority
        className="h-24 w-24 rounded-full object-cover"
      />
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
