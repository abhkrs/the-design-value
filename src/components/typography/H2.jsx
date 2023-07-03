function H2({ children, className }) {
    return (
      <h2 className={`${className} text-3xl md:text-4xl xl:text-5xl font-dmsans`}>{children}</h2>
    );
  }
  
  export default H2;