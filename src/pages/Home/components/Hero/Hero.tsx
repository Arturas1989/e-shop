import { PrimaryButton } from '../../../../components';
import Logo from './hero.jpg';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="column">
        <h1>The cheapest products in the market</h1>
        <p>
          e-shop is the world's most popular and authoritative source for
          the highest variety of products. Find ratings and access to the newest products.
        </p>
        <PrimaryButton>
          <a href="/products">Explore products</a>
        </PrimaryButton>
      </div>
      <div className="column">
        <img src={Logo} alt="hero" />
      </div>
    </section>
  );
};
