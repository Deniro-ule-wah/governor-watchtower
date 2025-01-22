import { useState } from "react";
import { StatusCard } from "../components/StatusCard";
import { EventLog } from "../components/EventLog";
import { AssignTechnicianDialog } from "../components/AssignTechnicianDialog";
import { mockGovernors, mockTechnicians, mockOfflineEvents } from "../data/mockData";

const Index = () => {
  const [selectedGovernorId, setSelectedGovernorId] = useState<string>("");
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);

  const handleAssignTechnician = (governorId: string) => {
    setSelectedGovernorId(governorId);
    setIsAssignDialogOpen(true);
  };

  const offlineCount = mockGovernors.filter((gov) => gov.status === "offline").length;
  const onlineCount = mockGovernors.length - offlineCount;

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Governor Status Dashboard</h1>
          <div className="mt-4 flex space-x-4">
            <div className="bg-success/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-success">{onlineCount}</div>
              <div className="text-sm text-muted-foreground">Online Governors</div>
            </div>
            <div className="bg-warning/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-warning">{offlineCount}</div>
              <div className="text-sm text-muted-foreground">Offline Governors</div>
            </div>
          </div>
        </div>

        {/* Governor Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {mockGovernors.map((governor) => (
            <StatusCard
              key={governor.id}
              governor={governor}
              onAssignTechnician={handleAssignTechnician}
            />
          ))}
        </div>

        {/* Event Log */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Event Log</h2>
          <EventLog events={mockOfflineEvents} />
        </div>

        {/* Assign Technician Dialog */}
        <AssignTechnicianDialog
          open={isAssignDialogOpen}
          onOpenChange={setIsAssignDialogOpen}
          technicians={mockTechnicians}
          governorId={selectedGovernorId}
        />
      </div>
    </div>
  );
};

export default Index;