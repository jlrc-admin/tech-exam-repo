export default function NavBarComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <nav className="flex justify-between items-center p-4 bg-purple-600 text-white">
      {children}
    </nav>
  );
}
