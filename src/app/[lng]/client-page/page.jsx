import ClientPage from "@common/ClientComponent";
import { SeoData } from "@i18n/locales/en/seoData";

export const metadata = {
  title: SeoData?.title,
};

const Page = ({ params: { lng } }) => {
  return <ClientPage lng={lng} />;
};

export default Page;
