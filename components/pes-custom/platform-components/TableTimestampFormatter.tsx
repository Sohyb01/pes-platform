import { isDate } from "date-fns";
import React from "react";

const TableTimestampFormatter = ({
  date,
}: {
  date: Date | string | unknown;
}) => {
  if (typeof date == "string") {
    const dateobj = new Date(date);
    return (
      <div className="font-medium">
        {`${dateobj.getDay()}/${dateobj.getMonth()}/${dateobj.getFullYear()} ${
          dateobj.getHours() < 10 ? "0" : ""
        }${dateobj.getHours()}:${
          dateobj.getMinutes() < 10 ? "0" : ""
        }${dateobj.getMinutes()}:${
          dateobj.getSeconds() < 10 ? "0" : ""
        }${dateobj.getSeconds()}`}
      </div>
    );
  } else if (isDate(date))
    return (
      <div className="font-medium">
        {`${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${
          date.getHours() < 10 ? "0" : ""
        }${date.getHours()}:${
          date.getMinutes() < 10 ? "0" : ""
        }${date.getMinutes()}:${
          date.getSeconds() < 10 ? "0" : ""
        }${date.getSeconds()}`}
      </div>
    );
  else return <div>No date set</div>;
};

export default TableTimestampFormatter;
