import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="w-full mx-auto flex-1">{children}</div>
    </div>
  );
};

export default Layout;
