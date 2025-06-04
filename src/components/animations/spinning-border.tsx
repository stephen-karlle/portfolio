type SpinningBorderProps = {
  fromColor?: string
  viaColor?: string
  toColor?: string
}

const SpinningBorder = ({
  fromColor = '#8b5cf6',
  viaColor = '#ede9fe',
  toColor = '#8b5cf6',
}: SpinningBorderProps) => {
  return (
    <span
      className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
      style={{
        background: `conic-gradient(from 90deg at 50% 50%, ${fromColor} 0%, ${viaColor} 50%, ${toColor} 100%)`,
      }}
    />
  )
}

export default SpinningBorder
