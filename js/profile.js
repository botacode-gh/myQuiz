/// IMPORTS ///
// global functions
import {
  initializeBookmark,
  changeButtonColorOnClick,
  changeNavLinkColorOnClick,
} from "./global.js";
// global variables
import { primaryColor, secondaryColor, accentColor } from "./global.js";

/// INITIALIZATION ///
console.log("profile.js initialized 👤");
changeButtonColorOnClick(secondaryColor, primaryColor);
changeNavLinkColorOnClick(secondaryColor, primaryColor);
