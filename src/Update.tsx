import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "./components/components/ui/dialog";
import { Button } from "./components/components/ui/button";
import DateTime from "react-datetime";

interface UpdateProps {
  activityId: number,
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: any;
  // setFormData: React.Dispatch<React.SetStateAction<boolean>>,
  handleSubmit: () => void;
}

const Update: React.FC<UpdateProps> = ({
  isOpen,
  setIsOpen,
  formData,
  setFormData,
  handleSubmit,
}) => {
  const handleActualEndTimeChange = (date: any) => {
    setFormData((prevData) => ({
      ...prevData,
      actualEndTime: date.format("HH:mm"),
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[765px]">
        <DialogHeader>
          <DialogTitle>Update Your Activity</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <input type="hidden" value={formData.activityId}  />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="end-time">End Time</label>
            <DateTime
              dateFormat={false}
              timeFormat="HH:mm"
              value={formData.actualEndTime}
              onChange={handleActualEndTimeChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Update;
