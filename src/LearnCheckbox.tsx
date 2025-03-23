import { useState } from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./components/components/ui/dialog";
import { Button } from "./components/components/ui/button";
import { Label } from "./components/components/ui/label";
import { Checkbox } from "./components/components/ui/checkbox";

interface LearnCheckboxProps {
  isOpenModalCheckbox2: boolean;
  setIsOpenModalCheckbox2: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LearnCheckbox = ({isOpenModalCheckbox2, setIsOpenModalCheckbox2}: LearnCheckboxProps) => {
  const [data, setData] = useState({
      checkboxId: 1,
      checkboxName: "Data Checkbox 1",
      canView: true,
      canCreate: false,
      canModify: true,
      canDelete: false,
  });

  const handleChange = (name: string, checked: boolean) => {
    console.log("test")
    setData({
      ...data,
      [name]: checked
    })
  }

  return(
    <Dialog open={isOpenModalCheckbox2} onOpenChange={setIsOpenModalCheckbox2}>
      <DialogContent className="sm:max-w-[765px]">
        <DialogHeader>
          <DialogTitle>Check Visibility</DialogTitle>
        </DialogHeader>
        <div className="flex justify-between">
          <div>
            <Label>Can View</Label>
            <Checkbox checked={data.canView} onCheckedChange={(checked: boolean) => handleChange("canView", checked)} />
          </div>
          <div>
            <Label>Can Create</Label>
            <Checkbox checked={data.canCreate} onCheckedChange={(checked: boolean) => handleChange("canCreate", checked)} />
          </div>
          <div>
            <Label>Can Modify</Label>
            <Checkbox checked={data.canModify} onCheckedChange={(checked: boolean) => handleChange("canModify", checked)} />
          </div>
          <div>
            <Label>Can Delete</Label>
            <Checkbox checked={data.canDelete} onCheckedChange={(checked: boolean) => handleChange("canDelete", checked)} />
          </div>
        </div>
        <DialogFooter>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}