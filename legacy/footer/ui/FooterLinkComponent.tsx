import React from "react";
import { Link, LinkProps } from "react-router-dom";
import "./FooterLinkComponent.scss";

type FooterLinkComponentProps = LinkProps & {
  children: React.ReactNode;
};

const FooterLinkComponent: React.FC<FooterLinkComponentProps> = ({ children, ...props }) => {
  return (
    <Link className="custom-link" {...props}>
      {children}
    </Link>
  );
};

export default FooterLinkComponent;
