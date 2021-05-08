interface Props extends React.HTMLAttributes<SVGPolygonElement> {
  height?: number;
  width?: number;
  scale?: number;
}

export default function Triangle({
  width = 75,
  height = 65,
  scale = 1,
  className,
}: Props): JSX.Element {
  const widthToScale = width * scale;
  const heightToScale = height * scale;

  const point1 = `0,${heightToScale}`;
  const point2 = `${widthToScale / 2},0`;
  const point3 = `${widthToScale},${heightToScale}`;

  return (
    <svg width={widthToScale} height={heightToScale} className={className}>
      <polygon
        points={`${point1} ${point2} ${point3}`}
        fill="none"
        stroke="black"
      />
    </svg>
  );
}
