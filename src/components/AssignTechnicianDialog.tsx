import { useState } from "react";
import { Technician } from "../types/governor";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface AssignTechnicianDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  technicians: Technician[];
  governorId: string;
}

export const AssignTechnicianDialog = ({
  open,
  onOpenChange,
  technicians,
  governorId,
}: AssignTechnicianDialogProps) => {
  const [selectedTechnician, setSelectedTechnician] = useState<string>("");
  const { toast } = useToast();

  const handleAssign = () => {
    if (!selectedTechnician) return;

    toast({
      title: "Technician Assigned",
      description: `Technician has been assigned to governor ${governorId}`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign Technician</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Technician</label>
            <Select onValueChange={setSelectedTechnician} value={selectedTechnician}>
              <SelectTrigger>
                <SelectValue placeholder="Select a technician" />
              </SelectTrigger>
              <SelectContent>
                {technicians
                  .filter((tech) => tech.available)
                  .map((tech) => (
                    <SelectItem key={tech.id} value={tech.id}>
                      {tech.name} - {tech.location}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={handleAssign}
            disabled={!selectedTechnician}
            className="w-full"
          >
            Assign Technician
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};