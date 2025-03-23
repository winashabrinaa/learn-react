import React, { useState } from "react";
import { Button } from "./components/components/ui/button";
import { Checkbox } from "./components/components/ui/checkbox";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "./components/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/components/ui/table";
import { ColumnDef } from "@tanstack/react-table";

interface UpdateCheckboxesProps {
  isOpenModalCheckbox: boolean;
  setIsOpenModalCheckbox: React.Dispatch<React.SetStateAction<boolean>>;
}

// let dataCheckbox = [
//   {
//     checkboxId: 1,
//     checkboxName: "Data Checkbox 1",
//     canView: true,
//     canCreate: false,
//     canModify: false,
//     canDelete: false,
//   },
//   {
//     checkboxId: 2,
//     checkboxName: "Data Checkbox 2",
//     canView: true,
//     canCreate: true,
//     canModify: false,
//     canDelete: false,
//   },
//   {
//     checkboxId: 3,
//     checkboxName: "Data Checkbox 3",
//     canView: true,
//     canCreate: false,
//     canModify: true,
//     canDelete: false,
//   },
//   {
//     checkboxId: 4,
//     checkboxName: "Data Checkbox 4",
//     canView: true,
//     canCreate: false,
//     canModify: false,
//     canDelete: true,
//   },
// ];

interface DataCheckbox {
  checkboxId: number;
  checkboxName: string;
  canView: boolean;
  canCreate: boolean;
  canModify: boolean;
  canDelete: boolean;
}

export const columns: ColumnDef<DataCheckbox>[] = [
  {
    accessorKey: "checkboxName",
    header: "Name",
  },
  {
    accessorKey: "canView",
    header: "Can View",
  },
  {
    accessorKey: "canCreate",
    header: "Can Create",
  },
  {
    accessorKey: "canModify",
    header: "Can Modify",
  },
  {
    accessorKey: "canDelete",
    header: "Can Delete",
  },
];

export const UpdateCheckboxes: React.FC<UpdateCheckboxesProps> = ({
  isOpenModalCheckbox,
  setIsOpenModalCheckbox,
}) => {
  const [checkboxData, setCheckboxData] = useState(
    [
      {
        checkboxId: 1,
        checkboxName: "Data Checkbox 1",
        canView: true,
        canCreate: false,
        canModify: false,
        canDelete: false,
      },
      {
        checkboxId: 2,
        checkboxName: "Data Checkbox 2",
        canView: true,
        canCreate: true,
        canModify: false,
        canDelete: false,
      },
      {
        checkboxId: 3,
        checkboxName: "Data Checkbox 3",
        canView: true,
        canCreate: false,
        canModify: true,
        canDelete: false,
      },
      {
        checkboxId: 4,
        checkboxName: "Data Checkbox 4",
        canView: true,
        canCreate: false,
        canModify: false,
        canDelete: true,
      },
    ]
  )

  const handleCheckboxChange = (id: number, name: string, checked: boolean) => {
    setCheckboxData((prevData) =>
      prevData.map((checkbox) =>
      checkbox.checkboxId === id
      ? { ...checkbox, [name]: checked }
      : checkbox
  )
);
  }

  return (
    <Dialog open={isOpenModalCheckbox} onOpenChange={setIsOpenModalCheckbox}>
      <DialogContent className="sm:max-w-[765px]">
        <DialogHeader>
          <DialogTitle>Check Visibility</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Can View</TableHead>
              <TableHead>Can Create</TableHead>
              <TableHead>Can Modify</TableHead>
              <TableHead>Can Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {checkboxData.map((item) => (
              <TableRow key={item.checkboxId}>
                <TableCell>{item.checkboxName}</TableCell>
                <TableCell>
                  <Checkbox 
                    checked={item.canView} 
                    onCheckedChange={(checked: boolean) => handleCheckboxChange(item.checkboxId, "canView", checked)} />
                </TableCell>
                <TableCell>
                  <Checkbox 
                    checked={item.canCreate}
                    onCheckedChange={(checked: boolean) => handleCheckboxChange(item.checkboxId, "canCreate", checked)} />
                </TableCell>
                <TableCell>
                  <Checkbox
                    checked={item.canModify}
                    onCheckedChange={(checked: boolean) => handleCheckboxChange(item.checkboxId, "canModify", checked)} />
                </TableCell>
                <TableCell>
                  <Checkbox 
                  checked={item.canDelete} 
                  onCheckedChange={(checked: boolean) => handleCheckboxChange(item.checkboxId, "canDelete", checked)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <DialogFooter>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
