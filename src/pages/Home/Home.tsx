import { Hero, FeaturedProducts, Testimonials, Faq } from "./index";

export const Home = () => {
  return (
    <main data-testid='home' className="home">
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
};
