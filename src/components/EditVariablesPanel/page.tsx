'use client'
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ReplayIcon from '@mui/icons-material/Replay';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface EditVariablesPanelProps {
  onClose: () => void;
}

const EditVariablesPanel = ({ onClose }: EditVariablesPanelProps) => {
  const [selectedVariables, setSelectedVariables] = useState<string[]>(['Fleet Sizing']);
  const [showDescription, setShowDescription] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowDescription(true);
    }, 1500); 
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const toggleVariable = (variable: string) => {
    setSelectedVariables(prev => {
      const newSelection = prev.includes(variable) 
        ? prev.filter(v => v !== variable)
        : [...prev, variable];
      
      if (!newSelection.includes('Co2 Distribution')) {
        setShowDescription(false);
      }
      return newSelection;
    });
  };

  return (
    <div className="fixed top-0 right-0 h-full w-[48%] bg-[#0E0D0D] border-l border-[#525252] shadow-xl z-50 overflow-y-auto">
      {/* Header Section */}
      <h1 className="text-[22px] text-white pt-3 px-6 flex items-center justify-between">
            <div className="flex items-center gap-2 mt-2">
              Edit Variables
            </div>
            <div onClick={onClose} className="text-white cursor-pointer text-sm">
              <CloseIcon fontSize="small"/>
            </div>
      </h1>
      <div className="flex justify-between space-x-2 items-center p-4">
      <div className="flex items-center space-x-2 bg-[#2C2E334D] border border-[#5A5A5A] rounded px-3 py-1">
            <SearchIcon className="h-4 w-4 text-white" />
            <input
              type="text"
              className="bg-transparent text-white w-72 focus:outline-none text-sm placeholder:text-white"
            />
          </div>
          <button className="bg-[#242424] text-white px-5 py-1.5 border border-gray-600 rounded-lg text-sm flex items-center gap-2">
            <AutoAwesomeIcon className="text-[#B9B9B9]" sx={{ fontSize: 16 }}/>
            <span>Autofill</span>
          </button>
          <button className="bg-[#242424] text-white px-5 py-1.5 border border-gray-600 rounded-lg text-sm flex items-center gap-2">
            <ReplayIcon className="text-[#B9B9B9]" sx={{ fontSize: 16 }}/>
            <span>Rerun</span>
          </button>
      </div>

      {/* Variable Categories */}
      <div className="p-4">
        <div className="bg-[#161618] border border-[#525252] rounded-t-lg p-6">
          {/* Category 1 */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-300 mb-2">
              Variable Category 1
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-[#333333] text-gray-300 rounded-full text-sm border border-[#525252] flex items-center justify-between min-w-[160px]">
                <span>Carbon 1</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  <AddIcon sx={{ fontSize: 16 }}/>
                </div>
              </button>
              <button 
                onClick={() => toggleVariable('Co2 Distribution')}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`px-4 py-2 ${
                  selectedVariables.includes('Co2 Distribution')
                    ? 'bg-[#525252] text-[#DCFF7FFD] border-[#DCFF7FFD]'
                    : 'bg-[#333333] text-gray-300 border-[#525252]'
                } rounded-full text-sm border flex items-center justify-between min-w-[160px]`}
              >
                <span>Co2 Distribution</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  {selectedVariables.includes('Co2 Distribution') 
                    ? <DoneIcon sx={{ fontSize: 16 }}/> 
                    : <AddIcon sx={{ fontSize: 16 }}/>
                  }
                </div>
              </button>
              <button 
                onClick={() => toggleVariable('Fleet Sizing')}
                className={`px-4 py-2 ${
                  selectedVariables.includes('Fleet Sizing')
                    ? 'bg-[#525252] text-[#DCFF7FFD] border-[#DCFF7FFD]'
                    : 'bg-[#333333] text-gray-300 border-[#525252]'
                } rounded-full text-sm border flex items-center justify-between min-w-[160px]`}
              >
                <span>Fleet Sizing</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  {selectedVariables.includes('Fleet Sizing') 
                    ? <DoneIcon sx={{ fontSize: 16 }}/> 
                    : <AddIcon sx={{ fontSize: 16 }}/>
                  }
                </div>
              </button>
            </div>
          </div>

          {/* Category 2 */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-300 mb-2">
              Variable Category 2
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-[#333333] text-gray-300 rounded-full text-sm border border-[#525252] flex items-center justify-between min-w-[160px]">
                <span>Parking Rate</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  <AddIcon sx={{ fontSize: 16 }}/>
                </div>
              </button>
              <button className="px-4 py-2 bg-[#525252] text-[#DCFF7FFD] rounded-full text-sm border border-[#DCFF7FFD] flex items-center justify-between min-w-[160px]">
                <span>Border Rate</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  <DoneIcon sx={{ fontSize: 16 }}/>
                </div>
              </button>
              <button className="px-4 py-2 bg-[#525252] text-[#DCFF7FFD] rounded-full text-sm border border-[#DCFF7FFD] flex items-center justify-between min-w-[160px]">
                <span>Request Rate</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  <DoneIcon sx={{ fontSize: 16 }}/>
                </div>
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="px-4 py-2 bg-[#333333] text-gray-300 rounded-full text-sm border border-[#525252] flex items-center justify-between min-w-[160px]">
                <span>Variable 1</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  <AddIcon sx={{ fontSize: 16 }}/>
                </div>
              </button>
              <button className="px-4 py-2 bg-[#333333] text-gray-300 rounded-full text-sm border border-[#525252] flex items-center justify-between min-w-[160px]">
                <span>Variable 1</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  <AddIcon sx={{ fontSize: 16 }}/>
                </div>
              </button>
              <button className="px-4 py-2 bg-[#525252] text-[#DCFF7FFD] rounded-full text-sm border border-[#DCFF7FFD] flex items-center justify-between min-w-[160px]">
                <span>Variable 1</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  <DoneIcon sx={{ fontSize: 16 }}/>
                </div>
              </button>
            </div>
          </div>

          {/* Category 3 */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-300 mb-2">
              Variable Category 3
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-[#333333] text-gray-300 rounded-full text-sm border border-[#525252] flex items-center justify-between min-w-[160px]">
                <span>Variable 1</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  <AddIcon sx={{ fontSize: 16 }}/>
                </div>
              </button>
              <button className="px-4 py-2 bg-[#525252] text-[#DCFF7FFD] rounded-full text-sm border border-[#DCFF7FFD] flex items-center justify-between min-w-[160px]">
                <span>Variable 1</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  <DoneIcon sx={{ fontSize: 16 }}/>
                </div>
              </button>
              <button className="px-4 py-2 bg-[#525252] text-[#DCFF7FFD] rounded-full text-sm border border-[#DCFF7FFD] flex items-center justify-between min-w-[160px]">
                <span>Variable 1</span>
                <div className="flex items-center gap-1 ml-3">
                  <AutoAwesomeIcon sx={{ fontSize: 16 }}/>
                  <DoneIcon sx={{ fontSize: 16 }}/>
                </div>
              </button>
            </div>
          </div>
        </div>

          {/* Description Section */}
        <div className={`bg-[#222324] border border-[#525252] rounded-b-lg p-10 ${!showDescription ? 'hidden' : ''}`}>
          <p className="text-lg font-semibold text-gray-300 flex items-center gap-1">
            Co2 Distribution
            <InfoOutlinedIcon sx={{ fontSize: 16 }} className="text-white"/>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            But what truly sets Switch apart is its versatility. It can be used as
            a scooter, a bike, or even a skateboard, making it suitable for
            people of all ages. Whether you're a student, a professional, or a
            senior citizen, Switch adapts to your needs and lifestyle.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="p-4 -mt-4 flex flex-col gap-2">
        <button className="w-full px-3 py-4 bg-[#222324] text-[#DCFF7FFD] rounded-md text-[18px] border border-[#525252] text-left flex items-center justify-between">
          <span>Primary Variables</span>
          <p className="bg-[#242424] text-white px-2 py-0.5 border-[0.5px] border-[#DCFF7FFD] rounded-full flex items-center justify-center">
            <span className="material-icons text-xs text-[#DCFF7FFD]"><KeyboardArrowUpIcon/></span>
          </p>
        </button>
        <button className="w-full px-3 py-4 bg-[#222324] text-[#DCFF7FFD] rounded-md text-[18px] border border-[#525252] text-left flex items-center justify-between">
          <span>Secondary Variables</span>
          <p className="bg-[#242424] text-white px-2 py-0.5 border-[0.5px] border-[#DCFF7FFD] rounded-full flex items-center justify-center">
            <span className="material-icons text-xs text-[#DCFF7FFD]"><KeyboardArrowUpIcon/></span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default EditVariablesPanel;
