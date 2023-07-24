"use client";

import withAuth from "@common/Auth";
import Link from "next/link";
import { useTranslation } from "../../i18n";

const SecondPage = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "second-page");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
    </>
  );
};

export default withAuth(SecondPage);
