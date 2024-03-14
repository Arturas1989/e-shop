import { Heading } from "../../../../components";
import { Question } from "./Question";

export const Faq = () => {
  return (
    <section className="faq">
      <Heading>Frequently asked questions</Heading>
      <div className="questions">
        <Question>Why should I use e-shop?</Question>
        <Question>Can I access my e-shop on mobile?</Question>
        <Question>Do you offer refunds?</Question>
        <Question>Do you support International payments?</Question>
      </div>
    </section>
  )
};
