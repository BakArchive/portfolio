import GitHubCalendar from "react-github-calendar";
import type { ThemeInput } from "react-activity-calendar";

const theme: ThemeInput = {
  light: ["#EEEEEE", "#D6E685", "#8CC665", "#44A340", "#1E6823"],
};

export default function GithubState({ username }: { username: string }) {
  return (
    <GitHubCalendar
      username={username}
      theme={theme}
      colorScheme="light"
      blockSize={16}
      fontSize={16}
    />
  );
}
