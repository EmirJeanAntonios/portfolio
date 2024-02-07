import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "./navigation";

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: "en",
  localePrefix,
  pathnames,
  locales
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(tr|en)/:path*"],
};
