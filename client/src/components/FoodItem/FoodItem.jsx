import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { GoPlus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  console.log("Cart for ID:", id, "Quantity:", cartItems[id]); // Debugging

  return (
    <div className="food-item w-[100%] m-auto shadow-custom">
      <div className="food-item-image-container relative">
        <img
          className="food-item-image w-[100%] rounded-t-[15px] rounded-l-[15px]"
          src={image}
          alt=""
        />
        {!cartItems[id] || cartItems[id] === 0 ? (
          <GoPlus
            onClick={() => addToCart(id)}
            className="text-green-500 mt-3 absolute bottom-4 right-3 cursor-pointer bg-green-50 w-[30px] ml-2 h-[30px] p-[2px] rounded-full"
          />
        ) : (
          <div className="food-item-counter flex items-center gap-[10px] p-[6px] bg-white mt-3 absolute bottom-3 rounded-full right-3">
            <BiMinus
              onClick={() => removeFromCart(id)}
              className="text-red-500 bg-red-50 w-[30px] h-[30px] p-[2px] rounded-full"
            />
            <p className="">{cartItems[id]}</p>
            <GoPlus
              onClick={() => addToCart(id)}
              className="text-green-500 bg-green-50 w-[30px] h-[30px] p-[2px] rounded-full"
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-5">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
          <p className="text-xl font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description text-[#676767]">{description}</p>
        <p className="food-item-price text-[#5ae053] text-xl font-medium my-[10px]">
          ₹{(price * 84.4).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
