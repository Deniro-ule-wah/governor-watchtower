export interface Governor {
  id: string;
  clientName: string;
  location: string;
  installationDate: string;
  status: "online" | "offline";
  lastStatusChange: string;
}

export interface Technician {
  id: string;
  name: string;
  available: boolean;
  location: string;
}

export interface OfflineEvent {
  id: string;
  governorId: string;
  clientName: string;
  timestamp: string;
  status: string;
  actionTaken?: string;
}