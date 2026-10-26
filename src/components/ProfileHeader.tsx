import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover ring-4 ring-glass-border shadow-[0_12px_32px_-8px_var(--shadow-tint)]"
      />
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
        <p className="text-[15px] leading-relaxed text-muted">{bio}</p>
      </div>
    </header>
  );
}
