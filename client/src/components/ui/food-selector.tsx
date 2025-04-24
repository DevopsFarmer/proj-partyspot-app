import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CuisineType {
  id: string;
  name: string;
}

interface DietaryPreference {
  id: string;
  name: string;
}

interface FoodSelectorProps {
  cuisineTypes: CuisineType[];
  dietaryPreferences: DietaryPreference[];
  onConfirm: (
    selectedCuisines: string[],
    selectedDietary: string[]
  ) => void;
}

export const FoodSelector = ({
  cuisineTypes,
  dietaryPreferences,
  onConfirm,
}: FoodSelectorProps) => {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);

  const toggleCuisine = (cuisineId: string) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisineId)
        ? prev.filter((id) => id !== cuisineId)
        : [...prev, cuisineId]
    );
  };

  const toggleDietary = (dietaryId: string) => {
    setSelectedDietary((prev) =>
      prev.includes(dietaryId)
        ? prev.filter((id) => id !== dietaryId)
        : [...prev, dietaryId]
    );
  };

  const handleConfirm = () => {
    onConfirm(selectedCuisines, selectedDietary);
  };

  return (
    <div>
      <div className="mb-4">
        <h5 className="font-medium mb-2">Cuisine Type</h5>
        <div className="flex flex-wrap gap-2">
          {cuisineTypes.map((cuisine) => (
            <label
              key={cuisine.id}
              className={`cuisine-option inline-flex items-center border rounded-full px-3 py-1 text-sm cursor-pointer hover:bg-purple-50 hover:border-purple ${
                selectedCuisines.includes(cuisine.id)
                  ? "bg-purple-100 border-purple"
                  : ""
              }`}
              onClick={() => toggleCuisine(cuisine.id)}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={selectedCuisines.includes(cuisine.id)}
                onChange={() => {}}
              />
              <span>{cuisine.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h5 className="font-medium mb-2">Dietary Preferences</h5>
        <div className="grid grid-cols-2 gap-2">
          {dietaryPreferences.map((pref) => (
            <div key={pref.id} className="flex items-center space-x-2">
              <Checkbox
                id={pref.id}
                checked={selectedDietary.includes(pref.id)}
                onCheckedChange={() => toggleDietary(pref.id)}
              />
              <Label htmlFor={pref.id} className="text-sm">
                {pref.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          className="px-4 py-2 gradient-bg text-white rounded-lg"
          onClick={handleConfirm}
          disabled={selectedCuisines.length === 0 && selectedDietary.length === 0}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};
