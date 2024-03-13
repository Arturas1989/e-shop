import { type ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return (
    <h2 className="heading">{children}</h2>
  )
};
