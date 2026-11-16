import { execSync } from "child_process";
import { formatDatePretty } from "../src/services/date";

export default function remarkModifiedTime() {
  return function (_tree, file) {
    const filepath = file.history[0];
    const date = execSync(
      `git log -1 --pretty="format:%cI" "${filepath}"`,
    ).toString();
    // date is in ISO format, e.g. "2026-02-01T22:08:01+01:00".
    file.data.astro.frontmatter.lastModified = formatDatePretty(new Date(date));
  };
}
