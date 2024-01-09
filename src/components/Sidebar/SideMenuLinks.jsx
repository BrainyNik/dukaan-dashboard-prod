import {
  analyticsIcon,
  audienceIcon,
  AppearanceIcon,
  chatIcon,
  deliveryIcon,
  discountsIcon,
  downArrowIcon,
  downIcon,
  HelpIcon,
  HomeIcon,
  marketingIcon,
  orderIcon,
  paymentsIcon,
  pluginsIcon,
  searchIcon,
  storeProfileIcon,
  toolsIcon,
} from "../icon-imports";
const links = [
  {
    icon: HomeIcon,
    title: "Home",
  },
  {
    icon: orderIcon,
    title: "Orders",
  },
  {
    icon: deliveryIcon,
    title: "Products",
  },
  {
    icon: deliveryIcon,
    title: "Delivery",
  },
  {
    icon: marketingIcon,
    title: "Marketing ",
  },
  {
    icon: analyticsIcon,
    title: "Analytics",
  },
  {
    icon: paymentsIcon,
    title: "Payments",
    className:"payment",
  },
  {
    icon: toolsIcon,
    title: "Tools",
  },
  {
    icon: discountsIcon,
    title: "Discount",
  },
  {
    icon: audienceIcon,
    title: "Audience",
  },
  {
    icon: AppearanceIcon,
    title: "Appearance",
  },
  {
      icon: pluginsIcon,
      title: "Plugins",
  },
];

const SideMenuLinks = () => {
  return (
    <div>
      {links.map((item, index) => {
        return (
          <div key={index}>
            <div  className={`sidebar-sublinks ${item.className}`}>
              <img src={item.icon} alt={item.title} />
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SideMenuLinks;
