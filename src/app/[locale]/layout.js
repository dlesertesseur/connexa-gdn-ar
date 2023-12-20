import "@mantine/core/styles.css";
import UserProvier from "../context/UserContext";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import ProtectRoute from "./components/ProtectRoute";

const locales = ["es", "en"];

export default async function RootLayout({ dashboard, signin, params }) {
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
              <ProtectRoute signin={signin}>{dashboard}</ProtectRoute>
            </NextIntlClientProvider>
          </UserProvier>
        </MantineProvider>
      </body>
    </html>
  );
}
