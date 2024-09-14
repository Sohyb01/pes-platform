import Image from "next/image";
import Link from "next/link";

const PESLogo = () => (
  <Link href="/">
    <Image
      src="/svgs/pes-logo.svg"
      width={78}
      height={36}
      alt="Programmer's Elite School"
    />
  </Link>
);
export default PESLogo;
