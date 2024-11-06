import React from "react";
import HeadSection from "./atom/HeadSection";
import UnlockProp from "./atom/UnlockProp";
import Featureprop from "../Home/atom/Featureprop";
export default function ServiceLayout() {
  return (
    <main>
      <HeadSection />
      <Featureprop />
      <UnlockProp />
    </main>
  );
}
