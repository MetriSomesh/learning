import { atom, selector } from "recoil";

export const networkAtom = atom({
  default: 102,
  key: "networkAtom",
});

export const jobsAtom = atom({
  default: 0,
  key: "jobsAtom",
});

export const messagingAtom = atom({
  default: 0,
  key: "messagingAtom",
});

export const notificationAtom = atom({
  default: 12,
  key: "notificationAtom",
});

export const allNotification = selector({
  key: "allNotification",
  get: ({ get }) => {
    const networkCount = get(networkAtom);
    const jobsCount = get(jobsAtom);
    const messageCount = get(messagingAtom);
    const notificationCount = get(notificationAtom);

    return networkCount + jobsCount + messageCount + notificationCount;
  },
});
