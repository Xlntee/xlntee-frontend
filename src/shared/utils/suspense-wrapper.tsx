import { ReactNode, Suspense } from "react";
import PageLoader from "src/app/routing/PageLoader";

export const SuspenseWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};
