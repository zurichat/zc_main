import React from "react";
import { Badge } from "react-bootstrap";
import "./label.css";

export const MarketPlaceLabel = ({ svg, content, evt, styling = "" }) => {
  return (
    <Badge pill className={`d-flex marketplace-label ${styling}`} onClick={evt}>
      <img src={svg} alt={content} className="mot-template-label__image" />
      <span>{content}</span>
    </Badge>
  );
};
