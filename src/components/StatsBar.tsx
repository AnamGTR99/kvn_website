export default function StatsBar() {
  const stats = [
    {
      number: '125K',
      label: 'Avg. views / reel',
      subtitle: 'across 50 sponsored reels',
    },
    {
      number: '7.3K',
      label: 'Avg. saves / reel',
      subtitle: 'high-intent signal',
    },
    {
      number: '87K',
      label: 'Avg. reach / reel',
      subtitle: 'unique accounts',
    },
    {
      number: '13.6%',
      label: 'Avg. interaction rate',
      subtitle: 'industry avg. 1–3%',
    },
  ];

  return (
    <div className="stats-bar rv">
      {stats.map((stat, idx) => (
        <div key={idx} className="sb">
          <span className="sb-n">{stat.number}</span>
          <span className="sb-l">{stat.label}</span>
          <span className="sb-s">{stat.subtitle}</span>
        </div>
      ))}
    </div>
  );
}
