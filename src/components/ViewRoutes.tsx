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
import { Fuel, Swapr } from "@/icons";
import { ChevronsLeft } from "lucide-react";
import { sfPro } from "@/fonts";
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

const ViewRoutes = ({ onClose }: { onClose: () => void }) => {
  return (
    <Card className="shadow-md mx-auto border-none w-full">
      <div className="flex flex-row justify-between items-center p-1 pl-4">
        <h2 className={`${sfPro.className} font-semibold text-base`}>Select route</h2>
        <Button
          variant="ghost"
          className="bg-gray-100 rounded-lg"
          size="icon"
          onClick={onClose}
        >
          <ChevronsLeft className="w-5 h-5" />
        </Button>
      </div>
      <p className="p-4 font-semibold text-lightFont text-xs">
        Best route is selected based on net output after gas fees.
      </p>
      <CardContent>
        {routes.map((route, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-20 py-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center rounded-full w-10 h-10">
                {typeof route.icon === "string" ? route.icon : route.icon}
              </div>
              <div>
                <p className="font-medium">{route.name}</p>
                {/* <p className="text-gray-500 text-xs">{route.value}</p> */}
              </div>
            </div>
            <div className="flex items-start gap-2">
              {route.best ? (
                <span className="bg-green-100 p-1 rounded-lg font-semibold text-green-500 text-xs">
                  Best Return
                </span>
              ) : (
                <span className="bg-red-100 p-1 rounded-lg font-semibold text-red-500 text-xs">
                  {route.fee}
                </span>
              )}
              <span className="flex bg-gray-100 p-1 rounded-lg font-semibold text-xs">
                <Fuel /> {route.fuel}
              </span>
              <div className="text-right flex flex-col font-semibold">
                <span className="text-base">{route.value}</span>
                <span className="text-lightFont text-sm">
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
