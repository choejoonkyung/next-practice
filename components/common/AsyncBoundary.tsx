import React, { ReactNode, SuspenseProps } from "react";
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithRender,
} from "react-error-boundary";
import SSRSafeSuspense from "./SSRSafeSuspense";

type ExceptFallbackErrorBoundaryAttributes = Omit<
  ErrorBoundaryPropsWithRender,
  "fallbackRender" | "fallback" | "FallbackComponent"
>;

type AsyncBoundaryProps = {
  children: ReactNode;
  ErrorFallback: ErrorBoundaryPropsWithRender["fallbackRender"];
  SuspenseFallback: SuspenseProps["fallback"];
} & ExceptFallbackErrorBoundaryAttributes;

function AsyncBoundary({
  children,
  ErrorFallback,
  SuspenseFallback,
  ...restErrorBoundaryAttributes
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary
      fallbackRender={ErrorFallback}
      {...restErrorBoundaryAttributes}
    >
      <SSRSafeSuspense fallback={SuspenseFallback}>{children}</SSRSafeSuspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
