function P({ children, className }) {
    return (
      <p className={`${className} text-sm md:text-md lg:text-base text-gray-600`}>{children}</p>
    );
  }
  
  export default P;