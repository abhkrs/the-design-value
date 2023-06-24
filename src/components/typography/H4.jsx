function H4({ children, className }) {
    return (
      <h4 className={`${className} text-md md:text-base lg:text-lg`}>{children}</h4>
    );
  }
  
  export default H4;