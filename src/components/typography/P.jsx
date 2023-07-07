function P({ children, className }) {
    return (
      <p className={`${className} text-sm md:text-md lg:text-base text-gray-500`}>{children}</p>
    );
  }
  
  export default P;