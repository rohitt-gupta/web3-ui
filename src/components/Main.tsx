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
import { Fuel, Swapr, Trade } from "@/icons/others";
import { ChevronDown, ChevronsRight, MoveRight, Settings2 } from "lucide-react";
import { useState } from "react";
import ViewRoutes from "./ViewRoutes";

export default function SwapComponent() {
  const [fromCurrency, setFromCurrency] = useState("ETH");
  const [toCurrency, setToCurrency] = useState("MATIC");
  const [receiveUSDT, setReceiveUSDT] = useState(false);
  const [showRoutes, setShowRoutes] = useState(false);

  return (
    <div className="flex flex-row gap-4 ">
      <div>
        <Card className="w-full  mx-auto border-none">
          <CardHeader className="flex flex-row py-4 items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">Swap</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings2 className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="pt-0 p-2">
            <div className="rounded-2xl bg-[#f8f8f8] p-4 mb-4">
              <div className="flex justify-start text-sm">
                <span className="text-lightFont font-semibold uppercase text-xs">
                  You sell
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    defaultValue="0.0"
                    className="text-4xl font-medium focus:outline-none focus:ring-0 pr-16 px-0 h-14 border-none shadow-none caret-blue-600"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <Select
                      value={fromCurrency}
                      onValueChange={setFromCurrency}
                    >
                      <SelectTrigger className="border-0 shadow-none bg-[#ededed] h-10 rounded-xl w-[96px] flex items-center">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ETH">
                          <div className="flex gap-1 text-sm font-semibold">
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
                <div className="text-xs font-medium text-lightFont">
                  $1,033.85
                </div>
                <div className="text-xs font-semibold flex gap-1 items-center">
                  <p className="text-lightFont font-medium">Balance: 7.27</p>
                  <p className="text-[#6F58F6] font-semibold">Use MAX</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center bg-white left-[45%] h-8 w-8 p-1 -my-4 z-10">
              <Trade />
            </div>

            <div className="rounded-2xl bg-[#f8f8f8] p-4 mt-4">
              <div className="flex justify-start text-sm">
                <span className="text-lightFont font-semibold uppercase text-xs">
                  You receive
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    defaultValue="1167.8987"
                    className="text-4xl text-primary font-medium focus:outline-none focus:ring-0 pr-16 px-0 h-14 border-none shadow-none caret-blue-600"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <Select value={toCurrency} onValueChange={setToCurrency}>
                      <SelectTrigger className="border-0 shadow-none bg-[#ededed] h-10 rounded-xl w-28 flex items-center">
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
                <div className="text-sm font-medium text-muted-foreground">
                  $1,070.68
                </div>
                <div className="text-xs text-lightFont font-medium">
                  BALANCE: 1500
                </div>
              </div>
            </div>

            <Button className="w-full flex gap-2 mt-6 text-base font-semibold bg-primary rounded-xl text-white py-6">
              Swap with Swapr <Swapr />
            </Button>

            <div className="flex py-6 rounded-xl shadow-none w-full items-center justify-between mt-4 border border-input bg-background">
              <span className="text-sm text-muted-foreground pl-4">
                Receive USDT to another wallet
              </span>
              <Switch
                className="data-[state=unchecked]:bg-gray-100 rounded-full transition-colors duration-200 ease-in-out mr-4"
                checked={receiveUSDT}
                onCheckedChange={setReceiveUSDT}
                aria-label="Receive USDT to another wallet"
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                    receiveUSDT ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </Switch>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center bg-white border py-1 rounded-xl px-3 justify-between mt-4 text-sm text-muted-foreground">
          <div className="flex gap-1 justify-start items-center">
            <Swapr />
            <span className="font-semibold">Swapr</span>
            <MoveRight className="font-thin" size={18} />
            <div className="flex gap-1 items-center ml-2 bg-violet-50 text-primary rounded-lg p-2 text-xs">
              <Fuel /> Best Rates
            </div>
            <div className="flex items-center ml-2 bg-green-100 text-green-500 rounded-lg p-2 text-xs">
              Best returns
            </div>
            <ChevronDown className="w-8 h-8 rounded-lg p-2 border m-2" />
          </div>
          <div
            onClick={() => setShowRoutes(true)}
            className="flex items-center text-xs text-primary cursor-pointer hover:underline font-medium"
          >
            View all routes <ChevronsRight className="h-3 w-3" />
          </div>
        </div>
      </div>
      {showRoutes && (
        <div className=" flex justify-center items-start">
          <ViewRoutes onClose={() => setShowRoutes(false)} />
        </div>
      )}
    </div>
  );
}
