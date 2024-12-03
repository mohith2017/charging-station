import React from "react";
import { Card } from "@/components/ui/card";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Indicators() {
  return (
            <div className="grid grid-cols-2 gap-4 h-[420px] -ml-16 -mr-8 pr-6">
        <Card className="bg-[#222324] border border-[#525252] p-5 flex flex-col items-start justify-between rounded-lg relative">
            <div className="mt-4">
                <div className="flex items-center gap-4">
                    <p className="text-sm text-white">Infrastructure Units</p>
                    <HelpOutlineIcon className="text-white" sx={{ fontSize: 16 }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">This describes variable two and what the shown data means.</p>
            </div>
            <p className="text-2xl font-bold text-white absolute bottom-6 right-4">€421.07</p>
        </Card>
        <Card className="bg-[#222324] border border-[#525252] p-5 flex flex-col items-start justify-between rounded-lg relative">
            <div className="mt-4">
                <div className="flex items-center gap-6">
                    <p className="text-sm text-white">Charging Growth</p>
                    <HelpOutlineIcon className="text-white" sx={{ fontSize: 16 }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">This describes variable two and what the shown data means.</p>
            </div>
            <p className="text-2xl font-bold text-white absolute bottom-6 right-4">33.07</p>
        </Card>
        <Card className="bg-[#222324] border border-[#525252] p-5 flex flex-col items-start justify-between rounded-lg relative">
            <div className="mt-4">
                <div className="flex items-center gap-3">
                    <p className="text-sm text-white">Localization Change</p>
                    <HelpOutlineIcon className="text-white" sx={{ fontSize: 16 }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">This describes variable two and what the shown data means.</p>
            </div>
            <p className="text-2xl font-bold text-white absolute bottom-6 right-4">21.9%</p>
        </Card>
        <Card className="bg-[#222324] border border-[#525252] p-5 flex flex-col items-start justify-between rounded-lg relative">
            <div className="mt-4">
                <div className="flex items-center gap-14">
                    <p className="text-sm text-white">Fleet Growth</p>
                    <HelpOutlineIcon className="text-white" sx={{ fontSize: 16 }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">This describes variable two and what the shown data means.</p>
            </div>
            <p className="text-2xl font-bold text-white absolute bottom-6 right-4">7.03%</p>
        </Card>
        </div>

  );
}
