"use client";
import { CldImage as CldImageDefault } from "next-cloudinary";

const CldImage = (props) => {
  return <CldImageDefault {...props} />;
};

export default CldImage;
