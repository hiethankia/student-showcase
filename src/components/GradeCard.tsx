interface GradeCardProps {
  subject: string;
  gradeLetter: string;
  percentage: number;
}

const getGradeColor = (pct: number) => {
  if (pct >= 80) return "text-grade-high";
  if (pct >= 70) return "text-grade-mid";
  return "text-grade-low";
};

const getBarColor = (pct: number) => {
  if (pct >= 80) return "bg-grade-high";
  if (pct >= 70) return "bg-grade-mid";
  return "bg-grade-low";
};

const GradeCard = ({ subject, gradeLetter, percentage }: GradeCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 card-glow hover-scale cursor-default group">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-medium text-foreground">{subject}</h3>
        <span className={`font-display font-bold text-lg transition-transform duration-200 group-hover:scale-110 ${getGradeColor(percentage)}`}>
          {gradeLetter}
        </span>
      </div>
      <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
        <div
          className={`h-1.5 rounded-full transition-all duration-500 ${getBarColor(percentage)}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">{percentage}%</p>
    </div>
  );
};

export default GradeCard;
