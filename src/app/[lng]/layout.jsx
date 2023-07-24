"use client";

import { languages } from "@i18n/settings";
import { useAppSelector } from "@redux/hooks";
import { dir } from "i18next";

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

const RootLayout = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
