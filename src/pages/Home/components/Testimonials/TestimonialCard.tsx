import { Testimonial } from "../../../../types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const {heading, name, description} = testimonial;
  return (
    <div className="testimonial-card">
      <div className="content-container">
        <h3>{heading}</h3>
        <p className="description">{description}</p>
        <div className="user">
          <i className="bi bi-person-circle"></i>
          <p className="name">{name}</p>
        </div>
      </div>
    </div>
  )
};
