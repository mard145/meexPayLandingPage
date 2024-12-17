import { IconLemon2 } from "@tabler/icons-react";
import logo from "@assets/images/horizontal-white.png";
import Image from "next/image";

// export default function Logo() {
//   return (
//     <section className="flex gap-2 items-center cursor-pointer ">
//       <img src={logo.src} />
//       <span className="text-white font-semibold font-inter text-2xl">
//         Meexpay
//       </span>
//     </section>
//   );
// }

export default function Logo() {
  return (
    <section className="relative w-[10rem]">
      <Image src={logo} alt="Meexpay" />
    </section>
  );
}
