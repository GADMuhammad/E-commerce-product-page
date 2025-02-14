import { useState } from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductImages from "./components/ProductImages";

function App() {
  const [amountOfProductInCart, setAmountOfProductInCart] = useState(
    JSON.parse(localStorage.getItem("amountOfProductInCart")) || 0,
  );

  const changeAmount = (number) => {
    setAmountOfProductInCart((prev) => (number ? prev + number : 0));

    localStorage.setItem(
      "amountOfProductInCart",
      JSON.stringify(number ? amountOfProductInCart + number : 0),
    );
  };

  return (
    <>
      <Header changeAmount={changeAmount} />
      <main className="flex justify-evenly py-20 max-second:flex-col max-second:py-0">
        <ProductImages />
        <ProductDetails
          amountOfProductInCart={amountOfProductInCart}
          changeAmount={changeAmount}
        />
      </main>
    </>
  );
}

export default App;
