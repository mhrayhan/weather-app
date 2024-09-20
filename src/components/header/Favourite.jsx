import { useContext } from "react";
import RedHeart from "../../assets/heart-red.svg";
import Heart from "../../assets/heart.svg";
import { FavouriteContext } from "../../context";

const Favourite = ({ onShow }) => {
  const { favourites } = useContext(FavouriteContext);
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onShow}
    >
      <img src={favourites.length > 0 ? RedHeart : Heart} alt="" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default Favourite;
