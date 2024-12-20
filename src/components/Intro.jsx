import { TbNorthStar } from "react-icons/tb";

function Intro() {
  return (
    <div>
      <h1 className="max-w-96 text-3xl font-semibold">
        Got Ideas?
        <TbNorthStar className="inline-block" /> We've got the skills. Let's
        team up.
      </h1>
      <p className="my-6">
        Tell us more about yourself and what's on your mind.
      </p>
    </div>
  );
}

export default Intro;
