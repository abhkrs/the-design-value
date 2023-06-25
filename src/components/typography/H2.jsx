function H2({ children, className }) {
    return (
      <h2 className={`${className} text-xl md:text-2xl lg:text-4xl xl:text-5xl`}>{children}</h2>
    );
  }
  
  export default H2;