import { FeaturedProducts } from "./components/FeaturedProducts/FeaturedProducts";
import { Hero } from "./components/Hero/Hero";

export const Home = () => {
  return (
    <main data-testid='home' className="home">
      <Hero />
      <FeaturedProducts />
    </main>
  )
};
