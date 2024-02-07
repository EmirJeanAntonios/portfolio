'use client';
 
import { Link } from '@/navigation';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import classNames from "classnames";

 
export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
 
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
    className={classNames(
        isActive && "font-bold lg:text-sky-500 transition"
    )}
      {...rest}
    />
  );
}