import logo from '../../assets/bank.png';

const items = [
  { icon: '◉', label: 'Dashboard', active: true },
  { icon: '👥', label: 'Bank User Management' },
  { icon: '📄', label: 'Audit Trail' },
  { icon: '📊', label: 'Reports' },
  { icon: '💼', label: 'Wallet Adjustment' },
];

export default function Sidebar() {
  return (
    <aside className="w-[250px] bg-white border-r border-gray-200 flex flex-col">
      <div className="h-14 flex items-center gap-2 px-4 border-b border-gray-100">
        <img src={logo} alt="Bank" className="h-7 w-auto" />
      </div>

      <div className="px-5 pt-4 pb-2 text-xs text-gray-400">Widgets</div>

      <nav className="space-y-1 px-2">
        {items.map((item) => (
          <button key={item.label} className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-sm transition ${item.active ? 'bg-red-50 text-red-600 border-r-2 border-red-500' : 'text-gray-700 hover:bg-gray-100'}`}>
            <span>{item.icon}</span>
            <span className="text-left">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
