import logo from "/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-10 p-4">
      <div className="grid gap-5 grid-cols-2 min-md:grid-cols-3 min-lg:grid-cols-5">
        <div className="space-y-2">
          <img src={logo} className="w-30" alt="" />
          <h3 className="text-[#666]">
            Super class, cute, comfortable. You can wear them with just about
            anything.
          </h3>
        </div>
        <div>
          <h2>COMPANY</h2>
          <h3 className="text-[#666] max-w-50 my-2">
            184 Main Rd E, St Albans VIC 3021, Australia.
          </h3>
          <h3 className="text-[#666]">+12-345-6789</h3>
          <h3 className="text-[#666]">Hello@admin.com</h3>
        </div>
        <div>
          <h2>INFORMATION</h2>
          <ul className="space-y-2">
            <li className="text-[#666]">About us</li>
            <li className="text-[#666]">Contact us</li>
            <li className="text-[#666]">FAQs</li>
            <li className="text-[#666]">Blog</li>
          </ul>
        </div>
        <div>
          <h2>QUICK LINKS</h2>
          <ul className="space-y-2">
            <li className="text-[#666]">My account</li>
            <li className="text-[#666]">Cart</li>
            <li className="text-[#666]">Wishlist</li>
            <li className="text-[#666]">Product Compare</li>
          </ul>
        </div>
        <div>
          <h2>COLLECTIONS</h2>
          <ul className="space-y-2">
            <li className="text-[#666]">All products</li>
            <li className="text-[#666]">Best sellers</li>
            <li className="text-[#666]">New arrivals</li>
            <li className="text-[#666]">Accessories</li>
          </ul>
        </div>
      </div>
      <hr className="my-5 border-[#eee]" />
      <h2 className="text-center mb-3">© MINIMOG 2024</h2>
    </footer>
  );
};

export default Footer;
