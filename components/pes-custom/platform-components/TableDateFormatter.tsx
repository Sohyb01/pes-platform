import React from "react";

const TableDateFormatter = ({ date }: { date: Date }) => {
  return (
    <div className="font-medium">
      {"" + date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()}
    </div>
  );
};

export default TableDateFormatter;
