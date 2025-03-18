import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox"

interface CardProps{
    activityId: number,
    activityName: string,
    activityCategory: string,
    startTime: string,
    endTime: string,
    status: string,
    getId: (activityId: number) => void
}

export const Card = ({activityId, activityName, activityCategory, startTime, endTime, status, getId} : CardProps) => {
    return (
        <div className="py-2 px-8 mx-20 flex justify-between bg-blue-100 border-solid rounded-2xl">
            <Checkbox />
            <div className="font-medium items-center">{activityName}</div>
            <div className="">{activityCategory}</div>
            <div className="">{startTime}</div>
            <div className="">{endTime}</div>
            {status === "Late" ? 
                <div className="bg-red-500 from-neutral-50">{status}</div>
                :
                <div className="bg-green-200">{status}</div>
            }
            <div className="grid gap-0.5">
                <Button className="px-1" onClick={() => getId(activityId)}>Edit</Button>
                <Button className="px-1">Delete</Button>
            </div>
        </div>
    );
}