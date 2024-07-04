const Footer = () => {
  return (
    <div className=" bg-[#020043] text-[#CCCCD1] p-10 py-28">
      <div className="mb-9">
        <img src="assets/logo light.png" alt="" />
      </div>
      <footer className="footer">
        <aside>
          <p className="max-w-[18rem] text-[#CCCCD1]">
            123 Main Street Anytown, USA Postal Code: 12345
            <br />
            <br />
            Support: support@oyolloo.com
            <br />
            Available : 10:00am to 07:00pm
          </p>
        </aside>
        <nav>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms And Condition</a>
        </nav>
        <nav>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Patient Portal</a>
        </nav>
        <nav>
          <a className="link link-hover">Follow Us</a>
          <img src="assets/Group 9168.svg" alt="" />
          <a className="link link-hover mt-4">@docplus 2024</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
