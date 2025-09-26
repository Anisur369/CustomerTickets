export default function NavBar() {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-full sm:w-[1280px] mx-auto">
        <div className="flex-1">
          <a className="text-2xl font-bold">CS — Ticket System</a>
        </div>
        <div className="flex-none">

          <div className="sm:hidden flex drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button text-2xl"><i className="fa-solid fa-bars"></i></label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-70 p-4 font-semibold">
                {/* Sidebar content here */}
                <li><a>Home</a></li>
                <li><a>FAQ</a></li>
                <li><a>Changelog</a></li>
                <li><a>Blog</a></li>
                <li><a>Download</a></li>
                <li><a>Contact</a></li>
                <li><a>Home</a></li>
                <button className="btn btn-primary w-9/10 absolute bottom-4 right-4"><i className="fa-solid fa-plus"></i> New Ticket</button>
              </ul>
              
            </div>
          </div>

          <ul className="hidden sm:flex menu menu-horizontal px-1 items-center font-semibold">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
            <li><a>Home</a></li>
            <button className="btn btn-primary"><i className="fa-solid fa-plus"></i> New Ticket</button>
          </ul>

        </div>
      </div>
    </div>
  );
}




