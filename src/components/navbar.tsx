import { Link } from "react-router-dom";
import { useUI } from "../hooks";

export function Navbar() {
  const { currentPallet } = useUI();
  return (
    <div
      style={{
        background: currentPallet.background + "90",
      }}
      className="h-14 py-2 px-4 flex justify-between shadow-lg shadow-black/5 z-10 sticky top-0 left-0"
    >
      <Link to="/">
        <img src="/icon.svg" alt="logo icon" className="w-24 h-24 -mt-5" />
      </Link>

      <div
        style={{
          color: currentPallet.text1,
        }}
        className="flex items-center gap-3 text-lg font-meduim"
      >
        <Link to="/settings" className="hover:underline">
          Settings
        </Link>
        <Link to="/analytics" className="hover:underline">
          Analytics
        </Link>
      </div>
    </div>
  );
}
