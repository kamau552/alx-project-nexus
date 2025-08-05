import { Game } from "@/interfaces";

export const games: Game[] = [
  {
    id: "far-cry-6",
    title: "Far Cry 6",
    platforms: ["PC", "PS5", "Xbox"],
    price: 59.99,
    image: "/assets/images/games/far-cry-6.jpg",
    genres: ["Action", "Shooter"],
    systemRequirements: "Windows 10, 8GB RAM, GTX 960",
    available: ["Worldwide"],
    status: "available",
    description: "A guerrilla revolution erupts on the tropical island of Yara. Fight to free your people in this explosive shooter."
  },
  {
    id: "god-of-war",
    title: "God of War",
    platforms: ["PC", "PS5"],
    price: 49.99,
    image: "/assets/images/games/god-of-war.jpg",
    genres: ["Action"],
    systemRequirements: "Windows 10, 8GB RAM, GTX 1060",
    available: ["Worldwide"],
    status: "available",
    description: "Kratos and Atreus embark on a mythical Norse journey to uncover deep truths and face powerful gods."
  },
  {
    id: "spider-man",
    title: "Spider-Man",
    platforms: ["PS5", "PC"],
    price: 59.99,
    image: "/assets/images/games/spider-man.jpg",
    genres: ["Action"],
    systemRequirements: "Windows 10, 16GB RAM, RTX 2060",
    available: ["Worldwide"],
    status: "available",
    description: "Swing through New York as Spider-Man and battle iconic villains in an action-packed open world."
  },
  {
    id: "inzoi",
    title: "Inzoi",
    platforms: ["PC"],
    price: 29.99,
    image: "/assets/images/games/inzoi.jpg",
    genres: ["Simulation", "RPG"],
    systemRequirements: "Windows 10, 8GB RAM, GTX 1050 Ti",
    available: ["Worldwide"],
    status: "coming_soon",
    description: "A life simulation game where you shape your own virtual reality, emotions, and relationships."
  },
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    platforms: ["PC", "PS5", "Xbox"],
    price: 69.99,
    image: "/assets/images/games/red-dead-redemption.jpg",
    genres: ["Action", "Adventure", "RPG"],
    systemRequirements: "Windows 10, 12GB RAM, GTX 1060",
    available: ["Worldwide"],
    status: "available",
    description: "Step into the wild west as Arthur Morgan, surviving against the decline of the outlaw era in a vast and gritty world."
  },
  {
    id: "elden-ring",
    title: "Elden Ring",
    platforms: ["PC", "PS5", "Xbox"],
    price: 69.99,
    image: "/assets/images/games/elden-ring.jpg",
    genres: ["RPG", "Adventure"],
    systemRequirements: "Windows 10, 16GB RAM, GTX 1070",
    available: ["Worldwide"],
    status: "available",
    description: "A dark fantasy action RPG where players traverse a vast world guided by grace to become the Elden Lord."
  },
  {
    id: "horizon-zero-dawn",
    title: "Horizon Zero Dawn",
    platforms: ["PC", "PS4"],
    price: 49.99,
    image: "/assets/images/games/horizon-zero-dawn.jpg",
    genres: ["Adventure", "Action"],
    systemRequirements: "Windows 10, 8GB RAM, GTX 1050 Ti",
    available: ["Worldwide"],
    status: "available",
    description: "Aloy’s journey through a post-apocalyptic world ruled by robotic creatures reveals her destiny and the truth of the old world."
  },
  {
    id: "xcom-2",
    title: "XCOM 2",
    platforms: ["PC", "PS4", "Xbox"],
    price: 49.99,
    image: "/assets/images/games/xcom-2.jpg",
    genres: ["Strategy"],
    systemRequirements: "Windows 7, 4GB RAM, GTX 460",
    available: ["Worldwide"],
    status: "available",
    description: "Lead the resistance against an alien occupation in this intense turn-based strategy game."
  },
  {
    id: "starfield",
    title: "Starfield",
    platforms: ["PC", "Xbox"],
    price: 69.99,
    image: "/assets/images/games/starfield.jpg",
    genres: ["RPG", "Adventure"],
    systemRequirements: "Windows 10, 16GB RAM, RTX 2070",
    available: ["Worldwide"],
    status: "available",
    description: "Explore space and uncover humanity's greatest mystery in this next-gen RPG from the creators of Skyrim."
  },
  {
    id: "gta-v",
    title: "Grand Theft Auto V",
    platforms: ["PC", "PS4", "Xbox"],
    price: 29.99,
    image: "/assets/images/games/gta-v.jpg",
    genres: ["Action", "Adventure"],
    systemRequirements: "Windows 10, 8GB RAM, GTX 660",
    available: ["Worldwide"],
    status: "available",
    description: "Experience life in the crime-filled streets of Los Santos through three iconic characters in a vast open world."
  },
  {
    id: "outlast",
    title: "Outlast",
    platforms: ["PC", "PS4"],
    price: 19.99,
    image: "/assets/images/games/outlast.jpg",
    genres: ["Horror", "Shooter", "Action"],
    systemRequirements: "Windows 7, 4GB RAM, GTX 260",
    available: ["Worldwide"],
    status: "available",
    description: "A terrifying survival horror game where you must escape a haunted asylum with only your camera."
  },
  {
  id: "assassins-creed-valhalla",
  title: "Assassin's Creed Valhalla",
  platforms: ["PC", "PS5", "Xbox"],
  price: 59.99,
  image: "/assets/images/games/assassins-creed-valhalla.jpg",
  genres: ["RPG", "Action"],
  systemRequirements: "Windows 10, 8GB RAM, GTX 960",
  available: ["Worldwide"],
  status: "available",
  description: "Become Eivor, a legendary Viking raider, and lead your clan in battles across England's Dark Ages."
},
{
  id: "detroit-become-human",
  title: "Detroit: Become Human",
  platforms: ["PC", "PS4"],
  price: 39.99,
  image: "/assets/images/games/detroit-become-human.jpg",
  genres: ["Adventure"],
  systemRequirements: "Windows 10, 8GB RAM, GTX 780",
  available: ["Worldwide"],
  status: "available",
  description: "Experience a gripping narrative set in a futuristic Detroit where androids face moral dilemmas."
},
{
  id: "little-nightmares",
  title: "Little Nightmares",
  platforms: ["PC", "PS4", "Switch"],
  price: 24.99,
  image: "/assets/images/games/little-nightmares.jpg",
  genres: ["Horror", "Indie", "Adventure"],
  systemRequirements: "Windows 10, 4GB RAM, GTX 660",
  available: ["Worldwide"],
  status: "available",
  description: "Immerse yourself in a dark whimsical tale of childhood fears inside a mysterious vessel called The Maw."
},
{
  id: "resident-evil",
  title: "Resident Evil",
  platforms: ["PC", "PS4"],
  price: 39.99,
  image: "/assets/images/games/resident-evil.jpg",
  genres: ["Horror", "Adventure"],
  systemRequirements: "Windows 10, 8GB RAM, GTX 960",
  available: ["Worldwide"],
  status: "available",
  description: "Survive a zombie-infested world as you uncover disturbing secrets behind bioterrorism."
},
{
  id: "witcher-3",
  title: "The Witcher 3: Wild Hunt",
  platforms: ["PC", "PS5", "Xbox"],
  price: 39.99,
  image: "/assets/images/games/witcher-3.jpg",
  genres: ["RPG", "Adventure"],
  systemRequirements: "Windows 10, 8GB RAM, GTX 770",
  available: ["Worldwide"],
  status: "available",
  description: "Play as Geralt of Rivia in a vast open world filled with monsters, magic, and political intrigue."
},
{
  id: "league-of-legends",
  title: "League of Legends",
  platforms: ["PC"],
  price: 0.00,
  image: "/assets/images/games/league-of-legends.jpg",
  genres: ["Strategy", "Multiplayer"],
  systemRequirements: "Windows 7, 4GB RAM, Intel HD Graphics 3000",
  available: ["Worldwide"],
  status: "available",
  description: "Compete in 5v5 multiplayer battles using unique champions with tactical abilities and strategies."
},
{
  id: "call-of-duty",
  title: "Call of Duty",
  platforms: ["PC", "PS5", "Xbox"],
  price: 59.99,
  image: "/assets/images/games/call-of-duty.jpg",
  genres: ["Shooter", "Action"],
  systemRequirements: "Windows 10, 12GB RAM, GTX 970",
  available: ["Worldwide"],
  status: "available",
  description: "Jump into cinematic military campaigns and fast-paced multiplayer gunfights in this iconic series."
},
{
  id: "stalker",
  title: "S.T.A.L.K.E.R.",
  platforms: ["PC"],
  price: 29.99,
  image: "/assets/images/games/stalker.jpg",
  genres: ["RPG", "Horror", "Shooter"],
  systemRequirements: "Windows 10, 8GB RAM, GTX 760",
  available: ["Worldwide"],
  status: "available",
  description: "Navigate through the post-apocalyptic Chernobyl Exclusion Zone full of radiation and mutated horrors."
},
{
  id: "bully",
  title: "Bully",
  platforms: ["PC", "PS4"],
  price: 19.99,
  image: "/assets/images/games/bully.jpg",
  genres: ["Simulation", "Adventure"],
  systemRequirements: "Windows 10, 4GB RAM, Intel HD Graphics",
  available: ["Worldwide"],
  status: "available",
  description: "Play as a mischievous student at Bullworth Academy, surviving school life with humor and rebellion."
},
{
  id: "sims-4",
  title: "The Sims 4",
  platforms: ["PC"],
  price: 0.00,
  image: "/assets/images/games/sims-4.jpg",
  genres: ["Simulation"],
  systemRequirements: "Windows 10, 4GB RAM, GTX 650",
  available: ["Worldwide"],
  status: "available",
  description: "Build homes, create Sims, and control their lives in this beloved life simulation game."
},
{
  id: "peak",
  title: "Peak",
  platforms: ["Mobile", "PC"],
  price: 0.00,
  image: "/assets/images/games/peak.jpg",
  genres: ["Simulation", "Strategy"],
  systemRequirements: "N/A",
  available: ["Worldwide"],
  status: "available",
  description: "Train your brain daily with fun games designed to challenge memory, focus, and problem-solving."
},
{
  id: "nba-2k24",
  title: "NBA 2K24",
  platforms: ["PC", "PS5", "Xbox"],
  price: 69.99,
  image: "/assets/images/games/nba-2k24.jpg",
  genres: ["Sports"],
  systemRequirements: "Windows 10, 8GB RAM, GTX 770",
  available: ["Worldwide"],
  status: "available",
  description: "Hit the court with realistic gameplay, updated rosters, and thrilling MyCareer and franchise modes."
},
{
  id: "fifa-24",
  title: "FIFA 24",
  platforms: ["PC", "PS5", "Xbox"],
  price: 69.99,
  image: "/assets/images/games/fifa-24.jpg",
  genres: ["Sports"],
  systemRequirements: "Windows 10, 8GB RAM, GTX 960",
  available: ["Worldwide"],
  status: "available",
  description: "Experience world-class football with hyper-realistic graphics and exciting modes like Ultimate Team."
},
{
  id: "forza-horizon-5",
  title: "Forza Horizon 5",
  platforms: ["PC", "Xbox"],
  price: 59.99,
  image: "/assets/images/games/forza-horizon-5.jpg",
  genres: ["Racing", "Simulation"],
  systemRequirements: "Windows 10, 8GB RAM, GTX 970",
  available: ["Worldwide"],
  status: "available",
  description: "Drive across vibrant Mexico in dynamic seasons with hundreds of the world's greatest cars."
},
{
  id: "stardew-valley",
  title: "Stardew Valley",
  platforms: ["PC", "Switch", "Mobile"],
  price: 14.99,
  image: "/assets/images/games/stardew-valley.jpg",
  genres: ["Indie", "Simulation", "Strategy"],
  systemRequirements: "Windows Vista, 2GB RAM, 256MB VRAM",
  available: ["Worldwide"],
  status: "available",
  description: "Escape to the countryside and cultivate your dream farm in this charming farming and life sim."
}
];

export const footerLinks = [
  {
    title: "",
    links: [
      { title: "Browse Games", url: "/categories" },
      { title: "Wishlist", url: "/wishlist" },
      { title: "Redeeem Voucher", url: "" },
    ]
  },
  {
    title: "Help",
    links: [
      { title: "Support", url: "/support" },
      { title: "Payment options", url: "/payments" }
    ]
  }
];