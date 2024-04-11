import {
  LucideIcon,
  LucideProps,
  UserPlus,
  GanttChart,
  CircleDotDashed,
  Activity,
  CheckCheck,
  Home,
  UserRound,
  LayoutGrid,
  Sparkle,
  ShoppingBag,
  Layers,
  Send,
  Battery,
  Instagram,
  Twitter,
  Dribbble,
  Search,
  Mail,
  SquareUserRound,
  ArrowRight,
  PlayCircle,
  Framer
} from "lucide-react";

export const Icons = {
  WebDesignIcon: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
    >
      <g color="rgba(255, 255, 255, 0.9)" fontWeight="fill">
        <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm0,144H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path>
      </g>
    </svg>
  ),
  UIIcon: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      color="rgba(255, 255, 255, 0.9)"
    >
      <g color="rgba(255, 255, 255, 0.9)">
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216V96H40ZM216,200H112V112H216v88Z"></path>
      </g>
    </svg>
  ),
  GrapicDesignIcon: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      color="rgba(255, 255, 255, 0.9)"
    >
      <g color="rgba(255, 255, 255, 0.9)">
        <path d="M88,88v80H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H160a8,8,0,0,1,8,8V88Zm128,0H168v80H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88Z"></path>
      </g>
    </svg>
  ),
  VerticalArrow: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      color="rgb(255, 255, 255)"
    >
      <g color="rgb(255, 255, 255)">
        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
      </g>
    </svg>
  ),
  ExploreIcon: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      color="rgba(255, 255, 255, 0.85)"
      className="w-[24px] h-[24px]"
    >
      <g
        color="rgba(255, 255, 255, 0.85)"
        fontWeight="regular"
        className="select-none size-full inline-block fill-[#ffffffd9] text-[#ffffffd9] "
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm36.44-94.66-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17Z"></path>
      </g>
    </svg>
  ),
  UserPlus,
  GanttChart, // all project at sidebar
  CircleDotDashed, // pending project icon (all projects page),
  Activity, // active project icon (all projects page)
  CheckCheck, // completed project (all projects page)

  //sidebar icons
  Home, // home
  UserRound, // about
  LayoutGrid, // portfolio
  Sparkle, // services,
  ShoppingBag, //shop
  Layers, // blog
  Send, // contact
  Battery, // battery icon for user profile section (left-bottom)

  // social icons
  Instagram,
  Twitter,
  Dribbble,

  // Others
  Search, //search icon
  Mail, // Message icon
  SquareUserRound, // User
  ArrowRight,
  PlayCircle,
  Framer
};

export type Icon = keyof typeof Icons;
