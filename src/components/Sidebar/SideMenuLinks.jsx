import {
  analyticsIcon,
  audienceIcon,
  AppearanceIcon,
  deliveryIcon,
  discountsIcon,
  HomeIcon,
  marketingIcon,
  orderIcon,
  paymentsIcon,
  pluginsIcon,
  toolsIcon,
  productsIcon,
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
    icon: productsIcon,
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
    className: "payment",
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
            <div className={`sidebar-sublinks ${item.className}`}>
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
