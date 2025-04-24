interface VenueOption {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface VenueSelectorProps {
  venues: VenueOption[];
  selectedVenue: string | null;
  onSelectVenue: (venueId: string, venueName: string) => void;
  onConfirm: () => void;
}

export const VenueSelector = ({
  venues,
  selectedVenue,
  onSelectVenue,
  onConfirm,
}: VenueSelectorProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className={`venue-option border rounded-lg p-3 cursor-pointer hover:border-purple hover:bg-purple-50 ${
              selectedVenue === venue.id ? "border-purple bg-purple-50" : ""
            }`}
            onClick={() => onSelectVenue(venue.id, venue.name)}
          >
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <i className={`fas ${venue.icon} text-purple`}></i>
              </div>
              <div>
                <h4 className="font-medium">{venue.name}</h4>
                <p className="text-xs text-gray-500">{venue.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 gradient-bg text-white rounded-lg"
          onClick={onConfirm}
          disabled={!selectedVenue}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
