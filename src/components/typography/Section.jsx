import React from "react";

export default function Section({ bg, className, children }) {
  return (
    <section className={`${bg}`}>
      <div className={`${className} 2xl:container p-6 lg:px-10 mx-auto`}>{children}</div>
    </section>
  );
}
