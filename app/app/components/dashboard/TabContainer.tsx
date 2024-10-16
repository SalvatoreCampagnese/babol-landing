"use client";
import { useEffect, useState } from "react";
import BabolCard from "./BabolCard";
import bg1 from "../../assets/babol-bg/bg1.png";
import bg2 from "../../assets/babol-bg/bg2.png";
import bg3 from "../../assets/babol-bg/bg3.png";
import { getPartecipantBabols } from "../../utils/babol";
import emptyBabols from "../../assets/empty-babols.svg";
import emptyCurrent from "../../assets/empty-current.svg";
import emptyPast from "../../assets/empty-past.svg";
import emptyUpcoming from "../../assets/empty-upcoming.svg";
import Image from "next/image";
import { BabolSkeleton } from "./BabolSkeleton";
const useCachedFetch = (fetchFunction: Function) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const cachedData = sessionStorage.getItem("cachedBabols");
      const emptyData = JSON.stringify({
        cacheDate: new Date(),
        babols: []
      });
      const arrayOfBabols = JSON.parse(cachedData || emptyData)
      let isExpired = false
      // TODO: Check if cacheDate is > than 1h
      if(arrayOfBabols?.cacheDate){
        const today:any = new Date();
        const diffInMilliseconds = arrayOfBabols.cacheDate - today;
        const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
        if(diffInHours > 1){
          isExpired = true
        }
      }

      if (arrayOfBabols?.babols && arrayOfBabols?.babols?.length && arrayOfBabols?.cacheDate && !isExpired) {
        setData(arrayOfBabols?.babols); // Use cached data
        setIsLoading(false);
        return;
      }
      const fetchedData = await fetchFunction();
      sessionStorage.setItem("cachedBabols", JSON.stringify({cacheDate: new Date(),
        babols:fetchedData})); // Cache the data
      setData(fetchedData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading };
};

export const TabsContainer = () => {
  const tabs = ["All", "Current", "Upcoming", "Past"];
  const [activeTab, setActiveTab] = useState("All");
  const { data: babols, isLoading }: any = useCachedFetch(getPartecipantBabols); // Use custom hook
  const [currentBabols, setCurrentBabols] = useState<any[]>([]);
  const [upcomingBabols, setUpcomingBabols] = useState<any[]>([]);
  const [pastBabols, setPastBabols] = useState<any[]>([]);
  const [profiles, setProfiles] = useState<any[]>([])
  useEffect(() => {
    if(!babols?.length) return;
    let profilesUids=[]
    for(const babol of babols){
      profilesUids.push(babol?.profileID?.uuid)
    }
    setProfiles(profilesUids)
    setCurrentBabols(
      babols
        ? babols.filter(
            (babol: any) => new Date(babol.babols.from_date) < new Date() &&
              new Date(babol.babols.to_date) > new Date()
          )
        : []
    );
    setUpcomingBabols(
      babols
        ? babols.filter((babol: any) => new Date(babol.babols.from_date) > new Date())
        : []
    );
    setPastBabols(
      babols
        ? babols.filter((babol: any) => new Date(babol.babols.to_date) < new Date())
        : []
    );
  }, [babols]);
  return (
    <div className="md:w-screen flex flex-col justify-center items-center ">
      {babols?.length > 0 && (
        <>
          <div className="flex flex-row gap-xs w-full justify-center">
            {tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  className={`p-sm rounded-sm text-3 min-w-xl text-center ${
                    activeTab == tab
                      ? "bg-white text-black"
                      : "bg-surfaceExtraDark text-white"
                  } cursor-pointer`}
                  onClick={() => {
                    setActiveTab(tab);
                  }}
                >
                  {tab}
                </div>
              );
            })}
          </div>
          {activeTab == "All" && (
            <div className="flex flex-row gap-4 justify-center mt-xl flex-wrap md:w-5/6 w-full">
              {babols.length > 0 &&
                babols.map((babol: any, index: number) => (
                  <BabolCard
                    key={index}
                    babol={{
                      id: babol.babols.id,
                      name: `${babol.babols.name}`,
                      from_date: babol.babols.from_date,
                      to_date: babol.babols.to_date,
                      category: {
                        emoji: babol.babols.category?.emoji,
                        name: babol.babols.category?.name,
                      },
                      configs: {
                        background: "https://via.placeholder.com/150",
                      },
                      profilesUids: babol.uuids?.map((item:any) => item.profileID?.uuid),
                      countPartecipants: babol.countPartecipants || 1
                    }}
                    background={{
                      source: babol?.babols?.configs?.background,
                      dark: babol?.babols?.configs?.background == 'bg-2' || babol?.babols?.configs?.background == 'bg-3' || babol?.babols?.configs?.background == 'bg-4' || babol?.babols?.configs?.background == 'bg-5'
                    }}
                    ratio={5}
                  />
                ))}
            </div>
          )}
          {activeTab === "Current" && (
            <div className="flex flex-row gap-4 justify-center mt-xl flex-wrap md:w-5/6 w-full">
              {currentBabols.length > 0 &&
                currentBabols.map((babol: any, index: number) => (
                  <BabolCard
                    key={index}
                    babol={{
                      id: babol.babols.id,
                      name: `${babol.babols.name}`,
                      from_date: babol.babols.from_date,
                      to_date: babol.babols.to_date,
                      category: {
                        emoji: babol.babols.category?.emoji,
                        name: babol.babols.category?.name,
                      },
                      configs: {
                        background: "https://via.placeholder.com/150",
                      },
                      profilesUids: babol.uuids?.map((item:any) => item.profileID?.uuid),
                      countPartecipants: babol.countPartecipants || 1
                    }}
                    background={{
                      source: babol?.babols?.configs?.background,
                      dark: babol?.babols?.configs?.background == 'bg-2' || babol?.babols?.configs?.background == 'bg-3' || babol?.babols?.configs?.background == 'bg-4' || babol?.babols?.configs?.background == 'bg-5'
                    }}
                    ratio={5}
                  />
                ))}
              {currentBabols.length === 0 && !isLoading && (
                <div className="w-full min-h-[calc(100vh-200px)] flex justify-center items-center flex-col text-center">
                  <Image
                    src={emptyCurrent}
                    width={264}
                    height={240}
                    alt="Empty babols"
                  />
                  <p className="font-satoshiBold text-2xl">
                    There are no active babol at the moment
                  </p>
                </div>
              )}
            </div>
          )}
          {activeTab === "Upcoming" && (
            <div className="flex flex-row gap-4 justify-center mt-xl flex-wrap md:w-5/6 w-full">
              {upcomingBabols.length > 0 &&
                upcomingBabols.map((babol: any, index: number) => (
                  <BabolCard
                    key={index}
                    babol={{
                      id: babol.babols.id,
                      name: `${babol.babols.name}`,
                      from_date: babol.babols.from_date,
                      to_date: babol.babols.to_date,
                      category: {
                        emoji: babol.babols.category?.emoji,
                        name: babol.babols.category?.name,
                      },
                      configs: {
                        background: "https://via.placeholder.com/150",
                      },
                      profilesUids: babol.uuids?.map((item:any) => item.profileID?.uuid),
                      countPartecipants: babol.countPartecipants || 1
                    }}
                    background={{
                      source: babol?.babols?.configs?.background,
                      dark: babol?.babols?.configs?.background == 'bg-2' || babol?.babols?.configs?.background == 'bg-3' || babol?.babols?.configs?.background == 'bg-4' || babol?.babols?.configs?.background == 'bg-5'
                    }}
                    ratio={5}
                  />
                ))}
              {upcomingBabols.length === 0 && !isLoading && (
                <div className="w-full min-h-[calc(100vh-200px)] flex justify-center items-center flex-col text-center">
                  <Image
                    src={emptyUpcoming}
                    width={264}
                    height={240}
                    alt="Empty babols"
                  />
                  <p className="font-satoshiBold text-2xl">
                    There are no upcoming babol
                  </p>
                </div>
              )}
            </div>
          )}
          {activeTab === "Past" && (
            <div className="flex flex-row gap-4 justify-center mt-xl flex-wrap md:w-5/6 w-full">
              {pastBabols.length > 0 &&
                pastBabols.map((babol: any, index: number) => (
                  <BabolCard
                    key={index}
                    babol={{
                      id: babol.babols.id,
                      name: `${babol.babols.name}`,
                      from_date: babol.babols.from_date,
                      to_date: babol.babols.to_date,
                      category: {
                        emoji: babol.babols.category?.emoji,
                        name: babol.babols.category?.name,
                      },
                      configs: {
                        background: "https://via.placeholder.com/150",
                      },
                      profilesUids: babol.uuids?.map((item:any) => item.profileID?.uuid),
                      countPartecipants: babol.countPartecipants || 1
                    }}
                    background={{
                      source: babol?.babols?.configs?.background,
                      dark: babol?.babols?.configs?.background == 'bg-2' || babol?.babols?.configs?.background == 'bg-3' || babol?.babols?.configs?.background == 'bg-4' || babol?.babols?.configs?.background == 'bg-5'
                    }}
                    ratio={5}
                  />
                ))}
              {pastBabols.length === 0 && !isLoading && (
                <div className="w-full min-h-[calc(100vh-200px)] flex justify-center items-center flex-col text-center">
                  <Image
                    src={emptyPast}
                    width={264}
                    height={240}
                    alt="Empty babols"
                  />
                  <p className="font-satoshiBold text-2xl">
                    There are no past babol
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      )}
      {!babols?.length && !isLoading && (
        <div className="w-full min-h-[calc(100vh-200px)] flex justify-center items-center flex-col">
          <Image
            src={emptyBabols}
            width={264}
            height={240}
            alt="Empty babols"
          />
          <p className="font-satoshiBold text-2xl">No babol here yet</p>
          <p>To create a new babol download the app</p>
        </div>
      )}
      {!babols && (
        <>
          <div className="flex flex-row gap-xs w-full justify-center">
            {tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  className={`p-sm rounded-sm text-3 min-w-xl text-center ${
                    activeTab == tab
                      ? "bg-white text-black"
                      : "bg-surfaceExtraDark text-white"
                  } cursor-pointer`}
                  onClick={() => {
                    setActiveTab(tab);
                  }}
                >
                  {tab}
                </div>
              );
            })}
          </div>
          <div className="flex flex-row gap-4 justify-center mt-xl flex-wrap w-5/6">
            {[1, 2, 3, 4].map((item) => (
              <BabolSkeleton key={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
