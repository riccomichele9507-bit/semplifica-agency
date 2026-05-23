import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** iPhone-style frame wrapping an app screenshot (portrait 9:19.5). */
export default function PhoneFrame({ src, alt, className = "", priority }: PhoneFrameProps) {
  return (
    <div
      className={`relative aspect-[9/19] w-full rounded-[2.2rem] border border-border bg-[#050505] p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#050505]" />
      {/* screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-bg">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 70vw, 320px"
          className="object-cover object-top"
          priority={priority}
        />
      </div>
    </div>
  );
}
