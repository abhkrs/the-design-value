function P({ children, className }) {
    return (
      <p className={`${className} text-md lg:text-base text-gray-500`}>{children}</p>
    );
  }
  
  export default P;