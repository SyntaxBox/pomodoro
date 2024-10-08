import { AudioInput } from "../components";
import { TimeInput } from "../components/time-input";
import { useUI } from "../hooks";
import { useSettings } from "../hooks/useSettings";
import { Button, Container, H3, Hue, Switch, Title } from "../ui";
import { H4 } from "../ui/h4";

export default function SettingsPage() {
  const { currentPallet, workPallet, breakPallet } = useUI();
  const {
    workHue,
    breakHue,
    updateSettings,
    workShift,
    breakShift,
    autoStart,
    isAudioCuesAllowed,
    workCue,
    breakCue,
    isNotificationEnabled,
    isVisionHealthEnabled,
    DEFAULT_SETTINGS,
  } = useSettings();
  return (
    <section
      style={{
        color: currentPallet.text1,
      }}
      className="flex-grow"
    >
      <Container as="div">
        <div
          className="rounded-lg p-4"
          style={{
            border: `dashed 1px ${currentPallet.text1}`,
          }}
        >
          <Title className="">Settings</Title>
          <div>
            <H3>Work Color:</H3>

            <div className="flex gap-3 items-center">
              <Hue
                hue={workHue}
                onChange={(newHsv) => updateSettings({ workHue: newHsv.h })}
                className="w-full"
              />
              <Button
                pallet={workPallet}
                className="p-2"
                onClick={() =>
                  updateSettings({
                    workHue: DEFAULT_SETTINGS.workHue,
                  })
                }
              >
                Reset
              </Button>
            </div>
          </div>
          <div>
            <H3>Break Color:</H3>
            <div className="flex gap-3 items-center h-fit">
              <Hue
                hue={breakHue}
                className="w-full"
                onChange={(newHsv) => updateSettings({ breakHue: newHsv.h })}
              />
              <Button
                pallet={breakPallet}
                className="p-2"
                onClick={() =>
                  updateSettings({
                    breakHue: DEFAULT_SETTINGS.breakHue,
                  })
                }
              >
                Reset
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <H3>Work/Break Times: </H3>
            <div className="flex gap-3 items-center w-full md:w-fit justify-between md:justify-start">
              <H4 className="my-0 mr-[10px]">WORK:</H4>
              <TimeInput
                time={workShift}
                onChange={(time) => updateSettings({ workShift: time })}
              />
              <Button
                pallet={workPallet}
                className="p-2"
                onClick={() =>
                  updateSettings({
                    workShift: DEFAULT_SETTINGS.workShift,
                  })
                }
              >
                Reset
              </Button>
            </div>
            <div className="flex gap-3 items-center w-full md:w-fit justify-between md:justify-start">
              <H4 className="my-0">BREAK:</H4>
              <TimeInput
                time={breakShift}
                onChange={(time) => updateSettings({ breakShift: time })}
              />
              <Button
                pallet={breakPallet}
                className="p-2"
                onClick={() =>
                  updateSettings({
                    breakShift: DEFAULT_SETTINGS.breakShift,
                  })
                }
              >
                Reset
              </Button>
            </div>
          </div>
          <div className="flex my-6 items-center gap-4">
            <H3 className="m-0">Auto Start:</H3>
            <Switch
              value={autoStart}
              onChange={(newVal) => {
                updateSettings({ autoStart: newVal });
              }}
              pallet={currentPallet}
            />
          </div>
          <div className="flex my-6 items-center gap-4">
            <H3 className="m-0">Enable Notifications:</H3>
            <Switch
              value={isNotificationEnabled}
              onChange={(newVal) => {
                updateSettings({ isNotificationEnabled: newVal });
              }}
              pallet={currentPallet}
            />
          </div>

          <div className="flex my-6 items-center gap-4">
            <H3 className="m-0">Enable Vision Health Notifications:</H3>
            <Switch
              value={isVisionHealthEnabled}
              onChange={(newVal) => {
                updateSettings({ isVisionHealthEnabled: newVal });
              }}
              pallet={currentPallet}
            />
          </div>
          <p className="-mt-8 opacity-60">(20 20 20 Rule)</p>
          <div className="flex my-6 items-center gap-4">
            <H3 className="m-0">Enable Audio:</H3>
            <Switch
              value={isAudioCuesAllowed}
              onChange={(newVal) => {
                updateSettings({ isAudioCuesAllowed: newVal });
              }}
              pallet={currentPallet}
            />
          </div>
          <div>
            <div>
              <H4>Work Cue</H4>
              <div className="flex gap-2">
                <AudioInput
                  pallet={workPallet}
                  buffer={workCue}
                  onChange={(newCue) => updateSettings({ workCue: newCue })}
                />
                <Button
                  pallet={workPallet}
                  className="p-2"
                  onClick={() =>
                    updateSettings({
                      workCue: DEFAULT_SETTINGS.workCue,
                    })
                  }
                >
                  Reset
                </Button>
              </div>
            </div>
            <div>
              <H4>Break Cue</H4>
              <div className="flex gap-2">
                <AudioInput
                  pallet={breakPallet}
                  buffer={breakCue}
                  onChange={(newCue) => updateSettings({ breakCue: newCue })}
                />
                <Button
                  pallet={breakPallet}
                  className="p-2"
                  onClick={() =>
                    updateSettings({
                      breakCue: DEFAULT_SETTINGS.breakCue,
                    })
                  }
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
