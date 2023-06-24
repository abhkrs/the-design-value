function H2({ children, className }) {
    return (
      <h2 className={`${className} text-xl md:text-2xl lg:text-4xl xl:text-5xl md:leading-[30px] lg:leading-[45px] xl:leading-[60px]`}>{children}</h2>
    );
  }
  
  export default H2;