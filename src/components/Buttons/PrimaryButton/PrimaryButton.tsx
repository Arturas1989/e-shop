import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
};

export const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <button className="primary-button">
        {children}
    </button>
  )
};
