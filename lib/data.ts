import React from "react";
import { MessageCircleHeart } from "lucide-react";
import { Heart } from "lucide-react";

import { Share } from "lucide-react";
import { Send } from "lucide-react";
import { Trash2 } from "lucide-react";
import { LogOut } from "lucide-react";
import { Pencil } from "lucide-react";
import { Search } from "lucide-react";
import { Home } from "lucide-react";
import { PenLine } from "lucide-react";
import { Users } from "lucide-react";
import { UserRoundCog } from "lucide-react";
import { Palette } from "lucide-react";
import { Tag } from "lucide-react";
export const navigationbarLinks = [
  {
    name: "Home",
    target: "#home",
  },
  {
    name: "Guide",
    target: "#guide",
  },
  {
    name: "Canvas",
    target: "#canvas-extractor",
  },

  {
    name: "PaletteThreads",
    target: "/",
  },
];

export const sidebarNavigationlinks = [
  {
    route: "/",
    label: "Home",
    imgURL: React.createElement(Home),
  },
  {
    route: "/canvas",
    label: "Canvas",
    imgURL: React.createElement(Palette),
  },
  // {
  //   route: "/search",
  //   label: "Search",
  //   imgURL: React.createElement(Search),
  // },
  // {
  //   route: "/activity",
  //   label: "Activity",
  //   imgURL: React.createElement(MessageCircleHeart),
  // },
  {
    route: "/create-thread",
    label: "Create PaletteThread",
    imgURL: React.createElement(PenLine),
  },
  // {
  //   route: "/communities",
  //   label: "Communities",
  //   imgURL: React.createElement(Users),
  // },
  {
    route: "/profile",
    label: "Profile",
    imgURL: React.createElement(UserRoundCog),
  },
];

export const profileTabs = [
  {
    value: "paletteThreads",
    label: "PaletteThreads",
    icon: React.createElement(MessageCircleHeart),
  },
  { value: "replies", label: "Replies", icon: React.createElement(Users) },
  { value: "tagged", label: "Tagged", icon: React.createElement(Tag) },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];

export const testTab = [
  {
    value: "comments",
    label: "Comments",
    icon: React.createElement(MessageCircleHeart),
  },
] as const;
