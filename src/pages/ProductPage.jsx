import Herosection from "../components/HeroSection/Herosection";
import { ProductGallery } from "../components/ProductPage/ProductGallery";
import { ProductInfo } from "../components/ProductPage/ProductInfo";
import { ProductTabs } from "../components/tabDetails/ProductTabs";
import { productMock } from "../store/product.mock";

export default function ProductPage() {
  return (
   <> 
     <div>
            <Herosection h={"h-[120px]"} />
          </div>
   
    <div className="flex flex-col justify-center items-center ">
        
     <div className="container p-4 sm:p-8 md:p-16">
         <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 h-auto lg:h-150 ">
        <ProductGallery {...productMock.gallery} />
        <ProductInfo {...productMock.info} />
      </div>

      <ProductTabs details={productMock.details} />
     </div>
    </div></>
  );
}
