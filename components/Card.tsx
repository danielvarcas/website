interface Props {
  title?: string;
  children?: React.ReactNode;
}

export default function Card({ title, children }: Props): JSX.Element {
  return (
    <div className="border-2 border-gray-900 rounded p-3 shadow-sm hover:shadow-md">
      <h2 className="text-xl font-medium">{title}</h2>
      {children}
    </div>
  );
}
