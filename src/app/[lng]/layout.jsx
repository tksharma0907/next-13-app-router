import { dir } from "i18next";
import { languages } from "@i18n/settings";

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

const RootLayout = ({ children, params: { lng } }) => {
  console.log("------RootLayout-------", lng);

  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
