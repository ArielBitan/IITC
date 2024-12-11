export const Image = () => {
  return (
    <div className="h-max">
      <picture>
        <source
          srcSet="../images/image-product-desktop.jpg"
          media="(min-width: 640px)"
        />
        <source
          srcSet="../images/image-product-mobile.jpg"
          media="(max-width: 639px)"
        />
        <img
          className="rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
          src="../images/image-product-desktop.jpg"
          alt="product"
        />
      </picture>
    </div>
  );
};
