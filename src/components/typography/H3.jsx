function H3({ children, className }) {
    return (
      <h3 className={`${className} text-base md:text-lg lg:text-xl font-dmsans`}>{children}</h3>
    );
  }
  
  export default H3;