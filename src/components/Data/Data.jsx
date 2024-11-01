import {
  FaCalendar,
  FaCameraRetro,
  FaFile,
  FaUser,
  FaSearchLocation,
  FaCalendarAlt,
  FaStar,
  FaShieldAlt,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";
import { assets } from "../../assets/assets";

export const aboutFeatures = [
  {
    id: 1,
    title: "Easily find nearby child-friendly spots!",
    icon: <FaFile color="blue" />,
  },
  {
    id: 2,
    title: "Stay updated on fun activities and special events",
    icon: <FaCalendar color="blue" />,
  },
  {
    id: 3,
    title: "Check out images of each location in our Photo Galleries",
    icon: <FaCameraRetro color="blue" />,
  },
  {
    id: 4,
    title: "Get real insights from other parents through User Reviews",
    icon: <FaUser color="blue" />,
  },
];

export const featuresData = [
  {
    icon: <FaSearchLocation className="text-blue-500 text-4xl mb-4" />,
    title: "Discover Child-Friendly Centers",
    description:
      "Find daycare facilities, playgrounds, and resorts easily with our extensive directory of child-friendly centers.",
    image: assets.discoverCentersImg,
  },
  {
    icon: <FaCalendarAlt className="text-green-500 text-4xl mb-4" />,
    title: "Events & Activities",
    description:
      "Get updates on upcoming events tailored for children, including educational workshops, play dates, and festivals.",
    image: assets.eventsActivitiesImg,
  },
  {
    icon: <FaStar className="text-yellow-500 text-4xl mb-4" />,
    title: "Reviews & Ratings",
    description:
      "Read honest reviews and ratings from other parents to make informed choices for your child’s enjoyment and safety.",
    image: assets.reviewsRatingsImg,
  },
  {
    icon: <FaShieldAlt className="text-purple-500 text-4xl mb-4" />,
    title: "Safety & Security",
    description:
      "Use filters to find centers that meet high safety standards, with features like CCTV, certified staff, and more.",
    image: assets.safetySecurityImg,
  },
  {
    icon: <FaLightbulb className="text-pink-500 text-4xl mb-4" />,
    title: "Personalized Recommendations",
    description:
      "Get tailored recommendations based on your preferences, making it easier to find activities that your child will love.",
    image: assets.personalizedRecommendationsImg,
  },
  {
    icon: <FaHandsHelping className="text-teal-500 text-4xl mb-4" />,
    title: "Community Support",
    description:
      "Join a supportive community of parents sharing experiences, tips, and recommendations for raising happy, healthy children.",
    image: assets.communitySupportImg,
  },
];

export const eventsData = [
  {
    id: 1,
    title: "Family Fun Day at Lekki Leisure Lake",
    date: "November 20, 2024",
    location: "Lekki Leisure Lake, Lagos",
    description:
      "Join us for a day filled with exciting activities for children and a relaxing picnic by the lake. Enjoy games, face painting, and boat rides!",
    image: assets.picnic,
  },
  {
    id: 2,
    title: "Kids Creative Arts Festival",
    date: "December 5, 2024",
    location: "National Museum, Lagos",
    description:
      "A vibrant art workshop where children can explore their creativity through various artistic expressions, including painting and crafting.",
    image: assets.art_workshop,
  },
  {
    id: 3,
    title: "End of Year Family Carnival",
    date: "December 15, 2024",
    location: "Tarkwa Bay Beach, Lagos",
    description:
      "Celebrate the holiday season with a family-friendly carnival featuring games, food stalls, live music, and fun activities for kids of all ages.",
    image: assets.holiday_festival,
  },
];

export const images = [
  assets.entertainment,
  assets.gallery,
  assets.family,
  assets.maq,
  assets.view,
  assets.playground,
  assets.fun,
  assets.moment,
  assets.swift,
  assets.blossom,
  assets.hero,
];
