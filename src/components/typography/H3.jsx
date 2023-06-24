function H3({ children, className }) {
    return (
      <h3 className={`${className} text-base md:text-lg lg:text-xl`}>{children}</h3>
    );
  }
  
  export default H3;