interface Props {
  children?: React.ReactNode;
}

export default function Navbar({ children }: Props): JSX.Element {
  return (
    <nav className="flex items-center h-12 p-3 text-gray-100 text-opacity-90 bg-gray-800">
      {children}
    </nav>
  );
}
