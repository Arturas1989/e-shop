import {type Testimonial } from "../../../../types";
import { TestimonialCard } from "./TestimonialCard";

type TestimonialCardsProps = {
  testimonials: Testimonial[];
};

export const TestimonialCards = ({ testimonials }: TestimonialCardsProps) => {
  return (
    <div className="testimonial-cards">
      {testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  )
};
