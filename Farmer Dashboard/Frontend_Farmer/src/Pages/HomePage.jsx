// Team_35-AgriAuthentic/Farmer Dashboard/Frontend_Farmer/src/Pages/HomePage.jsx
import React from 'react';
import GoogleLogin from '../Components/GoogleAuth';
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      {t("WelcomeMessage")}
      <div className="">
        <GoogleLogin />
      </div>
    </div>
  );
}

export default HomePage;