import { Link } from "wouter";

interface EventCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  linkTo: string;
  gradientClass?: string;
}

const EventCard = ({
  title,
  subtitle,
  imageSrc,
  linkTo,
  gradientClass = "bg-purple-dark bg-opacity-60",
}: EventCardProps) => {
  return (
    <Link href={linkTo}>
      <div className="celebration-card rounded-xl overflow-hidden shadow-md relative h-48 cursor-pointer">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${gradientClass}`}></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h4 className="text-lg font-poppins font-semibold">{title}</h4>
          <p className="text-sm">
            {subtitle} <i className="fas fa-arrow-right ml-1"></i>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
