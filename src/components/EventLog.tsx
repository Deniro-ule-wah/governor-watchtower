import { OfflineEvent } from "../types/governor";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

interface EventLogProps {
  events: OfflineEvent[];
}

export const EventLog = ({ events }: EventLogProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Governor ID</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action Taken</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.governorId}</TableCell>
              <TableCell>{event.clientName}</TableCell>
              <TableCell>
                {format(new Date(event.timestamp), "MMM d, yyyy HH:mm")}
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    event.status === "online"
                      ? "bg-success text-success-foreground"
                      : "bg-warning text-warning-foreground"
                  }`}
                >
                  {event.status.toUpperCase()}
                </span>
              </TableCell>
              <TableCell>{event.actionTaken || "Pending"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};