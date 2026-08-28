/*
 * Project screenshots, keyed by a project's `image` field. A project whose key
 * is missing simply renders without one, so adding a capture is a one-line
 * change and a missing file never breaks the build.
 */
import platefind from "./platefind.jpg";
import jokedle from "./jokedle.jpg";

const SHOTS = {
  platefind,
  jokedle,
};

export default SHOTS;
