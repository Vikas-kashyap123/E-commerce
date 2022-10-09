import React from "react";
import { useEffect } from "react";
import { MdOutlineDoNotDisturbOn, MdOutlineDangerous } from "react-icons/md";
import { withAlert } from "./withProvider";
// import { AioutlineCheckCircle } from "react-icons/ai";

const themeMap = {
  success: {
    color: "bg-green-400",
    Icon: MdOutlineDangerous,
  },
  error: {
    color: "bg-primary-default",
    Icon: MdOutlineDangerous,
  },
};

function AlertCard({ alert, handleAlertRemove }) {
  useEffect(
    function () {
      if (alert) {
        const timeout = setTimeout(handleAlertRemove, 5 * 1000);
        return function () {
          clearTimeout(timeout);
        };
      }
    },
    [alert]
  );

  if (!alert) {
    return <div></div>;
  }

  const { message, type } = alert;
  const { Icon, color } = themeMap[type];

  return (
    <div className="max-w-5xl mb-2 ml-20 bg-white border-4 border-t-primary-dark">
      <div
        className={
          "flex items-center justify-around h-10 mx-auto text-center " + color
        }
      >
        <div>
          <Icon className="text-3xl text-gray-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{type}</h1>
        </div>
        <div>{message}</div>
        <div>
          <MdOutlineDoNotDisturbOn
            onClick={handleAlertRemove}
            className="text-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default withAlert(AlertCard);
