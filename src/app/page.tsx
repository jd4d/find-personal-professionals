import Hero from "~/components/Hero";
import JoinWaitlist from "~/components/JoinWaitlist";
import ThreeItems from "~/components/ThreeItems";

const joinWaitingListUrl = "https://www.google.com";

export default function HomePage() {
  return (
    <>
      <Hero
        heroText="Book a personal professional who fits your needs"
        imageUrl="/images/professionals.jpg"
        joinWaitingListUrl={joinWaitingListUrl}
        imgWidth={6720}
        imgHeight={4480}
      />
      <ThreeItems
        headerText={
          "Having troubles booking the right accountant, financial advisor or lawyer?"
        }
        items={[
          {
            imageUrl: "/images/survey.jpg",
            imgWidth: 7360,
            imgHeight: 4912,
            imgText:
              "Fill out a quick survey so we understand your personal needs",
          },
          {
            imageUrl: "/images/three-options.jpg",
            imgWidth: 5663,
            imgHeight: 3308,
            imgText: "We'll show you 3 matches with our choice for you",
          },
          {
            imageUrl: "/images/reviews.jpg",
            imgWidth: 7900,
            imgHeight: 5266,
            imgText:
              "Read their reviews and schedule with them in just 5 minutes!",
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
