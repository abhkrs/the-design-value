import React from "react";

export default function SectionDark({ bg, className, children }) {
  return (
    <section className="bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('/images/bglgr.png')` }}>
      <div className={`${className} 2xl:container p-6 lg:px-10 mx-auto`}>{children}</div>
    </section>
  );
}
