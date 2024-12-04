"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Graph from "./graph";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HistoryIcon from '@mui/icons-material/History';  
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Indicators from "./indicators";
import EditVariablesPanel from "@/components/EditVariablesPanel/page";


export default function Dashboard() {
  const [showPanel, setShowPanel] = useState(false);
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <nav className="w-16 bg-black flex flex-col items-center py-6 space-y-6">
        <button className="text-gray-500 hover:text-white">
          <span className="material-icons"><MenuIcon/></span>
        </button>
        <button className="text-gray-500 hover:text-white text-white bg-[#525252] border border-gray-500 rounded-lg p-2">
          <span className="material-icons"><HomeIcon/></span>
        </button>
        <button className="text-gray-500 hover:text-white">
          <span className="material-icons"><NotificationsIcon/></span>
        </button>
        <button className="mt-auto text-gray-500 hover:text-white">
          <span className="material-icons"><AssignmentIcon/></span>
        </button>
        <button className="mt-auto text-gray-500 hover:text-white">
          <span className="material-icons"><CloudUploadIcon/></span>
        </button>
        <button className="text-gray-500 hover:text-white">
          <span className="material-icons"><SettingsIcon/></span>
        </button>

      </nav>

      {/* Main Content */}
      <div className="flex-1 -ml-5 px-6 py-4 bg">
        {/* Top Tabs */}
        <div className="flex justify-between items-center">
          <Tabs defaultValue="charging-stations">
            <TabsList className="space-x-2 bg-black">
              <TabsTrigger 
                value="charging-stations" 
                className="text-white data-[state=active]:bg-[#242424] data-[state=active]:text-white data-[state=active]:px-5 data-[state=active]:py-2 data-[state=active]:border data-[state=active]:border-gray-500">
                  Charging Stations
              </TabsTrigger>
              <TabsTrigger value="fleet-sizing" className="text-white data-[state=active]:bg-[#242424] data-[state=active]:text-white data-[state=active]:px-5 data-[state=active]:py-2 data-[state=active]:border data-[state=active]:border-gray-500">
                Fleet Sizing
              </TabsTrigger>
              <TabsTrigger value="parking" className="text-white data-[state=active]:bg-[#242424] data-[state=active]:text-white data-[state=active]:px-5 data-[state=active]:py-2 data-[state=active]:border data-[state=active]:border-gray-500">
                Parking
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center space-x-2 bg-[#2C2E334D] border border-[#5A5A5A] rounded px-3 py-2">
            <SearchIcon className="h-4 w-4 text-white" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white w-40 focus:outline-none text-sm placeholder:text-white"
            />
          </div>
        </div>

        {/* Best Scenario Results */}
        <div className="bg-[#161618] mt-4 border border-gray-600 rounded-lg">
          <h1 className="text-3xl font-bold text-white pt-6 px-6 flex items-center justify-between">
            <div className="flex items-center gap-2 font-['Roobert_TRIAL'] mt-2">
              <span className="text-white"><ElectricBoltIcon/></span>
              Charging Station
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#242424] text-gray-400 px-1.5 py-1 border border-gray-600 rounded-lg flex items-center justify-center">
                <span className="material-icons text-xs"><HistoryIcon/></span>
              </button>
              
              

              
              <button 
                onClick={() => setShowPanel(true)}
                className="bg-[#242424] text-white px-2 py-1.5 border border-gray-600 rounded-lg text-sm"
              >
                Edit variables
              </button>
              {showPanel && (
                <>
                  <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-[100]"
                    onClick={() => setShowPanel(false)}
                  />
                  <div className="z-[101]">
                    <EditVariablesPanel onClose={() => setShowPanel(false)} />
                  </div>
                </>
              )}

              <button className="bg-[#242424] text-gray-400 px-1.5 py-1 border border-gray-600 rounded-lg flex items-center justify-center">
                <span className="material-icons text-xs"><FileUploadIcon/></span>
              </button>
            </div>
          </h1>
          <section className="mt-6 p-6 rounded-md">
            <h2 className="text-lg font-semibold text-[#DCFF7FFD] flex items-center justify-between">
              <span><AutoAwesomeIcon className="text-[#DCFF7FFD] text-sm"/> Best Scenario Results</span>
              <button className="bg-[#242424] text-white px-2 py-0.5 border-[0.5px] border-[#DCFF7FFD] rounded-full flex items-center justify-center">
                <span className="material-icons text-xs text-[#DCFF7FFD]"><KeyboardArrowUpIcon/></span>
              </button>
            </h2>
            <div className="mt-4 space-y-2">
              <div className="border-[0.5px] border-[#DCFF7FFD] rounded-lg p-3 relative">
                <p className="text-[#DCFF7FFD]">
                  The best found configuration based on profit is characterized by{" "}
                  <span className="font-bold">11 zones</span> (max) with charging
                  stations and <span className="font-bold">48 total number of poles</span>.
                </p>
                <button className="absolute top-2 right-2 text-[#DCFF7FFD] hover:opacity-75">
                  <MoreHorizIcon />
                </button>
              </div>
              <div className="border-[0.5px] border-[#DCFF7FFD] rounded-lg p-3 relative">
                <p className="text-[#DCFF7FFD]">
                  The best found configuration based on satisfied demand is
                  characterized by <span className="font-bold">11 zones</span> (max)
                  with charging stations and <span className="font-bold">48 total number of poles</span>.
                </p>
                <button className="absolute top-2 right-2 text-[#DCFF7FFD] hover:opacity-75">
                  <MoreHorizIcon />
                </button>
              </div>
            </div>
          </section>

          {/* Graphs and KPIs */}
          <div className="grid grid-cols-3 gap-4 p-6">
            <div className="col-span-3 flex justify-between">
              <div className="col-span-2">
                <h3 className="text-lg font-semibold">Graphs</h3>
              </div>
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold mr-20">Key Performance Indicators</h3>
                <button className="bg-black text-white mr-4 px-2 py-1 text-xs border border-gray-700 rounded-lg flex items-center gap-1">
                  Variables
                  <span><AddIcon sx={{ fontSize: 12 }}/></span>
                </button>
              </div>
            </div>

            {/* Graph Section */}
            <section className="col-span-2">
              {/* Graph Placeholder */}
              <div className="h-[420px] w-[92%] bg-[#222324] border border-[#525252] rounded-md flex items-center justify-center relative">
                <div className="absolute top-10 right-16 z-50">
                <Select defaultValue="unsatisfied">
                  <SelectTrigger className="w-[198px] border border-[#525252] bg-[#18181A80]">
                      <SelectValue placeholder="Unsatisfied Demand %" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#18181A] border border-[#525252] text-white">
                      <SelectItem value="unsatisfied">Unsatisfied Demand %</SelectItem>
                      <SelectItem value="satisfied">Satisfied Demand %</SelectItem>
                      <SelectItem value="profit">Profit</SelectItem>
                      <SelectItem value="revenue">Revenue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Graph/>
              </div>
            </section>

            {/* Key Performance Indicators */}
            <div className="col-span-1">
              <Indicators/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
