import React from "react";
import { MyErrorBoundary } from "./errorBoundary";
import { ImageView } from "./imageView";

export function ErrorBoundaryDemo() {
  return (
    <div>
      <h1>Unsplash App</h1>
      <MyErrorBoundary>
        <ImageView />
      </MyErrorBoundary>
    </div>
  );
}
