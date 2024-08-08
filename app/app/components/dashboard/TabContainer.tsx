"use client"
import { useState } from "react";
import BabolCard from "./BabolCard";
import bg1 from "../../assets/babol-bg/bg1.png";
import bg2 from "../../assets/babol-bg/bg2.png";
import bg3 from "../../assets/babol-bg/bg3.png";
export const TabsContainer = () => {
  const tabs = ["All", "Current", "Upcoming", "Past"];
  const [activeTab, setActiveTab] = useState("All");
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row gap-xs w-full justify-center">
        {tabs.map((tab, index) => {
          return (
            <div key={index} className={`p-sm rounded-sm text-3 min-w-xl text-center ${activeTab == tab ? "bg-white text-black" : "bg-surfaceExtraDark text-white"}`} onClick={() => {
                setActiveTab(tab);
            }}>
              {tab}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row gap-4 w-full justify-center mt-xl">
        {
            Array.from({ length: 3 }).map((_, index) => (
                <BabolCard babol={{
                    id: index,
                    name: `Babol ${index}`,
                    category: {
                        emoji: "🎉",
                        name: "Party"
                    },
                    configs: {
                        background: "https://via.placeholder.com/150"
                    }
                }}
                background={{
                    source: index === 0 ? bg1 : index === 1 ? bg2 : bg3,
                }}
                ratio={5}/>
            ))
        }
      </div>
    </div>
  );
};
