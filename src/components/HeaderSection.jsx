import React, { useState } from "react";
import Navbar from "./Navbar";
import Sheet from "./Sheet";
const HeaderSection = () => {
  const [selectedMonth, setSelectedMonth] = useState("August");
  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
  };
  return (
    <div className="pt-6 bg-headerBg bg-100% min-h-screen bg-no-repeat">
      <Navbar onSelectMonth={handleSelectMonth} />
      {/* months */}
      <Sheet selectedMonth={selectedMonth} />
    </div>
  );
};

export default HeaderSection;
