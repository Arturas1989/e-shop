import { Heading } from '../../../../components';
import { TestimonialCards } from './TestimonialCards';

type TestimonialsProps = {
  name?: string;
};

export const Testimonials = ({ name }: TestimonialsProps) => {
  const testimonialData = [
    {
      id: '0',
      name: 'Tom',
      heading: 'Excelent',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sapiente laboriosam? Eligendi aliquam deleniti, inventore laudantium illo rem in officia.',
    },
    {
      id: '1',
      name: 'John',
      heading: 'Nice',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sapiente laboriosam? Eligendi aliquam deleniti, inventore laudantium illo rem in officia.',
    },
    {
      id: '2',
      name: 'Ben',
      heading: 'Best quality',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sapiente laboriosam? Eligendi aliquam deleniti, inventore laudantium illo rem in officia.',
    },
  ];
  return (
    <section className="testimonials">
      <Heading>Testimonials</Heading>
      <TestimonialCards testimonials={testimonialData} />
    </section>
  );
};
