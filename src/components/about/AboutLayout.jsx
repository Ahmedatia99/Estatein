import React from "react";
import Ourjourny from "./atom/OurJourney";
import Ourvalue from "./atom/Ourvalue";
import OurAchievements from "./atom/OurAchievements";
import OurTeam from "./atom/OurTeam";

export default function AboutLayout() {
  return (
    <main className="px-5">
      <Ourjourny />
      <Ourvalue />
      <OurAchievements />
      <OurTeam />
    </main>
  );
}
