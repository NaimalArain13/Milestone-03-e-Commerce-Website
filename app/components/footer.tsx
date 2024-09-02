export default function Footer(){
    return (
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Location 1 */}
            <div>
              <h3 className="text-pink-400 text-lg font-bold mb-2">Tilburg (HQ)</h3>
              <p>
                Goirkekanaaldijk 14
                <br />
                5046 AT Tilburg
                <br />
                The Netherlands
              </p>
              <a href="#" className="text-gray-400 hover:text-white mt-2 inline-block">
                Get directions
              </a>
            </div>
  
            {/* Location 2 */}
            <div>
              <h3 className="text-green-400 text-lg font-bold mb-2">Eindhoven (Strijp-S)</h3>
              <p>
                Achtsweg ZUID 159R
                <br />
                5651 GW Eindhoven
                <br />
                The Netherlands
              </p>
              <a href="#" className="text-gray-400 hover:text-white mt-2 inline-block">
                Get directions
              </a>
            </div>
  
            {/* Location 3 */}
            <div>
              <h3 className="text-purple-400 text-lg font-bold mb-2">Antwerp (C-Hive)</h3>
              <p>
                Mechelsesteenweg 180
                <br />
                2018 Antwerp
                <br />
                Belgium
              </p>
              <a href="#" className="text-gray-400 hover:text-white mt-2 inline-block">
                Get directions
              </a>
            </div>
          </div>
  
          {/* Bottom section */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Get a quote
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms & conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Work at Otis
              </a>
            </div>
  
            <div className="flex items-center space-x-4">
              <p>© 2024 Otis Bay Studio. Leading Webflow agency</p>
              <a href="#" className="text-purple-500 hover:text-purple-300">
                Professional Partner
              </a>
            </div>
  
            <div className="flex items-center space-x-4">
              <p>Part of</p>
              <div className="w-20 h-8 bg-gray-800 flex items-center justify-center rounded-md">
                {/* Placeholder for the logo */}
                <p className="text-white text-xs">ZUID Agency Group</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  

  