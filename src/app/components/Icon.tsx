import React from "react";
import Healthy from "@/app/assets/icons/healthy.svg";
import Edit from "@/app/assets/icons/edit.svg";
import Award from "@/app/assets/icons/award.svg";
import cross from "@/app/assets/icons/cross.svg";
import bars from "@/app/assets/icons/bars.svg";
import exclamationQuote from "@/app/assets/icons/exclamationQuote.svg";
import AngleUp from "@/app/assets/icons/angleUp.svg";
import angleLightUp from "@/app/assets/icons/angleLightUp.svg";
import restaurant from "@/app/assets/icons/restaurant.svg";
import trash from "@/app/assets/icons/trash.svg";

const iconTypes = {
  healthy: Healthy,
  edit: Edit,
  award: Award,
  cross: cross,
  bars: bars,
  exclamationQuote: exclamationQuote,
  angleUp: AngleUp,
  angleLightUp: angleLightUp,
  restaurant: restaurant,
  trash: trash,
  
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
