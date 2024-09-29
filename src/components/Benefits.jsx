import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useState } from "react";

const Benefits = () => {
  const munTitle = "Virtual MUN Title";
  const bot1 = "USA";
  const bot2 = "China";
  const bot3 = "Russia";
  const currentSpeaker = "";
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [isBot1Speaking, setIsBot1Speaking] = useState(false);
  const [isBot2Speaking, setIsBot2Speaking] = useState(false);
  const [isBot3Speaking, setIsBot3Speaking] = useState(false);
  const [isChairSpeaking, setIsChairSpeaking] = useState(false);

  const toggleSpeech = () => {
    setIsSpeaking(!isSpeaking);
    // Add your speech recognition logic here
  };

  const toggleCard = () => {

  }

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title={munTitle} />

        <div className="relative mb-20">
          {/* First row */}
          <div className="flex justify-between mb-20">
            <BenefitCard title={bot1}/>
            <BenefitCard title={bot2}/>
          </div>

          {/* Second row */}
          <div className="flex justify-between">
            <BenefitCard title={bot3}/>
            <BenefitCard title={"User"} boolVar={isSpeaking}/>
          </div>

          {/* Center card */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <BenefitCard  title={"Chair"}/>
          </div>
        </div>

        {/* Speech button */}
        <div className="flex justify-center">
          <button
            onClick={toggleSpeech}
            className={`px-6 py-3 rounded-full text-white font-bold transition-all duration-300 ${
              isSpeaking
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSpeaking ? "Stop Speaking" : "Start Speaking"}
          </button>
        </div>
      </div>
    </Section>
  );
};

// Extracted BenefitCard component for cleaner code
const BenefitCard = ({ title, boolVar }) => (
  <div className={`bg-white/10 backdrop-blur-lg  rounded-2xl ${!boolVar ?" border border-2 border-cyan-200" : ""} overflow-hidden`}>
                    <div className={`p-16 w-[350px] h-[175px] 
                    ${ boolVar ? "inset-0 bg-gradient-to-r from-blue-400 via-green-500 to-blue-800 animate-gradient-xy" : ""}`}>
                        <div className="flex justify-center items-center">
                            <h2 className="text-3xl font-bold text-white">{title}</h2>
                        </div>

                    </div>

                </div>
);

export default Benefits;
