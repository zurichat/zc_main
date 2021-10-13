import checkmark from "../assets/checkmark.svg"

export const Pricing = [
  {
    className: "mobile",
    title: "Free",
    subTitle: "The quickest and easiest way to try Zuri Chat",
    amount: "$0",
    amountAnnual: "$0",
    topPricingBottomHeadText: "",
    checkMarkIcon: checkmark,
    benefits: [
      "Access to 10,000 of your team’s most recent messages",
      "10 integrations with other apps like Google Drive, Office 365 and many more",
      "1:1 voice and video calls between teammates"
    ]
  },
  {
    className: "mobile",
    title: "Enterprise",
    subTitle:
      "ZuriChat for the most demanding enterprises - all the flexibility to meet your regulatory requirementsand all the power to match your growth",
    amount: "$100",
    amountAnnual: "$1200",
    topPricingBottomHeadText: "",
    checkMarkIcon: checkmark,
    benefits: [
      "Peace of mind with enterprise-grade security and compliance, such as HIPAA support and the Enterprise Key Management add-on",
      "Large scale collaboration and alignment with support for up to 500,000 users",
      "Streamlined administration with centralized controls and customizable policies",
      "Tailored support with a designated account and customer success team"
    ]
  },

  // {
  //   className: "topPricingStart",
  //   topPricingTitle: "Free",
  //   topPricingSubtitle: "The quickest and easiest way to try Zuri Chat",
  //   topPricingAmount: "$0 USD/mo",
  //   topPricingBottomHeadText: "",
  //   topPricingTick: checkmark,
  //   topPricingTickAlt: "checkmark",
  //   topPricingText: [
  //     "Access to 10,000 of your team’s most recent messages",
  //     "10 integrations with other apps like Google Drive, Office 365 and many more",
  //     "1:1 voice and video calls between teammates"
  //   ]
  // },
  // {
  //   className: "topPricingMiddle1",
  //   topPricingTitle: "Pro",
  //   topPricingSubtitle:
  //     "More power for small teams who want better collaboration",
  //   topPricingAmount: "$6.67 USD/mo",
  //   topPricingBottomHeadText: "All the benefits of Free, and:",
  //   topPricingTick: checkmark,
  //   topPricingTickAlt: "checkmarks",
  //   topPricingText: [
  //     "The full context of your organization’s message history at your fingertips",
  //     "Timely info and actions in one place with unlimited integrations",
  //     "Face-to-face communication with group voice and video calls of up to 15 teammates",
  //     "Secure collaboration with outside organizations or guests from within Zuri Chat"
  //   ]
  // },
  // {
  //   className: "topPricingMiddle2",
  //   topPricingTitle: "Business+",
  //   topPricingSubtitle:
  //     "Scale your business, increase productivity, and keep your teams connected",
  //   topPricingAmount: "$12.50 USD/mo",
  //   topPricingBottomHeadText: "All the goodness of Pro, and:",
  //   topPricingTick: checkmark,
  //   topPricingTickAlt: "checkmarks",
  //   topPricingText: [
  //     "Advanced identity management through SAML-based SSO and real-time Active Directory sync with OneLogin, Okta and Ping Identity",
  //     "Compliance requirements met with data exports for all messages",
  //     "Around-the-clock teamwork and assistance with 99.99% guaranteed uptime and 24/7 support with a four-hour response time"
  //   ]
  // },
  // {
  //   className: "topPricingEnd",
  //   topPricingTitle: "Enterprise Grid",
  //   topPricingSubtitle:
  //     "ZuriChat for the most demanding enterprises - all the flexibility to meet your regulatory requirementsand all the power to match your growth",
  //   topPricingAmount: "$100 USD/mo",
  //   topPricingBottomHeadText: "All the greatness of business+, and:",
  //   topPricingTick: checkmark,
  //   topPricingTickAlt: "checkmarks",
  //   topPricingText: [
  //     "Peace of mind with enterprise-grade security and compliance, such as HIPAA support and the Enterprise Key Management add-on",
  //     "Large scale collaboration and alignment with support for up to 500,000 users",
  //     "Streamlined administration with centralized controls and customizable policies",
  //     "Tailored support with a designated account and customer success team"
  //   ]
  // }
]


export const features = {
  title: "Features",
  featureList: true,
  // subTitle: "Free plan is for teams with up to 10 members.",
  benefits: [
    'Access to messages',
    'Integration with other apps',
    'One to one video call',
    'Group audio calls',
    'Streamlined administration',
    'Community support',
    'Enterprise grade security and compliance'

  ]
}

export const plans = [
  {
    title: 'Free',
    className: "centerItem",
    // subTitle: "The quickest and easiest way to try Zuri Chat",
    amount: '$0',
    benefits: [
      'Unlimited',
      'Unlimited',
      'Unlimited',
      'Unlimited',
      'X',
      'X',
      'X',
    ]
  },
  { 
    title: 'Enterprise',
    className: "centerItem",
    // subTitle:
      // "ZuriChat for the most demanding enterprises - all the flexibility to meet your regulatory requirementsand all the power to match your growth",
    amount: '$100',
    benefits: [
      'Unlimited',
      'Unlimited',
      'Unlimited',
      'Unlimited',
      'available',
      'available',
      'available',
    ]
  }
]