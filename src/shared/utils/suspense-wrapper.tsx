import { ReactNode, Suspense } from "react";
import PageLoader from "src/app/routing/PageLoader";

export const SuspenseWrapper = ({
  children,
  loaderComponent
}: {
  children: ReactNode;
  loaderComponent?: ReactNode;
}): JSX.Element => {
  return <Suspense fallback={loaderComponent || <PageLoader />}>{children}</Suspense>;
};
