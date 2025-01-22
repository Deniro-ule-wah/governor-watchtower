import { Governor, Technician, OfflineEvent } from "../types/governor";

export const mockGovernors: Governor[] = [
  {
    id: "GOV001",
    clientName: "Acme Corporation",
    location: "New York, NY",
    installationDate: "2023-01-15",
    status: "online",
    lastStatusChange: "2024-03-20T10:30:00",
  },
  {
    id: "GOV002",
    clientName: "TechStart Inc",
    location: "San Francisco, CA",
    installationDate: "2023-02-20",
    status: "offline",
    lastStatusChange: "2024-03-19T15:45:00",
  },
  {
    id: "GOV003",
    clientName: "Global Systems",
    location: "Chicago, IL",
    installationDate: "2023-03-10",
    status: "online",
    lastStatusChange: "2024-03-20T09:15:00",
  },
];

export const mockTechnicians: Technician[] = [
  {
    id: "TECH001",
    name: "John Smith",
    available: true,
    location: "New York, NY",
  },
  {
    id: "TECH002",
    name: "Sarah Johnson",
    available: true,
    location: "San Francisco, CA",
  },
  {
    id: "TECH003",
    name: "Mike Brown",
    available: false,
    location: "Chicago, IL",
  },
];

export const mockOfflineEvents: OfflineEvent[] = [
  {
    id: "EVENT001",
    governorId: "GOV002",
    clientName: "TechStart Inc",
    timestamp: "2024-03-19T15:45:00",
    status: "offline",
    actionTaken: "Technician assigned",
  },
  {
    id: "EVENT002",
    governorId: "GOV001",
    clientName: "Acme Corporation",
    timestamp: "2024-03-18T14:30:00",
    status: "offline",
    actionTaken: "Resolved",
  },
];