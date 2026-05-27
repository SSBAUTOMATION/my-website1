export type NavItem = {
  label: string;
  path: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export const siteContent = {
  brand: {
    companyName: "SSB Automation",
    foundedYear: 2022,
    tagline: "Engineering Smart Automation",
    oneLineProfile:
      "SSB Automation delivers smart industrial automation solutions through customized SPM manufacturing, robotics, PLC/HMI programming, and electrical panel integration.",
  },
  seo: {
    title: "SSB Automation | Industrial Automation Solutions",
    description:
      "SSB Automation is an industrial automation company providing customized SPM manufacturing, robot installation, PLC & HMI programming, and electrical panel manufacturing. Trusted automation partner since 2022.",
    keywords:
      "SSB Automation, ssbautomation, Industrial Automation Company, SPM Manufacturing, PLC Programming, HMI Programming, Robot Installation, Electrical Panel Manufacturing, Industrial Automation Solutions, Customized Automation Systems, Industrial Robotics, Control Panel Manufacturer",
  },
  nav: [
    { label: "Home", path: "/home" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Products & Services", path: "/projects" },
    { label: "Our Clients", path: "/clients" },
    { label: "Contact Us", path: "/contact" },
  ] as NavItem[],
  hero: {
    heading: "SSB AUTOMATION<br/><span class='hero-muted'>VERSATILE SOLUTIONS</span>",
    subheading:
      "Special Purpose Machine Manufacturing | Robot Installation | PLC & HMI Programming | Electrical Panels",
    primaryButton: "Get a Quote",
    secondaryButton: "Contact Us",
  },
  welcome: {
    title: "Welcome to SSB Automation",
    body: "At SSB Automation, we deliver intelligent industrial automation solutions tailored to modern manufacturing needs. Since 2022, we have been helping industries improve productivity through advanced engineering, robotic integration, customized SPM machines, and control systems.",
    values:
      "We believe in quality, precision, innovation, and customer satisfaction.",
  },
  labels: {
    home: {
      highlightsHeading: "Company Highlights",
      coreServicesHeading: "Core Services",
    },
    about: {
      visionHeading: "Vision",
      missionHeading: "Mission",
    },
    services: {
      pageTitle: "Our Services",
      whyChooseHeading: "Why SSB Automation?",
    },
    clients: {
      pageTitle: "Our Clients",
      intro:
        "Trusted automation and industrial solutions partner for leading manufacturing and engineering companies.",
      ctaTitle: "Building Long-Term Industrial Partnerships",
      ctaBody:
        "We provide reliable industrial automation, PLC programming, drive integration, machine communication, and control solutions tailored for modern manufacturing industries.",
    },
    contact: {
      pageTitle: "Contact Us",
      intro:
        "Get in touch with {{companyName}} for innovative industrial automation solutions tailored to your business needs.",
      servicesHeading: "Services",
      reachUsHeading: "Reach Us",
      whatsappButton: "WhatsApp Us",
      callButton: "Call Now",
      serviceBullets: [
        "SPM Manufacturing",
        "Robot Installation",
        "PLC/HMI Programming",
        "Electrical Panel Solutions",
      ],
    },
    placeholderPages: {
      projectsTitle: "Products & Services",
      defaultDescription:
        "This page is ready for your project-specific content and case studies.",
    },
  },
  about: {
    title: "About SSB Automation",
    intro:
      "Founded in 2022, SSB Automation is a fast-growing industrial automation company specializing in Special Purpose Machine manufacturing, robot installation, PLC & HMI programming, and electrical panel solutions.",
    detail:
      "From concept design to installation and support, we are committed to quality, innovation, and customer satisfaction.",
    vision:
      "To become a leading automation solutions provider by delivering innovative, reliable, and intelligent industrial systems that empower industries to achieve higher productivity and efficiency.",
    mission: [
      "To manufacture high-quality customized SPM machines.",
      "To deliver advanced robotic automation solutions.",
      "To provide reliable PLC and HMI programming services.",
      "To design safe and efficient electrical control panels.",
      "To build long-term customer relationships through quality and service.",
      "To continuously innovate with modern industrial technologies.",
    ],
  },
  services: [
    {
      title: "SPM Manufacturing",
      description:
        "We design and manufacture customized Special Purpose Machines for industrial automation applications focused on performance, accuracy, and productivity.",
    },
    {
      title: "Robot Installation",
      description:
        "We provide industrial robot installation and integration services for efficient, safe, and precise manufacturing.",
    },
    {
      title: "PLC & HMI Programming",
      description:
        "Our experts develop advanced PLC and HMI programs for seamless machine automation, monitoring, and control.",
    },
    {
      title: "Electrical Panel Manufacturing",
      description:
        "We design and manufacture high-quality electrical control panels with reliable safety standards.",
    },
    {
      title: "Automation System Integration",
      description:
        "Complete automation solutions including machine integration, wiring, control systems, and commissioning support.",
    },
  ] as ServiceItem[],
  whyChoose: [
    "Customized Automation Solutions",
    "Experienced Technical Team",
    "Quality-Focused Engineering",
    "Reliable Support & Service",
    "Cost-Effective Systems",
    "Timely Project Delivery",
    "Advanced Industrial Technologies",
  ],
  highlights: [
    "Established in 2022",
    "Industrial Automation Experts",
    "Customized SPM Solutions",
    "Advanced Robot Integration",
    "PLC/HMI Specialists",
    "End-to-End Automation Support",
  ],
  contact: {
    phone: "+91 79754 20342",
    email: "ssbrobotization@gmail.com",
    location:
      "<strong>Office 1:</strong> Kamarajar Nagar, Viralimalai, Pudukottai (DT), Tamil Nadu 621316<br /><strong>Office 2:</strong> Chandapura, Anekal Road, Marasur Gate, Bengaluru 562106, Karnataka",
    quickActions: {
      whatsapp: "+91 79754 20342",
      call: "+91 79754 20342",
      whatsappMessage:
        "Hi SSB Automation, I need a quote for industrial automation solutions.",
    },
  },
  socialBio:
    "Industrial Automation Company | SPM Manufacturing | Robot Installation | PLC & HMI Programming | Electrical Panels | Smart Engineering Solutions",
  brochure: {
    title: "SSB Automation",
    subtitle: "Industrial Automation Solutions",
    serviceLine:
      "SPM Manufacturing | Robot Installation | PLC & HMI Programming | Electrical Panels",
    commitment: "Quality | Innovation | Reliability | Customer Satisfaction",
  },
};
