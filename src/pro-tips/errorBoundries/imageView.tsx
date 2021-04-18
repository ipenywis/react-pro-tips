import React from "react";

export function ImageView(props: any) {
  const { src } = props;

  if (!src) throw new Error("No image src found!");

  return (
    <div>
      <span>Image Showcase</span>
      <img src={src} />
    </div>
  );
}
