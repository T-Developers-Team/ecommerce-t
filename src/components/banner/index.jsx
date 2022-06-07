import shirtImgUrl from "../../assets/shirts.jpg"
import pantsImgUrl from "../../assets/pants.jpg"
import shoesImgUrl from "../../assets/shoes.jpg"
import bannerImgUrl from "../../assets/banner2.jpg";
import { useEffect } from "react";
import { useState } from "react";

const BannerComponent = ({ imgSrc, title, subtitle, description }) => {

  const [img, setImg] = useState()

  useEffect(() => {
    switch (imgSrc) {
      case 'shirts':
        setImg(shirtImgUrl)
        break;
      case 'pants':
        setImg(pantsImgUrl)
        break;
      case 'shoes':
        setImg(shoesImgUrl)
        break;
      default:
        setImg(bannerImgUrl)
        break;
    }
  }, [imgSrc])

  return (
  <section className="relative text-white">
    <img
      src={img}
      alt="banner"
      className="h-96 lg:h-auto object-cover w-full object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-l from-slate-900" />
    <div className="absolute inset-0 bg-gray-500 opacity-30" />
    <header className="absolute inset-0 flex flex-col justify-center gap-2 lg:gap-0 lg:flex-row lg:items-center p-12">
      <div className={"flex flex-col font-bold gap-2 lg:gap-4 w-full xl:w-3/6"}>
        {title && (
          <h1 className={"text-6xl xl:text-8xl"}>{title}</h1>
        )}
        {subtitle && (
          <p className={"text-4xl xl:text-5xl"}>{subtitle}</p>
        )}
      </div>
      {description && (
        <p className={"w-full lg:w-4/6 font-bold hidden lg:block text-2xl xl:text-3xl"}>
          {description}
        </p>
      )}
    </header>
  </section>
)};

export default BannerComponent
