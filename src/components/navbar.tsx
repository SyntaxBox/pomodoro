import { Link, useNavigate } from "react-router-dom";
import { useUI } from "../hooks";
import { Button, LinkButton, Container } from "../ui";
import github from "../assets/images/github.svg";
import {
  BellOff,
  BellRing,
  Bolt,
  BookText,
  ChartNoAxesCombined,
  Volume2,
  VolumeOff,
} from "lucide-react";
import { useSettings } from "../hooks/useSettings";
import { ToggleFullscreen } from "./toggle-fullscreen";

export function Navbar() {
  const { currentPallet } = useUI();
  const navigate = useNavigate();
  return (
    <nav
      style={{
        background: currentPallet.background + "90",
      }}
      className="h-14 shadow-lg shadow-black/5 z-50 backdrop-blur-sm sticky top-0 left-0"
    >
      <Container as="div" className="flex justify-between py-2">
        <Link to="/">
          <img src="/icon.svg" alt="logo icon" className="w-24 h-24 -mt-6" />
        </Link>

        <div
          style={{
            color: currentPallet.text1,
          }}
          className="flex items-center gap-3 text-lg font-meduim"
        >
          <LinkButton pallet={currentPallet} to="/settings">
            <Bolt />
          </LinkButton>
          <LinkButton pallet={currentPallet} to="/stats">
            <ChartNoAxesCombined />
          </LinkButton>
          <ToggleSound />
          <ToggleNotifications />
          <ToggleFullscreen />
        </div>
        <div
          style={{
            color: currentPallet.text1,
          }}
          className="flex items-center gap-3 text-lg font-meduim"
        >
          <LinkButton
            title="Read More About the Project"
            pallet={currentPallet}
            to="/"
          >
            <BookText />
          </LinkButton>

          <LinkButton
            title="Read More About the Project"
            pallet={currentPallet}
            to="/"
          >
            <img src={github} alt="github icon" className="w-6 h-6" />
          </LinkButton>
        </div>
      </Container>
    </nav>
  );
}

function ToggleNotifications() {
  const { isNotificationEnabled, updateSettings } = useSettings();
  const { currentPallet } = useUI();
  return (
    <Button
      pallet={currentPallet}
      onClick={() =>
        updateSettings({ isNotificationEnabled: !isNotificationEnabled })
      }
      className="cursor-pointer p-2"
      title="Toggle Notifications"
    >
      {isNotificationEnabled ? <BellRing /> : <BellOff />}
    </Button>
  );
}

function ToggleSound() {
  const { isAudioCuesAllowed, updateSettings } = useSettings();
  const { currentPallet } = useUI();

  return (
    <Button
      pallet={currentPallet}
      onClick={() =>
        updateSettings({ isAudioCuesAllowed: !isAudioCuesAllowed })
      }
      className="cursor-pointer p-2"
      title="Toggle Sound"
    >
      {isAudioCuesAllowed ? <Volume2 /> : <VolumeOff />}
    </Button>
  );
}
