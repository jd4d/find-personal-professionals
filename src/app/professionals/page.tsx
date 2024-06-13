import Hero from "~/components/Hero";
import JoinWaitlist from "~/components/JoinWaitlist";
import ThreeItems from "~/components/ThreeItems";

const joinWaitingListUrl = "https://www.google.com";

export default function ProfessionalsPage() {
  return (
    <>
      <Hero
        heroText="Get new clients when you need them"
        imageUrl="/images/handshake.jpg"
        joinWaitingListUrl={joinWaitingListUrl}
        imgWidth={5351}
        imgHeight={3572}
      />
      <ThreeItems
        headerText={
          "Got openings in your books? Looking to start your own practice?"
        }
        items={[
          {
            imageUrl: "/images/profile.jpg",
            imgWidth: 3000,
            imgHeight: 2000,
            imgText: "Create your profile so we know who will be a good fit",
          },
          {
            imageUrl: "/images/schedule.jpg",
            imgWidth: 2000,
            imgHeight: 1372,
            imgText: "Share your availability for new consultations",
          },
          {
            imageUrl: "/images/new-client.jpg",
            imgWidth: 1999,
            imgHeight: 1318,
            imgText: "Pay only when new clients are booked with you",
          },
        ]}
      />
      <JoinWaitlist
        headerText="Join the waiting list to find the perfect professional"
        joinWaitingListUrl={joinWaitingListUrl}
      />
    </>
  );
}
