'use client'
import { Select, SelectContent, SelectItem} from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Dummy Data for the Graph
const dummyGraphData = [
  { month: "Apr", value: 20000 },
  { month: "May", value: 40000 },
  { month: "Jun", value: 60000 },
  { month: "Jul", value: 100000 },
  { month: "Aug", value: 50000 },
  { month: "Sep", value: 30000 },
  { month: "Oct", value: 70000 },
];

// Inside the Graph Section
export default function Graph() {
  return (
    <>
   
  {/* Graph */}
  <ResponsiveContainer width="90%" height={400}>
    <LineChart data={dummyGraphData} margin={{ top: 100, right: 30, left: 15, bottom:40 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
      <XAxis 
        dataKey="month" 
        stroke="#fff" 
        tick={{ fill: "#fff" }}
        label={{ 
          value: 'Now', 
          position: 'bottom',
          offset: 20,
          fill: '#666',
          fontSize: 12,
          dx: -188
        }}
        dy={25}
      />
      <YAxis 
        stroke="#fff" 
        tick={{ fill: "#fff" }}
        tickFormatter={(value) => `$${value/1000}k`}
        dx={-20}
      />
      <Tooltip 
        contentStyle={{ backgroundColor: "#333", border: "none" }}
        cursor={{
          stroke: "#E0FF7F",
          strokeDasharray: "5 5",
          strokeWidth: 2,
        }}
        formatter={(value:any) => [`$${value/1000}k`, 'Value']}
      />
      <Line 
        type="linear" 
        dataKey="value" 
        stroke="#C8E972" 
        strokeWidth={2} 
        activeDot={{ fill: "rgba(200, 233, 114, 0.2)", stroke: "#E0FF7F", r: 6 }} 
        dot={{ fill: "transparent", stroke: "#C8E972", r: 4 }}
      />
    </LineChart>
  </ResponsiveContainer>
   
    </>
  );
}
