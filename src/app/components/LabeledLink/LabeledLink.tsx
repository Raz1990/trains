import React from "react";
import styles from "./LabeledLink.module.scss";
import { RouteEndpoints } from "../../types/types";
import Link from "next/link";

type LabeledLinkProps = { href: RouteEndpoints; label?: string };

export function LabeledLink({ href, label }: LabeledLinkProps) {
  const displayedLabel = label ?? href;

  return (
    <span className={styles.link}>
      <Link href={`/${href}`} title={displayedLabel}>
        {displayedLabel}
      </Link>
    </span>
  );
}
