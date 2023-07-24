"use client";

import { Footer } from "@common";
import { useTranslation } from "@i18n";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { setLogin } from "@redux/slice/user";
import Link from "next/link";

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng);

  const { isLoggedIn } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
      <p>isLoggedIn:{`${isLoggedIn}`}</p>
      <button
        onClick={() => {
          dispatch(setLogin(true));
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(setLogin(false));
        }}
      >
        Login out
      </button>
      <Footer lng={lng} />
    </>
  );
}
