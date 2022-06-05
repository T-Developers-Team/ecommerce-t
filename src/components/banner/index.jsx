const BannerComponent = ({ imgSrc, title, subtitle, description }) => (
  <section className="relative text-white">
    <img
      src={imgSrc}
      alt="banner"
      className="h-96 lg:h-auto object-cover w-full object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-l from-slate-900" />
    <div className="absolute inset-0 bg-gray-500 opacity-30" />
    <header className="absolute inset-0 flex flex-col justify-center gap-2 lg:gap-0 lg:flex-row lg:items-center p-12">
      <div className={"flex flex-col font-bold gap-2 lg:gap-4 w-full lg:w-3/6"}>
        <h1 className={"text-6xl xl:text-8xl"}>{title}</h1>
        <p className={"text-4xl xl:text-5xl"}>{subtitle}</p>
      </div>
      <p
        className={
          "w-full lg:w-4/6 font-bold hidden lg:block text-2xl xl:text-3xl"
        }
      >
        {description}
      </p>
    </header>
  </section>
);

export default BannerComponent
