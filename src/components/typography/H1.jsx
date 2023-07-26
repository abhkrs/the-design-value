function H1({ children, className }) {
    return (
      <h1 className={`${className} text-3xl md:text-4xl lg:text-5xl font-dmsans`}>{children}</h1>
    );
  }
  
  export default H1;