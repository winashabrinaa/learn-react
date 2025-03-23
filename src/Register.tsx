import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "./components/components/ui/dialog";
import { Button } from "./components/components/ui/button";
import DateTime from "react-datetime";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/components/ui/select";
import { Input } from "./components/components/ui/input";
import { Label } from "./components/components/ui/label";
import { useState } from "react";

interface RegisterProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleSubmit: () => void;
}

let something = [
  {
    id: "something1",
    name: "something 1",
  },
  {
    id: "something2",
    name: "something 2",
  },
  {
    id: "something3",
    name: "something 3",
  },
];

let anotherThing = [
  {
    id: "anotherThing1",
    name: "another thing 1",
    flag: "something1",
    others: [
      {
        id: "other1",
        name: "Other 1",
      },
      {
        id: "other2",
        name: "Other2",
      },
      {
        id: "other3",
        name: "Other 3",
      },
    ],
  },
  {
    id: "anotherThing2",
    name: "another thing 2",
    flag: "something2",
    others: [
      {
        id: "other4",
        name: "Other 4",
      },
      {
        id: "other5",
        name: "Other5",
      },
      {
        id: "other6",
        name: "Other 6",
      },
    ],
  },
  {
    id: "anotherThing3",
    name: "another thing 3",
    flag: "something3",
    others: [
      {
        id: "other7",
        name: "Other 7",
      },
      {
        id: "other8",
        name: "Other 8",
      },
      {
        id: "other9",
        name: "Other 9",
      },
    ],
  },
];

const Register: React.FC<RegisterProps> = ({
  isOpen,
  setIsOpen,
  formData,
  setFormData,
  handleSubmit,
}) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [filteredAnother, setFilteredAnother] = useState<any[]>([]);
    const [filteredOthers, setFilteredOthers] = useState<any[]>([]);

    const handleValueChange = (value: string) => {
        setIsDisabled(false);
        setSelectedValue(value);
        const filteredData = anotherThing.filter(item => item.flag == value);
        const getAllOthers = filteredData.flatMap(item => item.others);
        setFilteredAnother(filteredData);
        setFilteredOthers(getAllOthers);
        setFormData((prevData) => ({
            ...prevData,
            something: value
        }))
    }

    const handleValueOthers = (value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            anotherThing: value
        })) 
    }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStartTimeChange = (date: any) => {
    setFormData((prevData) => ({
      ...prevData,
      startTime: date.format("HH:mm"),
    }));
  };

  const handleEndTimeChange = (date: any) => {
    setFormData((prevData) => ({
      ...prevData,
      endTime: date.format("HH:mm"),
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[765px]">
        <DialogHeader>
          <DialogTitle>Add Your Activity List</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="activity-name">Activity Name</Label>
            <Input
              id="activity-name"
              className="col-span-3"
              name="activityName"
              value={formData.activityName}
              onChange={handleOnChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="activity-category">Activity Category</Label>
            <Input
              id="activity-category"
              className="col-span-3"
              name="activityCategory"
              value={formData.activityCategory}
              onChange={handleOnChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="start-time">Start Time</Label>
            <DateTime
              dateFormat={false}
              timeFormat="HH:mm"
              value={formData.startTime}
              onChange={handleStartTimeChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="end-time">End Time</Label>
            <DateTime
              dateFormat={false}
              timeFormat="HH:mm"
              value={formData.endTime}
              onChange={handleEndTimeChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label>Something</Label>
            <Select value={selectedValue} onValueChange={handleValueChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Something" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {something.map((item) => (
                    <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label>Another Thing</Label>
            <Select disabled={isDisabled} onValueChange={handleValueOthers}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Child of Something" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {filteredOthers.map((item) => (
                    <SelectItem value={item.id}>{item.name}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
