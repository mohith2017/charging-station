import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DropDownMenu() {
  return (
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
  );
}
