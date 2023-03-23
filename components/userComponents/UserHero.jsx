import Image from "next/image";

import Avatar from "../Avatar";

export default function UserHero({ id, name, coverImage, email }) {
  return (
    <div>
      <div className="relative h-44 bg-neutral-700">
        {coverImage && (
          <Image
            src={coverImage}
            fill
            priority
            alt="Cover Image"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={id} isLarge hasBorder />
        </div>
      </div>
    </div>
  );
}
