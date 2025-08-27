import Image from "next/image";
import logo from "@/public/logo.png";
// Image componenet serves optimized images in Next.js in webP format by default
// it prevents Cumulative Layout Shift (CLS) by reserving space for the image
// it also lazy loads images by default (loads them when they enter the viewport)

function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image 
        src={logo} 
        height="60" 
        width="60" 
        quality={100}
        alt="The Wild Oasis logo" 
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </a>
  );
}

export default Logo;
