import {Pathnames, createLocalizedPathnamesNavigation, createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['en', 'tr'] as const;
export const localePrefix = 'always'; // Default

export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
 
  // If locales use different paths, you can
  // specify each external path per locale.
  '/about-me': {
    en: '/about-me',
    tr: '/hakkimda'
  },
  "/experiences" : {
    en: '/experiences',
    tr: '/tecrubelerim'
  }

} satisfies Pathnames<typeof locales>;
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
createLocalizedPathnamesNavigation({locales, localePrefix,pathnames});