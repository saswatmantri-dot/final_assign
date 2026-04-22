export default function Topbar() {
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-5">
      <button className="text-gray-600 text-lg">☰</button>

      <div className="flex items-center gap-5">
        <div className="relative text-gray-600 text-lg">
          🔔
          <span className="absolute -top-1 -right-2 h-4 w-4 rounded-full bg-red-600 text-[9px] text-white flex items-center justify-center">9</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-orange-200 flex items-center justify-center text-xs font-semibold">S</div>
          <span className="text-sm text-gray-700">Stebin Ben</span>
        </div>
      </div>
    </header>
  );
}