import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-orange-500 py-10">
      <div className="container max-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          AdminDashboard
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4 ">
          <span>{t("footer.privacy")}</span>
          <span>{t("footer.terms")}</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
