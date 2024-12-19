import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import utils from "@/lib/utils";

function submissionPage() {
    const location = useLocation();
    const name = location.state.name||Annonymus;
  return (
    <div className="min-h-screen w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
      <Header />

      <div className="grid-cols-rounded-lg grid bg-lime-500 p-3">
        <h2 className="text-3xl">Success💐</h2>
        <p className="terxt-lg">
          Name Your form is Successfully submitted.Go to Chech{" "}
          <a
            href={utils.entriesUrl}
            className="text-blue-600 underline"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default submissionPage;
