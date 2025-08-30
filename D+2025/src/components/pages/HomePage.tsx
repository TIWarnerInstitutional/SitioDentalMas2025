import { Hero } from "../Hero";
import { AboutUs } from "../AboutUs";
import { Locations } from "../Locations";
import { Blog } from "../Blog";
import { Testimonials } from "../Testimonials";
import { PaymentOptions } from "../PaymentOptions";
import { FAQ } from "../FAQ";

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Locations />
      <Blog />
      <Testimonials />
      <PaymentOptions />
      <FAQ />
    </>
  );
}