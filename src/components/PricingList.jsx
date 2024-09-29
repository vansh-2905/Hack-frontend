import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  const score = 39;
  const totalScore = 50;
  const title = "User's Rating";
  const description = "We have rated your speech ";
  const additionalDescription =
    "Your speech performance was evaluated based on various factors including clarity, content, and delivery.";
  const usersFeedback =
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Platea dui aenean volutpat augue tempor consectetur dis dignissim neque. Arcu ridiculus justo integer ex felis aenean gravida turpis.";

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-[30rem] h-[35rem] px-8 py-8 bg-n-8 border border-n-6 rounded-[2rem] flex flex-col justify-center items-center">
        <h4 className="h4 mb-6 text-center">{title}</h4>

        <p className="body-2 mb-8 text-center text-n-1/50">{description}</p>

        <div className="flex items-center justify-center mb-6">
          {score && (
            <div className="text-[8rem] leading-none font-bold">{score}</div>
          )}
        </div>

        <p className="text-center mb-6">out of {totalScore}</p>

        <p className="text-center mb-8 text-sm text-n-1/70">
          {additionalDescription}
        </p>
        <p className="text-center mb-8 text-sm text-n-1/70">{usersFeedback}</p>
      </div>
    </div>
  );
};

export default PricingList;
