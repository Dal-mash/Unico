import NavMenu from "./NavMenu.jsx";
export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 backdrop-blur-md  bg-transparent">
      <div className="container mx-auto px-6 lg:px-20 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className=" text-blue-800 flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-white/10 border border-white/10 flex items-center justify-center  font-bold drop-shadow-sm">
              JS
            </div>
            <span className=" text-2xl lg:text-3xl font-extrabold tracking-tight drop-shadow-sm">
              Unico
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div className="relative">
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
