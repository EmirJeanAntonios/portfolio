import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'tr'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix,
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(tr|en)/:path*']
};