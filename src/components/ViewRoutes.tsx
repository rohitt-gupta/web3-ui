import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CowSwap,
  Enso,
  OneInch,
  OpenOcean,
  Paraswap,
  ZeroX,
} from "@/icons/coins";
import { Fuel, Swapr } from "@/icons/others";
import { ChevronsLeft } from "lucide-react";

const ViewRoutes = ({ onClose }: { onClose: () => void }) => {
  const routes = [
    {
      name: "Swapr",
      icon: <Swapr />,
      value: "84.4335 USDC",
      fee: "-0.23%",
      fuel: "$24,24",
      best: true,
    },
    {
      name: "Cowswap",
      icon: <CowSwap />,
      value: "84.4335 USDC",
      fee: "-0.23%",
      fuel: "$24,24",
    },
    {
      name: "Paraswap",
      icon: <Paraswap />,
      value: "84.4335 USDC",
      fee: "-0.23%",
      fuel: "$24,24",
    },
    {
      name: "Enso",
      icon: <Enso />,
      value: "84.4335 USDC",
      fee: "-0.23%",
      fuel: "$24,24",
    },
    {
      name: "1inch",
      icon: <OneInch />,
      value: "84.4335 USDC",
      fee: "-0.23%",
      fuel: "$24,24",
    },
    {
      name: "OpenOcean",
      icon: <OpenOcean />,
      value: "84.4335 USDC",
      fee: "-0.23%",
      fuel: "$24,24",
    },
    {
      name: "0x",
      icon: <ZeroX />,
      value: "83.4335 USDC",
      fee: "-0.23%",
      fuel: "$24,24",
    },
  ];

  return (
    <Card className="w-full border-none    mx-auto">
      <div className="flex p-1 pl-4 flex-row items-center  justify-between">
        <h2>Select route</h2>
        <Button
          variant="ghost"
          className="bg-gray-100 rounded-lg"
          size="icon"
          onClick={onClose}
        >
          <ChevronsLeft className="h-5 w-5" />
        </Button>
      </div>
      <p className=" p-4 text-xs text-lightFont font-semibold">
        Best route is selected based on net output after gas fees.
      </p>
      <CardContent>
        {routes.map((route, index) => (
          <div
            key={index}
            className="flex items-center gap-20 justify-between py-4  "
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center  rounded-full">
                {typeof route.icon === "string" ? route.icon : route.icon}
              </div>
              <div>
                <p className="font-medium">{route.name}</p>
                {/* <p className="text-xs text-gray-500">{route.value}</p> */}
              </div>
            </div>
            <div className="flex gap-2 items-start">
              {route.best ? (
                <span className="bg-green-100 text-green-500 font-semibold text-xs rounded-lg p-1">
                  Best Return
                </span>
              ) : (
                <span className="text-xs bg-red-100 text-red-500 rounded-lg p-1 font-semibold">
                  {route.fee}
                </span>
              )}
              <span className="bg-gray-100 flex text-xs font-semibold p-1 rounded-lg">
                <Fuel /> {route.fuel}
              </span>
              <div className="flex text-right flex-col font-semibold">
                <span className="text-base">{route.value}</span>
                <span className="text-sm text-lightFont">
                  ${route.value.split(" ")[0]} after Fees
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ViewRoutes;
