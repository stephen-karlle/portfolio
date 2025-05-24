import BeamBorder from './beam-border';

type OrbitingBeamProps = {
  layers: number;
  spacing?: number;
  delay?: number;
  width?: number;
};

const OrbitingBeam = ({
  layers,
  spacing = 3, 
  delay = 3,
}: OrbitingBeamProps) => {
  const sizeStep = 30;  // how much bigger each layer gets

  return (
    <div className="w-full h-full flex items-center justify-center absolute overflow-clip ">      
      {Array.from({ length: layers }).map((_, index) => {
   
        const baseSize = 30;
        const width = `${(index + 1) * spacing}rem`; 
        const height = `${(index + 1) * spacing}rem`;

        const size = baseSize + index * sizeStep;  
        const animationDelay = index * delay
        const duration = 3
        return (
          <div
            key={index}
            className="absolute flex items-center justify-center rounded-full"
            style={{
              width,
              height,
            }}
          >
            <BeamBorder
              initialOffset={animationDelay}
              size={size}
              duration={duration}
              className=" absolute"
              colorFrom='#111827'
              colorTo='#374151'
              reverse
            />
          </div>
        );
      })}
    </div>
  );
};
export default OrbitingBeam;