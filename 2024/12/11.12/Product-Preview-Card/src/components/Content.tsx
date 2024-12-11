export const Content = () => {
  return (
    <div className="p-6 bg-white flex flex-col gap-4 sm:p-10 sm:w-2/3 sm:justify-between ">
      <div className="font-montserrat text-xs sm:text-lg uppercase tracking-extra-widest text-dark-grayish-blue">
        Perfume
      </div>
      <div className="text-4xl font-fraunces font-bold sm:text-6xl sm:mb-6">
        Gabrielle Essence Eau De Parfum
      </div>
      <div className="font-montserrat text-l text-dark-grayish-blue sm:text-2xl">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </div>

      <div className="flex gap-10 items-center mt-5">
        <span className="font-fraunces text-4xl text-dark-cyan">$149.99</span>
        <span className="text-l font-montserrat line-through text-dark-grayish-blue">
          $169.99
        </span>
      </div>
      <button
        className="bg-dark-cyan flex items-center justify-center mt-6 sm:py-6 sm:text-xl
        py-3.5 rounded-lg gap-3 text-white font-montserrat"
      >
        <img src="../images/icon-cart.svg" alt="cart-icon" />
        Add to Cart
      </button>
    </div>
  );
};
