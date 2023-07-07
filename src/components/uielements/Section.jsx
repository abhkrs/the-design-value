import React from "react";

export default function Section({ bg, className, children }) {
  return (
    <section className={`${bg}`}>
      <div className={`${className} 2xl:container p-6 md:px-10 lg:px-20 mx-auto`}>{children}</div>
    </section>
  );
}
