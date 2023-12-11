import "@mantine/core/styles.css";
import React from "react";
import UserProvier from "./context/UserContext";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import ProtectRoute from "./components/ProtectRoute";
import AppFrame from "./components/AppFrame";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <MantineProvider>
          <UserProvier>
            <ProtectRoute>
              <AppFrame>{children}</AppFrame>
            </ProtectRoute>
          </UserProvier>
        </MantineProvider>
      </body>
    </html>
  );
}
