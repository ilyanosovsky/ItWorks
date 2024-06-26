import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="container mx-auto flex-1 py-10 flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
          <h1 className="text-5xl font-bold tracking-tight text-orange-600">
            {t("home.title")}
          </h1>
          <span className="text-xl">{t("home.description")}</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
