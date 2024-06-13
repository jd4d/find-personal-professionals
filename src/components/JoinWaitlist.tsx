import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function JoinWaitlist({
  headerText,
  joinWaitingListUrl,
}: {
  headerText: string;
  joinWaitingListUrl: string;
}) {
  return (
    <div className="container mx-auto mb-20 text-center">
      <div
        aria-label="JoinWaitlistHeader"
        className="mb-4 text-2xl sm:mb-8 sm:text-3xl"
      >
        {headerText}
      </div>
      <Button asChild variant="destructive" size="xl" className="mt-5">
        <Link href={joinWaitingListUrl} target="_blank">
          Join the waiting list
        </Link>
      </Button>
    </div>
  );
}
