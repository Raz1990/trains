import React from "react";
import styles from "./Navbar.module.scss";
import { LabeledLink } from "../LabeledLink/LabeledLink";
import { RouteEndpoints } from "@/app/types/types";

const routes: RouteEndpoints[] = ["basel", "geneva"];
export function Navbar() {
  return (
    <nav className={styles.linksContainer}>
      {routes.map((route) => (
        <LabeledLink key={route} href={route} />
      ))}
    </nav>
  );
}
