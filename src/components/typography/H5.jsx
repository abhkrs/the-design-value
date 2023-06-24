function H5({ children, className }) {
    return (
      <h5 className={`${className} text-sm md:text-md lg:text-base`}>{children}</h5>
    );
  }
  
  export default H5;