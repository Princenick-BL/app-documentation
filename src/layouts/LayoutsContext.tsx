import React, { ReactNode, createContext, useContext, useState } from "react";

export type NotificationParams = {
  message: string;
  duration: number;
  level: "WARNING" | "ALERT" | "NOTIFICATION";
};

// Define the Notification context
type NotificationContextType = {
  notifications: NotificationParams[];
  showNotification: (params: NotificationParams) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

// Define the Notification provider
export const NotificationProvider: React.FC<any> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationParams[]>([]);

  const showNotification = (params: NotificationParams) => {
    setNotifications((prevNotifications) => [...prevNotifications, params]);

    // Automatically remove the notification after its duration
    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(1));
    }, params.duration);
  };

  const contextValue: NotificationContextType = {
    notifications,
    showNotification,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to access the Notification context
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
