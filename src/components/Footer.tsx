import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card/30">
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Link to="/" className="text-xl font-bold text-gradient">BRTSML</Link>
          <p className="text-sm text-muted-foreground mt-1">Technology Entrepreneur</p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link to="/work" className="hover:text-foreground transition-colors">Work</Link>
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BRTSML. All rights reserved. P.IVA: 14654430967
      </div>
    </div>
  </footer>
);

export default Footer;
