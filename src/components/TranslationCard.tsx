
import React from "react";
import { cn } from "@/lib/utils";

interface TranslationCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const TranslationCard = ({
  title,
  description,
  children,
  className,
  icon,
}: TranslationCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      <div className="flex items-start gap-4 mb-6">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TranslationCard;
