
import { Check, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FadeIn } from "@/components/FadeIn";

interface ExerciseItem {
  name: string;
  sets: number;
  completed: number;
  isCompleted: boolean;
}

export function TherapyProgressTracker() {
  // Current progress data
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const completedDays = 3; // First 3 days completed
  
  const currentUrinationTime = "2m55s";
  const goalTime = "45s";
  const improvement = "2m45s";
  const progressPercentage = 53; // Calculated as percentage toward goal
  
  const dailyExercises: ExerciseItem[] = [
    { name: "Kegel Exercises", sets: 3, completed: 3, isCompleted: true },
    { name: "Pelvic Tilts", sets: 5, completed: 5, isCompleted: true },
    { name: "Breathing Exercises", sets: 5, completed: 0, isCompleted: false },
  ];

  return (
    <FadeIn>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Your Recovery Progress</h2>
        
        {/* Weekly Exercise Progress */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium">Weekly Exercise Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {weekDays.map((day, index) => (
                <div key={day} className="flex flex-col items-center">
                  <span className="text-sm mb-2">{day}</span>
                  <div className={`h-12 w-12 rounded-md flex items-center justify-center 
                    ${index < completedDays ? "bg-purple-700 text-white" : "bg-neutral-100"}`}>
                    {index < completedDays && <Check className="h-6 w-6" />}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Goal Progress */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium">Goal 1 - Decrease Urination Time</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium">Current average: {currentUrinationTime}</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="flex justify-between items-center text-sm">
              <span>Goal: {goalTime}</span>
              <span className="text-green-600 font-medium">You've improved by {improvement}!</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Daily Exercise Breakdown */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium">Daily breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dailyExercises.map((exercise) => (
                <div key={exercise.name} className="flex items-start space-x-4">
                  <div className={`h-6 w-6 rounded-md flex items-center justify-center mt-0.5
                    ${exercise.isCompleted ? "bg-purple-700 text-white" : "bg-white border border-neutral-300"}`}>
                    {exercise.isCompleted ? <Check className="h-4 w-4" /> : null}
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="font-medium">{exercise.name}</p>
                    <p className="text-sm text-neutral-600">
                      {exercise.isCompleted 
                        ? `${exercise.completed} sets completed` 
                        : `Not started - ${exercise.sets} to go`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 border-t pt-4">
              <div className="flex items-center text-sm text-purple-700">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>Complete all exercises to maximize recovery progress!</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  );
}
