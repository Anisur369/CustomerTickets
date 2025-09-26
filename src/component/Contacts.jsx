export default function Footer() {
  return (
    <div className="bg-[black] text-[white]">
      <div className="footer sm:footer-horizontal w-full sm:w-[1260px] mx-auto flex flex-col sm:flex-row justify-between items-start gap-4 text-base-content p-10 border-b-2 border-[#7c7c7c]">
        <div className="flex flex-col w-70 text-white">
          <h2 className="text-2xl font-semibold">CS Ticket System</h2>
          <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <nav className=" text-[white]">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav className=" text-[white]">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav className=" text-[white]">
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of Conditions</a>
          <a className="link link-hover">Join US</a>
        </nav>
        <nav className=" text-[white]">
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover flex items-center gap-2">
            <div className="w-6 h-6 bg-[white] text-center content-center text-[black] rounded-4xl text-md"><i className="fa-brands fa-x-twitter"></i></div>
            <span>L @CS - Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2">
            <div className="w-6 h-6 bg-[white] text-center content-center text-[black] rounded-4xl text-md"><i className="fa-brands fa-linkedin-in"></i></div>
            <span>L @CS - Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2">
            <div className="w-6 h-6 bg-[white] text-center content-center text-[black] rounded-4xl text-md"><i className="fa-brands fa-facebook-f"></i></div>
            <span>L @CS - Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2">
            <div className="w-6 h-6 bg-[white] text-center content-center text-[black] rounded-4xl text-md"><i className="fa-solid fa-envelope"></i></div>
            <span>support@cst.com</span>
          </a>
        </nav>
    </div>
    </div>
  );
}