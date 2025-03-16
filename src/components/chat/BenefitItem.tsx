
import React from "react";

interface BenefitItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function BenefitItem({ title, description, icon }: BenefitItemProps) {
  return (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors">
      <div className="h-12 w-12 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-neutral-900 mb-1">{title}</h3>
        <p className="text-neutral-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
