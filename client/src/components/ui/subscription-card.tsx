import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface SubscriptionCardProps {
  title: string;
  price: string;
  validity: string;
  description: string;
  features: string[];
  isPremium?: boolean;
  onSelect: () => void;
}

export const SubscriptionCard = ({
  title,
  price,
  validity,
  description,
  features,
  isPremium = false,
  onSelect,
}: SubscriptionCardProps) => {
  return (
    <Card className={`w-full ${isPremium ? 'border-purple shadow-purple/20 shadow-lg' : ''}`}>
      <CardHeader>
        {isPremium && (
          <Badge className="w-fit mb-2 bg-gradient-to-r from-purple to-pink-500 hover:from-purple hover:to-pink-600">
            BEST VALUE
          </Badge>
        )}
        <CardTitle className="text-xl font-poppins">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-3xl font-bold">₹{price}</span>
          <span className="text-gray-500 ml-1">/{validity}</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 h-5 w-5 text-purple shrink-0">
                <Check className="h-5 w-5" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onSelect}
          className={`w-full ${isPremium ? 'gradient-bg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        >
          {isPremium ? 'Get Annual Pass' : 'Get Monthly Pass'}
        </Button>
      </CardFooter>
    </Card>
  );
};