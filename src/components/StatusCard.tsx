import { Governor } from "../types/governor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Building } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface StatusCardProps {
  governor: Governor;
  onAssignTechnician: (governorId: string) => void;
}

export const StatusCard = ({ governor, onAssignTechnician }: StatusCardProps) => {
  const { toast } = useToast();

  const handleNotifyClient = () => {
    toast({
      title: "Client Notified",
      description: `Notification sent to ${governor.clientName}`,
    });
  };

  return (
    <Card className={`w-full ${governor.status === "offline" ? "border-warning border-2" : ""}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {governor.id}
        </CardTitle>
        <div
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            governor.status === "online"
              ? "bg-success text-success-foreground"
              : "bg-warning text-warning-foreground animate-pulse"
          }`}
        >
          {governor.status.toUpperCase()}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Building className="h-4 w-4" />
            <span className="text-sm">{governor.clientName}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{governor.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">
              Last Updated: {format(new Date(governor.lastStatusChange), "MMM d, yyyy HH:mm")}
            </span>
          </div>
          {governor.status === "offline" && (
            <div className="flex space-x-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => onAssignTechnician(governor.id)}
              >
                Assign Technician
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={handleNotifyClient}
              >
                Notify Client
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};