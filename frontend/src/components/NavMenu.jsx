import { useState } from "react";
import MenuIcon from "./MenuIcon";
import MenuPanel from "./MenuPanel";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative ourline-white backdrop-blur-lg">
      <MenuIcon open={open} onToggle={() => setOpen(!open)} />
      {open && <MenuPanel onNavigate={handleScroll} />}
    </div>
  );
}
