type VignetteProps = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  size?: string; // e.g., '32' -> interpreted as pixels
  color?: string; // e.g., 'from-black', 'from-primary'
  className?: string;
};

const Vignette = ({
  top,
  bottom,
  left,
  right,
  size = '32',
  color = 'from-black',
  className = '',
}: VignetteProps) => {
  const sizePx = `${parseInt(size) * 4}px`; // Tailwind scale: 32 => 128px

  const directions = [
    {
      enabled: top,
      style: { top: 0, left: 0, right: 0, height: sizePx },
      gradient: 'bg-gradient-to-b',
    },
    {
      enabled: bottom,
      style: { bottom: 0, left: 0, right: 0, height: sizePx },
      gradient: 'bg-gradient-to-t',
    },
    {
      enabled: left,
      style: { left: 0, top: 0, bottom: 0, width: sizePx },
      gradient: 'bg-gradient-to-r',
    },
    {
      enabled: right,
      style: { right: 0, top: 0, bottom: 0, width: sizePx },
      gradient: 'bg-gradient-to-l',
    },
  ];

  return (
    <>
      {directions.map(
        ({ enabled, style, gradient }, index) =>
          enabled && (
            <div
              key={index}
              className={`pointer-events-none absolute ${gradient} ${color} to-transparent z-10 ${className}`}
              style={style}
            />
          )
      )}
    </>
  );
};

export default Vignette;
