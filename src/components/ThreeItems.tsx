import Image from "next/image";
import { Card, CardHeader } from "./ui/card";

type Item = {
  imageUrl: string;
  imgWidth: number;
  imgHeight: number;
  imgText: string;
};

export default function Hero({
  headerText,
  items,
}: {
  headerText: string;
  items: Item[];
}) {
  return (
    <div
      aria-label="ThreeItemContainer"
      className="container mx-auto mb-16 sm:mb-32"
    >
      <div
        aria-label="ThreeItemHeader"
        className="mb-8 text-2xl sm:mb-12 sm:text-3xl"
      >
        {headerText}
      </div>
      <div
        aria-label="ThreeItemRow"
        className="grid grid-cols-1 gap-10 sm:grid-cols-3"
      >
        {items.map(({ imageUrl, imgText, imgWidth, imgHeight }) => (
          <>
            <Card aria-label="Item" key={imgText} className="">
              <Image
                className=""
                src={imageUrl}
                alt={imgText}
                width={imgWidth}
                height={imgHeight}
              />
              <CardHeader>{imgText}</CardHeader>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}
