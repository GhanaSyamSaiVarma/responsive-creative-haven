import { cn } from "@/lib/utils";

interface FloatingCardProps {
  className?: string;
  children: React.ReactNode;
}

const FloatingCard = ({ className, children }: FloatingCardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg shadow-lg bg-white p-4 animate-float",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FloatingCard;