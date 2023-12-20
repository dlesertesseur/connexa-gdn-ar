import AppFrame from "../components/AppFrame";

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale;

  return <AppFrame locale={locale}>{children}</AppFrame>;
}
