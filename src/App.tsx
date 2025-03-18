import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { Checkbox } from './components/components/ui/checkbox'
import { Button } from './components/components/ui/button'
import Register from './Register'
import Update from './Update'

let list = [
  {
    "activityId": 1,
    "activityName": "Homework", 
    "activityCategory": "School", 
    "startTime": "16.00", 
    "endTime": "17.00", 
    "status": "In Time", 
  },
  {
    "activityId": 2,
    "activityName": "Cooking", 
    "activityCategory": "Home", 
    "startTime": "18.00", 
    "endTime": "18.30", 
    "status": "Late", 
  },
]

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    activityId: 0,
    activityName: "",
    activityCategory: "",
    startTime: "",
    endTime: "",
    actualEndTime: ""
  });

  const openPopUp = () => {
    setIsOpen(true)
  };

  const closePopUp = () => {
    setIsOpen(false)
  };

  const getId = (activityId: number) => {
    alert(activityId);
  }

  const handleSubmit = () => {
    formData.activityId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    list.push(formData);
    alert(JSON.stringify(list));
    closePopUp();
  }

  const handleSubmitUpdate = (activityId: number) => {

  }

  return (
    <>
      <div className="py-4 flex justify-center">
        <p className="font-bold text-2xl">To Do App</p>
      </div>
      <div className="grid gap-4">
        <div className="flex justify-center">
          <Button onClick={openPopUp}>Add a List</Button>
        </div>
        <div className="py-2 px-20 mx-20 flex justify-between bg-blue-200 border-solid rounded-2xl">
            <Checkbox />
            <div className="font-bold">Activity Name</div>
            <div className="font-bold">Activity Category</div>
            <div className="font-bold">Start Time</div>
            <div className="font-bold">End Time</div>
            <div className="font-bold">Actual End Time</div>
            <div className="font-bold">Status</div>
            <div className="font-bold">Action</div>
        </div>
        {list.map((item) => 
          <Card
            activityId={item.activityId}
            activityName={item.activityName}
            activityCategory={item.activityCategory}
            startTime={item.startTime}
            endTime={item.endTime}
            status={item.status}
            getId={getId}
          />
        )}
      </div>

      <Register
         formData={formData}
         handleSubmit={handleSubmit}
         isOpen={isOpen}
         setFormData={setFormData}
         setIsOpen={setIsOpen}
      />

      <Update
        formData={formData}
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  )
}

export default App
