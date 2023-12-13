import Image from "next/image";
import React from "react";

const Logo = ({ size = null, image = null, height = 0, width = 0 }) => {
  return (
    <Image
      src={image ? image : "/logo/logo192x192.png"}
      alt=""
      width={size ? size : width}
      height={size ? size : height}
    />
  );
};

export default Logo;
