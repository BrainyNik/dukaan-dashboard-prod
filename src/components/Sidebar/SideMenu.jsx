import { downIcon, storeProfileIcon, walletIcon } from "../icon-imports";
import "./SideMenu.css";
import SideMenuLinks from "./SideMenuLinks";

const SideMenu = () => {
  return (
    <div className="sidemenu-container">
      <div className="sidebar-links">
        <div className="sidebar-profile">
          <div class="profile-left">
            <div class="profile-img-container">
              <img src={storeProfileIcon} alt="profile-img" />
            </div>
            <p>
              Nishyan <br />
              <span>
                <a href="/">Visit Store</a>
              </span>
            </p>
          </div>

          <div class="down-arrow">
            <img src={downIcon} alt="profile-img" />
          </div>
        </div>
        <div className="sidemenu-links">
          <SideMenuLinks />
        </div>
      </div>

      <div class="sidebar-wallet">
        <img src={walletIcon} alt="" />
        <div>
          <p>Available Credits </p>
          <span>222.10</span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
