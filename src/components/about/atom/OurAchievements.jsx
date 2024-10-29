import React from "react";
import DefineCompo from "../../atoms/DefineCompo";
import { Element } from "react-scroll";
export default function OurAchievements() {
  const data = [
    {
      title: "3+ Years of Excellence",
      description:
        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
      id: 1,
    },
    {
      title: "Happy Clients",
      description:
        "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
      id: 2,
    },
    {
      title: "Industry Recognition",
      description:
        "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
      id: 3,
    },
  ];
  return (
    <Element name="achieve">
      <section className="container mx-auto flex flex-col justify-center  pt-20">
        <DefineCompo
          title="Our Achievements"
          description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          stars={true}
          value={false}
        />
        <div className="flex mobile:flex-col items-stretch tablet:flex-row justify-between mobile:pt-5 tablet:pt-10 laptop:pt-20">
          {data.map((user) => {
            return (
              <div
                className="border-8 rounded-2xl border-drop_shad  tablet:[&:not(:last-child)]:mr-5 laptop:[&:not(:last-child)]:mr-8 mobile:[&:not(:last-child)]:mb-4 mobile:mr-0 tablet:[&:not(:last-child)]:mb-0 "
                key={user.id}
              >
                <div className="mobile:p-4 tablet:p-5 laptop:p-10 border border-stroke rounded-xl h-full">
                  <h1 className="mobile:text-lg tablet:text-base laptop:text-3xl font-semibold mb-3">
                    {user.title}
                  </h1>
                  <p className="mobile:text-xs tablet:text-xs laptop:text-base text-tasting font-medium max-w-md">
                    {user.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Element>
  );
}
