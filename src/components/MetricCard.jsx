function MetricCard({
  title,
  value,
  className
}) {
  return (
    <div className={`metric-card ${className}`}>
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

export default MetricCard;