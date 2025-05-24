import { cn } from '@lib/utils';

type GlowsProps = {
  glows: string[];
};

const Glows = ({ glows }: GlowsProps) => {
  return (
    <>
      {glows.map((className, index) => (
        <div key={index} className={cn('pointer-events-none', className)} />
      ))}
    </>
  );
};

export default Glows;
