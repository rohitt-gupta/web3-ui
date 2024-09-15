"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Eth, Matic } from "@/icons/coins";
import { Fuel, Swapr, Trade } from "@/icons";
import { ChevronDown, ChevronsRight, MoveRight, Settings2 } from "lucide-react";
import { useState } from "react";
import ViewRoutes from "./ViewRoutes";
import { sfPro } from "@/fonts";

export default function SwapComponent() {
  const [fromCurrency, setFromCurrency] = useState("ETH");
  const [toCurrency, setToCurrency] = useState("MATIC");
  const [receiveUSDT, setReceiveUSDT] = useState(false);
  const [showRoutes, setShowRoutes] = useState(false);

  return (
    <div className="flex flex-row gap-4">
      <div>
        <Card className="shadow-md mx-auto border-none w-full">
          <CardHeader className="flex flex-row justify-between items-center space-y-0 py-4 pb-2">
            <CardTitle className={`font-semibold text-base ${sfPro.className}`}>Swap</CardTitle>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Settings2 className="w-5 h-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="bg-[#f8f8f8] mb-4 p-4 rounded-2xl">
              <div className="flex justify-start text-sm">
                <span className="font-semibold text-lightFont text-xs uppercase">
                  You sell
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    defaultValue="0.0"
                    className="shadow-none px-0 pr-16 border-none focus:ring-0 h-14 font-medium text-4xl focus:outline-none caret-blue-600"
                  />
                  <div className="right-0 absolute inset-y-0 flex items-center">
                    <Select
                      value={fromCurrency}
                      onValueChange={setFromCurrency}
                    >
                      <SelectTrigger className="flex items-center border-0 bg-[#ededed] shadow-none rounded-xl w-[96px] h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ETH">
                          <div className="flex gap-1 font-semibold text-sm">
                            <Eth />
                            ETH
                          </div>
                        </SelectItem>
                        <SelectItem value="BTC">BTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium text-lightFont text-xs">
                  $1,033.85
                </div>
                <div className="flex items-center gap-1 font-semibold text-xs">
                  <p className="font-medium text-lightFont">Balance: 7.27</p>
                  <p className="font-semibold text-[#6F58F6]">Use MAX</p>
                </div>
              </div>
            </div>

            <div className="relative left-[45%] z-10 flex justify-center bg-white -my-4 p-1 w-8 h-8">
              <Trade />
            </div>

            <div className="bg-[#f8f8f8] mt-4 p-4 rounded-2xl">
              <div className="flex justify-start text-sm">
                <span className="font-semibold text-lightFont text-xs uppercase">
                  You receive
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    defaultValue="1167.8987"
                    className="shadow-none px-0 pr-16 border-none focus:ring-0 h-14 font-medium text-4xl text-primary focus:outline-none caret-blue-600"
                  />
                  <div className="right-0 absolute inset-y-0 flex items-center">
                    <Select value={toCurrency} onValueChange={setToCurrency}>
                      <SelectTrigger className="flex items-center border-0 bg-[#ededed] shadow-none rounded-xl w-28 h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MATIC">
                          <p className="flex gap-1">
                            <Matic /> MATIC
                          </p>
                        </SelectItem>
                        <SelectItem value="USDT">USDT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium text-muted-foreground text-sm">
                  $1,070.68
                </div>
                <div className="font-medium text-lightFont text-xs">
                  BALANCE: 1500
                </div>
              </div>
            </div>

            <Button className="flex gap-2 bg-primary mt-6 py-6 rounded-xl w-full font-semibold text-base text-white">
              Swap with Swapr <Swapr />
            </Button>

            <div className="flex justify-between items-center border-input bg-background shadow-none mt-4 py-6 border rounded-xl w-full">
              <span className="pl-4 text-muted-foreground text-sm">
                Receive USDT to another wallet
              </span>
              <Switch
                className="data-[state=unchecked]:bg-gray-100 mr-4 rounded-full transition-colors duration-200 ease-in-out"
                checked={receiveUSDT}
                onCheckedChange={setReceiveUSDT}
                aria-label="Receive USDT to another wallet"
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${receiveUSDT ? "translate-x-4" : "translate-x-0"
                    }`}
                />
              </Switch>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center bg-white shadow-md mt-4 px-3 py-1 border rounded-xl text-muted-foreground text-sm">
          <div className="flex justify-start items-center gap-1">
            <Swapr />
            <span className="font-semibold">Swapr</span>
            <MoveRight className="font-thin" size={18} />
            <div className="flex items-center gap-1 bg-violet-50 ml-2 p-2 rounded-lg text-primary text-xs">
              <Fuel /> Best Rates
            </div>
            <div className="flex items-center bg-green-100 ml-2 p-2 rounded-lg text-green-500 text-xs">
              Best returns
            </div>
            <ChevronDown className="m-2 p-2 border rounded-lg w-8 h-8" />
          </div>
          <div
            onClick={() => setShowRoutes(true)}
            className="flex items-center font-medium text-primary text-xs hover:underline cursor-pointer"
          >
            View all routes <ChevronsRight className="w-3 h-3" />
          </div>
        </div>
      </div>
      {showRoutes && (
        <div className="flex justify-center items-start transition-all duration-100">
          <ViewRoutes onClose={() => setShowRoutes(false)} />
        </div>
      )}
    </div>
  );
}
