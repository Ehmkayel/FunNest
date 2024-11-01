import { FaCalendar, FaCameraRetro, FaFile, FaUser } from "react-icons/fa"
import { assets } from '../../assets/assets'

export const aboutFeatures = [
  {
    id: 1,
    title: 'Easily find nearby child-friendly spots!',
    icon: <FaFile color="blue"  />,
  },
  {
    id: 2,
    title: 'Stay updated on fun activities and special events',
    icon: <FaCalendar color="blue" />,
  },
  {
    id: 3,
    title: 'Check out images of each location in our Photo Galleries',
    icon: <FaCameraRetro color="blue" />,
  },
  {
    id: 4,
    title: 'Get real insights from other parents through User Reviews',
    icon: <FaUser color="blue"  />,
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
