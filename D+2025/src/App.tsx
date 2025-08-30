import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/pages/HomePage";
import { AboutUsPage } from "./components/pages/AboutUsPage";
import { LocationsPage } from "./components/pages/LocationsPage";
import { BlogPage } from "./components/pages/BlogPage";
import { FranchisePage } from "./components/pages/FranchisePage";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("inicio");

  const renderPage = () => {
    switch (currentPage) {
      case "inicio":
        return <HomePage />;
      case "quienes-somos":
        return <AboutUsPage />;
      case "sucursales":
        return <LocationsPage />;
      case "blog":
        return <BlogPage />;
      case "franquicias":
        return <FranchisePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}