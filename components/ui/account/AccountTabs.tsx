"use client";

import { Tabs } from "@/components/ui/aceternity/tabs";
import MyProfileTab from "./MyProfileTab";
import RewardsTab from "./RewardsTab";
import CountUp from "react-countup";
import OrdersTab from "./OrdersTab";

export function AccountTabs() {
  const tabs = [
    {
      title: "My Profile",
      value: "profile",
      content: (
        <div className="relative h-full w-full flex-col items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-slate-300 to-slate-400 p-10 text-white   shadow-sm md:text-2xl lg:h-2/3">
          <MyProfileTab />
        </div>
      ),
    },
    {
      title: "My Orders",
      value: "orders",
      content: (
        <div className=" relative h-full w-full flex-col items-center  justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-slate-400 to-slate-500 p-10 text-xl font-bold text-white shadow-sm md:text-4xl lg:h-2/3">
          <p className="mb-4 text-center font-thin uppercase tracking-wider">
            Order History
          </p>
          <OrdersTab />
        </div>
      ),
    },
    {
      title: "Rewards",
      value: "rewards",
      content: (
        <div className=" relative h-full w-full flex-col items-center  justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-slate-500 to-slate-600 p-10 text-xl font-bold text-white shadow-sm md:text-4xl lg:h-2/3">
          <p className="mb-4 text-center font-thin uppercase tracking-wider">
            My Rewards
          </p>
          <p className="mb-8 text-center text-sm font-thin leading-tight tracking-normal lg:text-lg">
            At Sneakers, we value your loyalty. Earn points with every order and
            unlock <span className="text-amber-200">exclusive discounts.</span>{" "}
            <br /> The more you shop, the{" "}
            <span className="text-emerald-400">more you save.</span>
          </p>
          <RewardsTab />
          <div className="mt-4 flex items-center justify-center gap-2 text-2xl font-thin  tracking-wider text-emerald-300 lg:mt-0">
            {" "}
            <CountUp end={340} />
            <span>POINTS</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="b relative mx-auto my-4 flex h-[50rem] w-3/4 max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem] lg:my-20 lg:w-full">
      <Tabs tabs={tabs} />
    </div>
  );
}
