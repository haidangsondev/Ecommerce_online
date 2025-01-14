import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
