import Image from "next/image";

export default function BrandLockup({
  priority = false,
}: {
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src="/media/logo.png"
        width={106}
        height={63}
        priority={priority}
        alt=""
        className="original-logo"
      />
      <span className="brand-name">
        <strong lang="zh-TW">大連食品機械</strong>
        <small lang="en">DALIAN FOOD MACHINE</small>
      </span>
    </>
  );
}
