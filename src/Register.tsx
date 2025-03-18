import { Dialog, DialogTitle } from '@radix-ui/react-dialog'
import { DialogContent, DialogFooter, DialogHeader } from './components/components/ui/dialog'
import { Button } from './components/components/ui/button'
import DateTime from 'react-datetime'

interface RegisterProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    handleSubmit: () => void;
}

const Register: React.FC<RegisterProps> = ({ isOpen, setIsOpen, formData, setFormData, handleSubmit }) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleStartTimeChange = (date: any) => {
        setFormData((prevData) => ({
            ...prevData,
            startTime: date.format("HH:mm")
        }))
    }

    const handleEndTimeChange = (date: any) => {
        setFormData((prevData) => ({
            ...prevData,
            endTime: date.format("HH:mm")
        }))
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[765px]">
                <DialogHeader>
                    <DialogTitle>Add Your Activity List</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="activity-name">Activity Name</label>
                        <input id="activity-name" className="col-span-3" name="activityName" value={formData.activityName} onChange={handleOnChange} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="activity-category">Activity Category</label>
                        <input id="activity-category" className="col-span-3" name="activityCategory" value={formData.activityCategory} onChange={handleOnChange} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="start-time">Start Time</label>
                        <DateTime dateFormat={false} timeFormat="HH:mm" value={formData.startTime} onChange={handleStartTimeChange} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="end-time">End Time</label>
                        <DateTime dateFormat={false} timeFormat="HH:mm" value={formData.endTime} onChange={handleEndTimeChange} /> 
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Register;