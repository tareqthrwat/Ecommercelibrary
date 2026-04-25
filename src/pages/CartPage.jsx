import CartTable from "../components/CartPage/CartTable";
import Herosection from "../components/HeroSection/Herosection";
import PaymentSummary from "../components/PaymentSummary/PaymentSummary";

export default function CartPage() {
  return (
    <>
      <div>
        <Herosection h={"h-[120px]"} />
      </div>
     <div className="flex justify-center items-center px-4">
      <div className="container flex flex-col justify-center items-center gap-4">
         <CartTable />
      <PaymentSummary
        subtotal={120}
        tax={4}
        shipping="Free Delivery"
        total={124}
      />
      </div>
     </div>
    </>
  );
}
