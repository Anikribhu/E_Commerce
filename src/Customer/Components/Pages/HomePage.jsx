import React from 'react'
import MainCarousel from '../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from "../../../Data/men_kurta";
import { men_shoe } from "../../../Data/men_shoe";
import { mens_shirt } from "../../../Data/mens_shirt";
import { saree } from '../../../Data/women_saree';
import { women_dress } from '../../../Data/women_dress';


const HomePage = () => {
  return (
    <>
     <div>
        <MainCarousel/>
        <div className="py-2 space-y-1 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={men_shoe} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_shirt} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={saree} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={women_dress} sectionName={"Women's Dress"}/>
        </div>
    </div>
    </>
   
    
  )
}

export default HomePage