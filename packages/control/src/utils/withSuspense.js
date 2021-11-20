import React, { Suspense } from "react";
import { GeneralLoading } from "../components";

export default function withSuspense(WrappedComponent) {
  return (
    <Suspense fallback={<GeneralLoading text="Lazy Loading..." />}>
      <WrappedComponent />
    </Suspense>
  );
}
