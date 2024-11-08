import { assets } from '../../assets/assets'
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
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'


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
    age_group: "All Ages",
    organizer: "FunKids Ltd.",
    ticket_price: "Free",
    event_type: "Outdoor Activity",
    duration: "4 hours",
    contact_email: "info@funkids.com",
  },
  {
    id: 2,
    title: "Kids Creative Arts Festival",
    date: "December 5, 2024",
    location: "National Museum, Lagos",
    description:
      "A vibrant art workshop where children can explore their creativity through various artistic expressions, including painting and crafting.",
    image: assets.art_workshop,
    age_group: "5-12 years",
    organizer: "ArtSpark Studios",
    ticket_price: "₦1500",
    event_type: "Workshop",
    duration: "6 hours",
    contact_email: "support@artspark.com",
  },
  {
    id: 3,
    title: "End of Year Family Carnival",
    date: "December 15, 2024",
    location: "Tarkwa Bay Beach, Lagos",
    description:
      "Celebrate the holiday season with a family-friendly carnival featuring games, food stalls, live music, and fun activities for kids of all ages.",
    image: assets.holiday_festival,
    age_group: "All Ages",
    organizer: "Tarkwa Bay Events",
    ticket_price: "₦2000",
    event_type: "Carnival",
    duration: "5 hours",
    contact_email: "events@tarkwabay.com",
  },
  {
    id: 4,
    title: "Science and Discovery Camp",
    date: "January 10, 2025",
    location: "Civic Center, Lagos",
    description:
      "An educational camp that inspires children to explore the wonders of science through interactive exhibits and exciting experiments.",
    image: assets.discovery_camp,
    age_group: "8-15 years",
    organizer: "Science Explorers",
    ticket_price: "₦3000",
    event_type: "Educational Camp",
    duration: "3 days",
    contact_email: "contact@scienceexplorers.com",
  },
  {
    id: 5,
    title: "Outdoor Adventure Trek",
    date: "January 20, 2025",
    location: "Idanre Hills, Ondo State",
    description:
      "Bring the family for a thrilling day of hiking and exploration at the scenic Idanre Hills. Perfect for nature lovers and adventurers!",
    image: assets.adventure_trek,
    age_group: "All Ages",
    organizer: "Nature Trek Adventures",
    ticket_price: "₦5000",
    event_type: "Outdoor Adventure",
    duration: "1 day",
    contact_email: "info@naturetrek.com",
  },
  {
    id: 6,
    title: "Children’s Literature and Storytelling Festival",
    date: "February 5, 2025",
    location: "Freedom Park, Lagos",
    description:
      "Immerse your children in the magic of storytelling with live performances and book readings by popular Nigerian authors.",
    image: assets.literature_festival,
    age_group: "5-10 years",
    organizer: "Books and Tales",
    ticket_price: "₦1200",
    event_type: "Literature Festival",
    duration: "4 hours",
    contact_email: "events@booksandtales.com",
  },
  {
    id: 7,
    title: "African Drumming and Dance Workshop",
    date: "February 15, 2025",
    location: "National Theatre, Lagos",
    description:
      "Kids can experience the joy of African music by learning basic drumming techniques and traditional dances from seasoned instructors.",
    image: assets.drum_dance,
    age_group: "6-14 years",
    organizer: "Cultural Beats",
    ticket_price: "₦2000",
    event_type: "Workshop",
    duration: "3 hours",
    contact_email: "info@culturalbeats.com",
  },
  {
    id: 8,
    title: "Children’s Yoga and Mindfulness Retreat",
    date: "February 25, 2025",
    location: "Alchemist Café, Lagos",
    description:
      "A calming retreat designed to introduce children to yoga and mindfulness exercises, helping them relax and focus.",
    image: assets.yoga_retreat,
    age_group: "7-12 years",
    organizer: "ZenKids",
    ticket_price: "₦2500",
    event_type: "Wellness Retreat",
    duration: "2 days",
    contact_email: "support@zenkids.com",
  },
  {
    id: 9,
    title: "Junior Chef Cooking Class",
    date: "March 3, 2025",
    location: "Chef's Academy, Lagos",
    description:
      "Kids can join professional chefs for a hands-on cooking class, where they’ll learn to make fun and healthy meals.",
    image: assets.cooking_class,
    age_group: "8-16 years",
    organizer: "Chef's Academy",
    ticket_price: "₦3500",
    event_type: "Cooking Class",
    duration: "3 hours",
    contact_email: "academy@chefsacademy.com",
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

export const contact = [
  {
    id: 1,
    icon: <FiMapPin color= "blue"/>,
    paragraph: '24, journalist road, ILORIN '
  },
  {
    id: 2,
    icon: <FiMail color="blue"/>,
    paragraph: 'funNest@business.org'
  },
  {
    id: 3,
    icon: <FiPhone color="blue"/>,
    paragraph: '08104569867'
  }
]