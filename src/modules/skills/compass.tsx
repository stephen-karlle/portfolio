import React from 'react'

const Compass = () => {
  const cx = 1570
  const cy = 1570

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 3140 3140"
      fill="none"
      className="w-full h-full animate-spin-slow"
    >
      <circle
        cx={cx}
        cy={cy}
        r={1360}
        stroke="white"
        strokeWidth={4}
        strokeDasharray="1 20"
        fill="none"
      />
      <circle
        cx={cx}
        cy={cy}
        r={1390}
        stroke="white"
        fill="none"
      />
      {/* <circle
        cx={cx}
        cy={cy}
        r={1390}
        stroke="#6b7280"
        strokeWidth={15}
        strokeDasharray="1 10"
        fill="none"
      /> */}
      <circle
        cx={cx}
        cy={cy}
        r={1460}
        stroke="white"
        strokeWidth={80}
        strokeDasharray="1 100"
        fill="none"
      />
      <circle
        cx={cx}
        cy={cy}
        r={1460}
        stroke="#6b7280"
        strokeWidth={30}
        strokeDasharray="1 10"
        fill="none"
      />
    </svg>
  )
}

export default Compass
