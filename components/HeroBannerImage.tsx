import Image from 'next/image';

interface HeroBannerImageProps {
  src: string;
  alt: string;
}

export default function HeroBannerImage({ src, alt }: HeroBannerImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1965}
      height={801}
      sizes="100vw"
      priority
      quality={80}
      style={{ width: '100%', height: 'auto' }}
    />
  );
}