"use client"
import { useEffect, useMemo, useState } from "react";
import BabolCard from "./BabolCard";
import bg1 from "../../assets/babol-bg/bg1.png";
import bg2 from "../../assets/babol-bg/bg2.png";
import bg3 from "../../assets/babol-bg/bg3.png";
import { getPartecipantBabols } from "../../utils/babol";
import emptyBabols from "../../assets/empty-babols.svg";
import emptyCurrent from "../../assets/empty-current.svg";
import emptyPast from "../../assets/empty-past.svg";
import emptyUpcoming from "../../assets/empty-upcoming.svg";
import emptyState from "../../assets/empty-state.svg";
import Image from "next/image";
export const TabsContainer = () => {
  const tabs = ["All", "Current", "Upcoming", "Past"];
  const [activeTab, setActiveTab] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [babols, setBabols] = useState<any[]>([]);
  const [currentBabols, setCurrentBabols] = useState<any[]>([]);
  const [upcomingBabols, setUpcomingBabols] = useState<any[]>([]);
  const [pastBabols, setPastBabols] = useState<any[]>([]);
  useMemo(() => {
    const fetchData = async () => {
      const { data, error }: { data: any[] | null, error: any } = await getPartecipantBabols();
      if (error || !data?.length) {
        setIsLoading(false);
        return
      }
      setBabols(data);
    
      setCurrentBabols(data.filter(babol => new Date(babol.from_date) < new Date() && new Date(babol.to_date) > new Date()));
      setUpcomingBabols(data.filter(babol => new Date(babol.from_date) > new Date()));
      setPastBabols(data.filter(babol => new Date(babol.to_date) < new Date()));
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    babols?.length > 0 && !isLoading ? <div className="md:w-screen flex flex-col justify-center items-center ">

      <div className="flex flex-row gap-xs w-full justify-center">
        {tabs.map((tab, index) => {
          return (
            <div key={index} className={`p-sm rounded-sm text-3 min-w-xl text-center ${activeTab == tab ? "bg-white text-black" : "bg-surfaceExtraDark text-white"} cursor-pointer`} onClick={() => {
              setActiveTab(tab);
            }}>
              {tab}
            </div>
          );
        })}
      </div>
      {
        activeTab == "All" &&
        <div className="flex flex-row gap-4 justify-start mt-xl flex-wrap w-5/6">
          {
            babols.length > 0 && babols.map((babol, index) => (
              <BabolCard key={index} babol={{
                id: babol.babols.id,
                name: `${babol.babols.name}`,
                category: {
                  emoji: babol.babols.category?.emoji,
                  name: babol.babols.category?.name
                },
                configs: {
                  background: "https://via.placeholder.com/150"
                }
              }}
                background={{
                  source: index === 0 ? bg1 : index === 1 ? bg2 : bg3,
                }}
                ratio={5} />
            ))
          }
        </div>
      }
      {
        activeTab === "Current" &&
        <div className="flex flex-row gap-4 justify-start mt-xl flex-wrap w-4/6">
          {
            currentBabols.length > 0 && currentBabols.map((babol, index) => (
              <BabolCard key={index} babol={{
                id: babol.babols.id,
                name: `${babol.babols.name}`,
                category: {
                  emoji: babol.babols.category?.emoji,
                  name: babol.babols.category?.name
                },
                configs: {
                  background: "https://via.placeholder.com/150"
                }
              }}
                background={{
                  source: index === 0 ? bg1 : index === 1 ? bg2 : bg3,
                }}
                ratio={5} />
            ))
          }
          {
            currentBabols.length === 0 && !isLoading && <div className="w-full min-h-[calc(100vh-200px)] flex justify-center items-center flex-col text-center">
              <Image src={emptyCurrent} width={264} height={240} alt="Empty babols" />
              <p className="font-satoshiBold text-2xl">There are no active babol at the moment</p>
            </div>
          }
        </div>
      }
      {
        activeTab === "Upcoming" &&
        <div className="flex flex-row gap-4 justify-start mt-xl flex-wrap w-4/6">
          {
            upcomingBabols.length > 0 && upcomingBabols.map((babol, index) => (
              <BabolCard key={index} babol={{
                id: babol.babols.id,
                name: `${babol.babols.name}`,
                category: {
                  emoji: babol.babols.category?.emoji,
                  name: babol.babols.category?.name
                },
                configs: {
                  background: "https://via.placeholder.com/150"
                }
              }}
                background={{
                  source: index === 0 ? bg1 : index === 1 ? bg2 : bg3,
                }}
                ratio={5} />
            ))
          }
          {
            upcomingBabols.length === 0 && !isLoading && <div className="w-full min-h-[calc(100vh-200px)] flex justify-center items-center flex-col text-center">
              <Image src={emptyUpcoming} width={264} height={240} alt="Empty babols" />
              <p className="font-satoshiBold text-2xl">There are no upcoming babol</p>
            </div>
          }
        </div>
      }
      {
        activeTab === "Past" &&
        <div className="flex flex-row gap-4 justify-start mt-xl flex-wrap w-4/6">
          {
            pastBabols.length > 0 && pastBabols.map((babol, index) => (
              <BabolCard key={index} babol={{
                id: babol.babols.id,
                name: `${babol.babols.name}`,
                category: {
                  emoji: babol.babols.category?.emoji,
                  name: babol.babols.category?.name
                },
                configs: {
                  background: "https://via.placeholder.com/150"
                }
              }}
                background={{
                  source: index === 0 ? bg1 : index === 1 ? bg2 : bg3,
                }}
                ratio={5} />
            ))
          }
          {
            pastBabols.length === 0 && !isLoading && <div className="w-full min-h-[calc(100vh-200px)] flex justify-center items-center flex-col text-center">
              <Image src={emptyPast} width={264} height={240} alt="Empty babols" />
              <p className="font-satoshiBold text-2xl">There are no past babol</p>
            </div>
          }
        </div>
      }
    </div> : !isLoading ? <div className="w-full min-h-[calc(100vh-200px)] flex justify-center items-center flex-col">
      <Image src={emptyBabols} width={264} height={240} alt="Empty babols" />
      <p className="font-satoshiBold text-2xl">No babol here yet</p>
      <p>To create a new babol download the app</p>
    </div> : <>
      <div className="flex flex-row gap-xs w-full justify-center">
        {tabs.map((tab, index) => {
          return (
            <div key={index} className={`p-sm rounded-sm text-3 min-w-xl text-center ${activeTab == tab ? "bg-white text-black" : "bg-surfaceExtraDark text-white"} cursor-pointer`} onClick={() => {
              setActiveTab(tab);
            }}>
              {tab}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row gap-4 justify-start flex-wrap w-5/6 sm:px-36">
      <div className="relative w-full sm:w-3/12 flex justify-between rounded-xl cursor-pointer h-full">
        <Image src={emptyState} width={400} height={128} alt="Empty babols" className="min-w-full min-h-full h-[100%]" />
      </div>
      </div>
    </>
  );
};
