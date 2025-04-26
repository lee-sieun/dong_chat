import {
  Avatar as AvatarUI,
  AvatarFallback,
  AvatarImage,
} from "#/components/ui/avatar";

interface AvatarProps {
  src?: string;
}
export function Avatar({ src = "https://github.com/shadcn.png" }: AvatarProps) {
  return (
    <AvatarUI>
      <AvatarImage src={src} alt="character-image" className="" />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarUI>
  );
}
