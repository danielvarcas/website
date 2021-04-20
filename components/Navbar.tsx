interface Props {
  children?: React.ReactNode;
}

export default function Navbar({ children }: Props): JSX.Element {
  return (
    <nav className="flex items-center h-12 text-gray-100 text-opacity-90 bg-gradient-to-r from-indigo-600 to-light-blue-500">
      {children}
    </nav>
  );
}
