import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, id, className }) => {
  const containerClassName = `min-h-screen max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ${
    className || ""
  }`;

  return (
    <section id={id} className={containerClassName}>
      {children}
    </section>
  );
};

export default Container;