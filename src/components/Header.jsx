import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mb-8 flex items-center gap-2">
      <Link to="/">
        <img src="favicon.png" alt="Untitled UI" className="w-10" />
      </Link>
      <p className="font-semibold">Untitled Contact Form</p>
    </header>
  );
}

export default Header;
