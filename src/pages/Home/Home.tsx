import { Hero, FeaturedProducts, Testimonials } from "./index";

export const Home = () => {
  return (
    <main data-testid='home' className="home">
      <Hero />
      <FeaturedProducts />
      <Testimonials />
    </main>
  )
};
