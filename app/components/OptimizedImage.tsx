import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes,
  quality = 85,
}: OptimizedImageProps) {
  // Determine if image should be lazy loaded
  const loading = priority ? 'eager' : 'lazy';

  // Default sizes for responsive images
  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={defaultSizes}
        quality={quality}
        priority={priority}
        loading={loading}
        className={className}
        style={{ objectFit: 'cover' }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={defaultSizes}
      quality={quality}
      priority={priority}
      loading={loading}
      className={className}
    />
  );
}
