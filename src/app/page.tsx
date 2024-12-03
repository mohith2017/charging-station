import Image from "next/image";
import Dashboard from "@/components/Dashboard/page";

export const metadata = {
  title: "Charging Station",
  description: "Charging Station",
};

export default function Home() {
  return (
    <>
    <Dashboard />
    </>
  );
}
