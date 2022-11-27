import { checkmark } from "./assets";

export const pricing_keys = [
  {
    className: "mobile",
    title: "pricingcard.title.free",
    subTitle: "pricingcard.subtitle.free",
    amount: "$0",
    amountAnnual: "$0",
    topPricingBottomHeadText: "",
    checkMarkIcon: checkmark,
    benefits: [
      "benefits.mobilefree.access",
      "benefits.mobilefree.integration",
      "benefits.mobilefree.video"
    ]
  },
  {
    className: "mobile",
    title: "pricingcard.title.enterprise",
    subTitle: "pricingcard.subtitle.enterprise",
    amount: "$100",
    amountAnnual: "$1200",
    topPricingBottomHeadText: "",
    checkMarkIcon: checkmark,
    benefits: [
      "benefits.mobileenterprise.peace",
      "benefits.mobileenterprise.scale",
      "benefits.mobileenterprise.admin",
      "benefits.mobileenterprise.support"
    ]
  }
];

export const pricing_features = {
  title: "pricingcard.title.features",
  featureList: true,
  // subTitle: "Free plan is for teams with up to 10 members.",
  benefits: [
    "benefits.desktopfeatures.access",
    "benefits.desktopfeatures.integration",
    "benefits.desktopfeatures.video",
    "benefits.desktopfeatures.audio",
    "benefits.desktopfeatures.admin",
    "benefits.desktopfeatures.support",
    "benefits.desktopfeatures.security"
  ]
};
export const pricing_plans = [
  {
    title: "pricingcard.title.free",
    className: "centerItem",
    // subTitle: "The quickest and easiest way to try Zuri Chat",
    amount: "$0",
    benefits: [
      "benefits.desktop.unlimited",
      "benefits.desktop.unlimited",
      "benefits.desktop.unlimited",
      "benefits.desktop.unlimited",
      "X",
      "X",
      "X"
    ]
  },
  {
    title: "pricingcard.title.enterprise",
    className: "centerItem",
    toggle: "Toggle",
    // subTitle:
    // "ZuriChat for the most demanding enterprises - all the flexibility to meet your regulatory requirementsand all the power to match your growth",
    amount: "$100",
    benefits: [
      "benefits.desktop.unlimited",
      "benefits.desktop.unlimited",
      "benefits.desktop.unlimited",
      "benefits.desktop.unlimited",
      "benefits.desktopenterprise.available",
      "benefits.desktopenterprise.available",
      "benefits.desktopenterprise.available"
    ]
  }
];
