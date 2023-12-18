import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import UserProvier from "../context/UserContext";
import ProtectRoute from "./components/ProtectRoute";
import AppFrame from "./components/AppFrame";

const locales = ["es", "en"];

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale;

  if (!locales.includes(locale)) notFound();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/logo/logo192x192.png" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <MantineProvider>
          <UserProvier>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <ProtectRoute locale={locale}>
                <AppFrame locale={locale}>{children}</AppFrame>
              </ProtectRoute>
            </NextIntlClientProvider>
          </UserProvier>
        </MantineProvider>
      </body>
    </html>
  );
}
