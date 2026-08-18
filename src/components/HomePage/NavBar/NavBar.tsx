import Logo from "./Logo"
import NavIcon from "./NavIcon"
import Profile from "./Profile";
import SearchBar from "./SearchBar"

const NavBar = () => {
  return (
    <div className="flex items-center w-full px-4 ">
      <div className="basis-1/4">
        <Logo />
      </div>

      <div className="basis-2/4 px-4">
        <SearchBar />
      </div>

      <div className="basis-1/4 flex justify-end gap-4">
        <NavIcon property="wishlist" />
        <NavIcon property="cart" />
        <Profile />
      </div>
    </div>
  );
};

export default NavBar