function P({ children, className }) {
    return (
      <p className={`${className} text-sm md:text-md lg:text-base`}>{children}</p>
    );
  }
  
  export default P;