import { useContext } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && <FaExclamationTriangle />}
        <p className="flex-1 text-base font-semibold leading-7 text-black">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
}

export default Alert;
