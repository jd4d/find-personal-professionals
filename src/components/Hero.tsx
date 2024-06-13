import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero({
  imageUrl,
  imgWidth,
  imgHeight,
  heroText,
  joinWaitingListUrl,
}: {
  imageUrl: string;
  imgWidth: number;
  imgHeight: number;
  heroText: string;
  joinWaitingListUrl: string;
}) {
  return (
    <div
      aria-label="HeroContainer"
      className="container mx-auto mb-16 grid grid-cols-1 gap-10 sm:mb-32 sm:grid-cols-2 sm:gap-20"
    >
      <div aria-label="TitleWrapper" className="order-2 sm:order-1">
        <h1 className="mb-8 text-4xl sm:text-7xl">{heroText}</h1>
        <Button asChild variant="destructive" size="xl" className="mt-5">
          <Link href={joinWaitingListUrl} target="_blank">
            Join the waiting list
          </Link>
        </Button>
      </div>
      <div aria-label="HeroImageWrapper" className="order-1 sm:order-2">
        <Image
          className="rounded-2xl"
          src={imageUrl}
          alt="HeroImage"
          width={imgWidth}
          height={imgHeight}
        />
      </div>
    </div>
  );
}
