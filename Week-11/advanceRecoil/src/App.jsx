import { useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  allNotification,
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "./atoms";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  // const [messagingNotificationCount, setMessagingNotificationCount] =
  //   useRecoilState(messagingAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  return (
    <div>
      <button>Home</button>
      <button>
        My Network(
        {networkNotificationCount > 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs({jobsNotificationCount})</button>
      <button>Messaging({messagingNotificationCount})</button>
      <button>Notifications({notificationCount})</button>

      {/* <button
        onClick={() => {
          setMessagingNotificationCount(
            (messagingNotificationCount) => messagingNotificationCount + 1
          );
        }}
      >
        Me
      </button> */}
      {/* <div>
        <ButtonUpdater />
      </div> */}

      <div>
        <SelectorButton />
      </div>
    </div>
  );
}

const ButtonUpdater = memo(() => {
  const setMessagingNotificationCount = useSetRecoilState(notificationAtom);
  return (
    <button
      onClick={() => {
        setMessagingNotificationCount((c) => c + 1);
      }}
    >
      Me
    </button>
  );
});

function SelectorButton() {
  const allNotificationCount = useRecoilValue(allNotification);

  return <button>Me({allNotificationCount})</button>;
}
export default App;
