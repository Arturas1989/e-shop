import { type ReactNode } from "react";

type SecondaryButtonProps = {
  children: ReactNode;
};

export const SecondaryButton = ({ children }: SecondaryButtonProps) => {
  return (
    <button className="secondary-button">
      {children}
    </button>
  )
};
