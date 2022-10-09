import React from "react";
import { useEffect } from "react";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { withAlert } from "./withProvider";
import { GoAlert, GoThumbsup } from "react-icons/go";

const themeMap = {
  success: {
    color: "bg-green-400",
    Icon: GoThumbsup,
  },
  error: {
    color: "bg-primary-default",
    Icon: GoAlert,
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
    <div className="max-w-5xl mx-auto mb-2 bg-white border-4 border-primary-dark">
      <div
        className={
          "flex items-center justify-between h-10 mx-auto text-center " + color
        }
      >
        <div className="flex items-center w-10 h-10 text-center bg-gray-500">
          <Icon className="text-3xl text-primary-default" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{type}</h1>
        </div>
        <div className="text-2xl font-bold">{message}</div>
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
