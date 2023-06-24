function H1({ children, className }) {
    return (
      <h1 className={`${className} text-xl md:text-2xl lg:text-3xl`}>{children}</h1>
    );
  }
  
  export default H1;