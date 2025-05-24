import Button from "@components/ui/button";


const StorageChart = () => {
  const used = 512; // Example used storage in MB
  const total = 1024;
  const percentage = used / total;

  const radius = 45;
  const stroke = 5;
  const normalizedRadius = radius - stroke / 2;
  const semicircleCircumference = Math.PI * normalizedRadius;

  const strokeDashoffset = semicircleCircumference * (1 - percentage);

  return (
    <div className="flex flex-col items-center justify-center w-full flex-shrink-0 border-t border-gray-900 p-4 relative overflow-clip">
      <div className="text-base font-medium text-gray-200">Drive Storage</div>
      <div className="flex items-center justify-center relative h-32"> {/* Increased height */}
        <svg width="200" height="100" viewBox="0 0 100 50"> {/* Doubled size */}
          <path
            d="M 10,50 A 40,40 0 0,1 90,50"
            fill="transparent"
            stroke="#101828"
            strokeWidth={stroke}
          />
          <path
            d="M 10,50 A 40,40 0 0,1 90,50"
            fill="transparent"
            stroke="#e5e7eb"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={semicircleCircumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="text-center absolute top-[65%] -translate-y-1/2">
          <div className="text-xl font-semibold text-gray-200">{used} MB</div>
          <div className="text-xs text-gray-500">
            of {(total / 1024).toFixed(1)} GB used
          </div>
        </div>
      </div>
      <Button variant="outline" className="mt-4 w-full h-10 z-10">
        Upgrade Storage
      </Button>
    </div>
  );
};

export default StorageChart;
