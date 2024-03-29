function GithubCalendar({ username, className }) {
  return (
    <figure className={`w-full overflow-auto ${className}`}>
      <img
        src={`https://ghchart.rshah.org/${username}`}
        alt={`${username}'s Github chart`}
        className="w-full min-w-[1000px]"
      />
    </figure>
  );
}

export default GithubCalendar;
