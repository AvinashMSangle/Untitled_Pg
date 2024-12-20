import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import utils from "@/lib/utils";

function submissionPage() {
    const location = useLocation();
    const name = location.state?.name||"Anonymous";
  return (
    <div className="min-h-screen w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
      <Header />

      <div className="grid-cols-rounded-lg grid bg-lime-500 p-3">
        <h2 className="text-3xl">Success💐</h2>
        <p className="terxt-lg">
          {name} Your form is Successfully submitted.Go to Check{" "}
          <Link
            to={utils.entriesUrl}
            className="text-blue-600 underline"
            target="_blank"
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default submissionPage;
