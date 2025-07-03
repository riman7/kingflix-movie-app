const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-amber-400">Kingflix</h2>
          <p className="text-zinc-400 mt-2 max-w-sm">
            Your go-to platform for the latest, top-rated, and most popular movies across all genres.
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-amber-400">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-zinc-700 pt-4 text-center text-zinc-400 text-sm">
        © {new Date().getFullYear()} Kingflix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
