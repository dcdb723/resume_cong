import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "CONG DENG",
  contact: {
    address: "Adelaide, SA 5082",
    phone: "0408716573",
    email: "iceage723@gmail.com"
  },
  summary: "Proactive product manager with 7+ years product management experience in small start-up & medium business environments. Effective driver of product development lifecycle from concept to delivery. Communicative and collaborative with proven history of improving business operations to support corporate growth and revenue. Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.",
  skills: [
    {
      category: "Product & Management",
      items: ["Requirements Gathering", "Project Planning", "Product Lifecycle Management", "Project Management", "Product Strategy"]
    },
    {
      category: "Technical",
      items: ["Vibe Coding", "Web Development", "Python", "Java", "Microsoft Office Suite"]
    }
  ],
  experience: [
    {
      id: "qed",
      role: "Business Analyst",
      company: "QED Technologies",
      location: "Adelaide, SA",
      period: "02/2024 to 2025",
      description: [
        "Collaborated closely with product managers, designers, and engineering teams to translate business needs into clear user flows, wireframes, and technical specifications.",
        "Designed and structured application databases (e.g., Supabase / PostgreSQL), ensuring scalable schema design aligned with long-term product vision.",
        "Built early-stage app features using tools such as Cursor AI, Expo, and no-code/low-code platforms.",
        "Conducted requirement analysis, identified gaps, and proposed solutions to improve product usability and development efficiency."
      ],
      project: "Fitness App",
      projectDesc: "A cross-platform fitness app featuring BMI tracking, meal logging and sharing, period tracking, and a library of workout videos.",
      imageUrls: [
        "/images/fitness-app/image1.png",
        "/images/fitness-app/image2.png",
        "/images/fitness-app/image3.png",
        "/images/fitness-app/image4.png",
        "/images/fitness-app/image5.png"
      ],
      keywords: ["Fitness", "Mobile App", "Health Tech", "Adelaide"]
    },
    {
      id: "yalla",
      role: "Product Manager",
      company: "Yalla Group Hangzhou",
      location: "China",
      period: "04/2022 to 06/2023",
      description: [
        "Actively participated in team meetings to share knowledge, exchange ideas, address challenges, and collaborate on potential solutions.",
        "Developed high-quality documentation to support training efforts.",
        "Improved business processes by analyzing current practices and recommending optimization strategies.",
        "Interacted with internal customers to understand business needs and translate into requirements."
      ],
      project: "YallaChat",
      projectDesc: "An instant messaging platform primarily targeting users in the Middle East. Facilitating simpler communication similar to WeChat and WhatsApp.",
      imageUrls: [
        "/images/yallachat/image1.png",
        "/images/yallachat/image2.webp",
        "/images/yallachat/image3.webp",
        "/images/yallachat/image4.webp",
        "/images/yallachat/image5.webp",
        "/images/yallachat/image6.webp",
        "/images/yallachat/image7.webp"
      ],
      keywords: ["Instant Messaging", "Middle East", "Social Networking", "App Development"]
    },
    {
      id: "rongcloud",
      role: "Product Manager",
      company: "RongCloud Beijing",
      location: "China / Riyadh, Saudi Arabia",
      period: "09/2020 to 03/2022",
      description: [
        "Completed a strategic 7-month onsite deployment in Riyadh, Saudi Arabia, conducting immersive user research to understand local adaptation of collaborative tools and gathering critical workplace requirements.",
        "Performed gap analysis between existing systems or processes and desired state, identifying areas for improvement or enhancement.",
        "Supported software development projects by defining clear requirements and effectively communicating them to technical teams.",
        "Enabled data-driven decision making with advanced analytics tools, generating valuable insights for the organization."
      ],
      project: "Beem",
      projectDesc: "A messaging platform primarily targeting the Middle East and North Africa regions. Includes tailored professional modules like video conferencing, calendar, and to-do features.",
      imageUrls: [
        "/images/beem/image1.png",
        "/images/beem/image2.webp",
        "/images/beem/image3.webp",
        "/images/beem/image4.webp",
        "/images/beem/image5.webp",
        "/images/beem/image6.webp",
        "/images/beem/image7.webp"
      ],
      keywords: ["SaaS", "User Research", "MENA Region", "Cross-cultural Communication"]
    },
    {
      id: "scienjoy",
      role: "Product Manager",
      company: "Scienjoy Beijing",
      location: "China",
      period: "06/2019 to 08/2020",
      description: [
        "Streamlined project management with effective communication and collaboration across cross-functional teams.",
        "Collaborated with stakeholders to define project objectives and criteria.",
        "Increased efficiency in resource allocation by conducting detailed business requirements analysis."
      ],
      project: "BeeLive",
      projectDesc: "A live streaming platform primarily targeting users in the Middle East and North Africa regions. Hosts thousands of broadcasters and associated guilds.",
      imageUrls: [
        "/images/beelive/image1.png",
        "/images/beelive/image2.webp",
        "/images/beelive/image3.webp",
        "/images/beelive/image4.webp",
        "/images/beelive/image5.webp"
      ],
      keywords: ["Live Streaming", "Entertainment", "Global Market", "Broadcasting"]
    }
  ],
  education: [
    {
      degree: "Master of Science: Computing & Innovation",
      school: "University of Adelaide",
      location: "Adelaide, SA",
      year: "06/2025"
    },
    {
      degree: "Bachelor of Science: Information Technology",
      school: "Flinders University",
      location: "Adelaide",
      year: "11/2013"
    }
  ]
};