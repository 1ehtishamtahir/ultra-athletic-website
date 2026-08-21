export type Sport = {
  name: string;
  slug: string;
  blurb: string;
  tagline: string;
  color: string;
  href: string;
  productCount: number;
};

export const SPORTS: Sport[] = [
  {
    name: "Soccer",
    slug: "soccer",
    blurb: "Matchweight knits, engineered for 90 minutes of intensity.",
    tagline: "Play the beautiful game in fabric that moves with you.",
    color: "#3dd9ff",
    href: "/sports/soccer",
    productCount: 12,
  },
  {
    name: "Cricket",
    slug: "cricket",
    blurb: "Breathable, sweat-wicking kits built for long spells in the sun.",
    tagline: "Command the crease in cooling, quick-dry performance mesh.",
    color: "#c6ff3d",
    href: "/sports/cricket",
    productCount: 9,
  },
  {
    name: "Basketball",
    slug: "basketball",
    blurb: "4-way stretch jerseys that survive the full-court sprint.",
    tagline: "Explosive cuts. Unforgiving durability. Zero restrictions.",
    color: "#ff9b3d",
    href: "/sports/basketball",
    productCount: 8,
  },
  {
    name: "Baseball",
    slug: "baseball",
    blurb: "Pinstripe-ready button-downs and moisture-control pullovers.",
    tagline: "Nine innings of comfort, from the first pitch to the last out.",
    color: "#ff4d2e",
    href: "/sports/baseball",
    productCount: 7,
  },
  {
    name: "Ice Hockey",
    slug: "ice-hockey",
    blurb: "Abrasion-tested layers built for glass-to-glass battles.",
    tagline: "Hit the boards in kit that takes the impact back.",
    color: "#7a8cff",
    href: "/sports/ice-hockey",
    productCount: 6,
  },
  {
    name: "Track Suit",
    slug: "track-suit",
    blurb: "Technical warm-up pieces built for pre-game and recovery.",
    tagline: "Arrive sharp. Recover smart.",
    color: "#ff9b3d",
    href: "/products/track-suits",
    productCount: 4,
  },
  {
    name: "Hoodie",
    slug: "hoodie",
    blurb: "Brushed-back fleece with team-ready customization.",
    tagline: "Street-ready, field-durable.",
    color: "#c6ff3d",
    href: "/products/hoodies",
    productCount: 5,
  },
  {
    name: "Duffel Bag",
    slug: "duffel",
    blurb: "Heavy-duty gear bags built for match day and travel.",
    tagline: "Carry your game.",
    color: "#3dd9ff",
    href: "/products/duffel-bags",
    productCount: 3,
  },
  {
    name: "Karate",
    slug: "karate",
    blurb: "Traditional and modern gi built for kata and kumite.",
    tagline: "Discipline in every stitch.",
    color: "#ff4d2e",
    href: "/sports/karate",
    productCount: 4,
  },
];

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  sport: string;
  color: string;
  tag?: string;
  isCustomizable: boolean;
  description: string;
  sizes: string[];
  href: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "aero-match-jersey",
    name: "Aero Match Jersey",
    price: 54,
    category: "Jerseys",
    sport: "Soccer",
    color: "#3dd9ff",
    tag: "Pro Team Issue",
    isCustomizable: true,
    description:
      "Regulation-cut match jersey in layered cooling mesh. Engineered for ninety minutes of sprint, press, and recovery.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    href: "/products/jerseys",
  },
  {
    id: "command-cricket-uniform",
    name: "Command Cricket Uniform",
    price: 68,
    category: "Cricket Uniforms",
    sport: "Cricket",
    color: "#c6ff3d",
    tag: "Bestseller",
    isCustomizable: true,
    description:
      "Full-sleeve performance kit with UPF-50 fabric and underarm cooling panels for long spells in the field.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    href: "/products/cricket-uniforms",
  },
  {
    id: "velocity-track-suit",
    name: "Velocity Track Suit",
    price: 112,
    category: "Track Suits",
    sport: "Track & Field",
    color: "#ff9b3d",
    tag: "New",
    isCustomizable: false,
    description:
      "Two-piece warm-up in a technical French terry. Quiet on the outside, engineered underneath.",
    sizes: ["S", "M", "L", "XL"],
    href: "/products/track-suits",
  },
  {
    id: "apex-tech-hoodie",
    name: "Apex Tech Hoodie",
    price: 74,
    category: "Hoodies",
    sport: "Training",
    color: "#ffffff",
    isCustomizable: true,
    description:
      "Brushed-back fleece with a tonal embroidered crest. Street-ready, team-field durable.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    href: "/products/hoodies",
  },
  {
    id: "payload-duffel",
    name: "Payload Duffel",
    price: 89,
    category: "Duffel Bags",
    sport: "All Sports",
    color: "#ff4d2e",
    tag: "Field Kit",
    isCustomizable: false,
    description:
      "Water-resistant 40L duffel with a ventilated equipment bay and padded 16\" laptop sleeve.",
    sizes: ["One Size"],
    href: "/products/duffel-bags",
  },
  {
    id: "tundra-training-top",
    name: "Tundra Training Top",
    price: 62,
    category: "Training Wear",
    sport: "Ice Hockey",
    color: "#7a8cff",
    isCustomizable: true,
    description:
      "Thermal-liner training shell with abrasion panels across the shoulders. Built for glass-to-glass minutes.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    href: "/products/jerseys",
  },
];

export type CustomColor = {
  name: string;
  hex: string;
};

export const CUSTOM_COLORS: CustomColor[] = [
  { name: "Volt", hex: "#C6FF3D" },
  { name: "Frost", hex: "#3DD9FF" },
  { name: "Ignite", hex: "#FF4D2E" },
  { name: "Amber", hex: "#FF9B3D" },
  { name: "Violet", hex: "#7A8CFF" },
  { name: "Pitch Black", hex: "#0A0A0B" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Pick your sport",
    body: "Choose the discipline and kit type. Every Ulti product starts with the movement it has to survive.",
  },
  {
    step: "02",
    title: "Design your kit",
    body: "Swap colors, place your crest, add names and numbers. Your design updates live in 3D as you build.",
  },
  {
    step: "03",
    title: "Lock it in",
    body: "Get a detailed spec sheet, size run, and a fixed quote. No surprises, no hidden minimums on large orders.",
  },
  {
    step: "04",
    title: "Ship to the squad",
    body: "In-house production and QC before every delivery. Your kit arrives ready for the first whistle.",
  },
];

export const WHY_STATS = [
  { value: 500, suffix: "+", label: "Teams outfitted" },
  { value: 48, suffix: "h", label: "Design turnaround" },
  { value: 99, suffix: "%", label: "Delivery on time" },
  { value: 40, suffix: "+", label: "Countries shipped" },
];

export type GalleryItem = {
  id: number;
  sport: string;
  height: number;
  label: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, sport: "Soccer", height: 460, label: "Night league — floodlit turf" },
  { id: 2, sport: "Cricket", height: 340, label: "Test match whites, reimagined" },
  { id: 3, sport: "Basketball", height: 420, label: "Hardwood warmup" },
  { id: 4, sport: "Soccer", height: 320, label: "406 detail — crest embroidery" },
  { id: 5, sport: "Ice Hockey", height: 480, label: "Rink side at dawn" },
  { id: 6, sport: "Baseball", height: 360, label: "Ninth-inning walk-off" },
  { id: 7, sport: "Cricket", height: 430, label: "Tapework on the seam" },
  { id: 8, sport: "Basketball", height: 300, label: "Blackout edition" },
  { id: 9, sport: "Ice Hockey", height: 400, label: "Glass-to-glass" },
  { id: 10, sport: "Baseball", height: 340, label: "Spring training" },
  { id: 11, sport: "Soccer", height: 300, label: "Kickoff" },
  { id: 12, sport: "Cricket", height: 380, label: "Boundary check" },
];

export const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Sports", href: "/sports" },
  { label: "Custom Uniforms", href: "/custom-uniforms" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];