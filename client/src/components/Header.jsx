import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
function Header() {
  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-200">
            ShopName
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border bg-gray-700 text-gray-200 border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Icons */}
          <nav className="flex items-center gap-6">
            <Link
              to="/cart"
              className="relative text-gray-200 hover:text-white"
            >
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            <Link to="/account" className="text-gray-200 hover:text-white">
              <FaUser className="text-xl" />
            </Link>
          </nav>
        </div>

        {/* Bottom Navigation */}
        <nav className="border-t border-gray-700">
          <ul className="flex items-center justify-center space-x-8 py-4 text-gray-200">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Trang chủ
              </Link>
            </li>
            <li className="group relative">
              <Link
                to="/products"
                className="hover:text-white transition-colors flex items-center"
              >
                Sản phẩm
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block w-48 bg-gray-700 shadow-lg py-2 z-50">
                <Link
                  to="/products/electronics"
                  className="block px-4 py-2 text-gray-200 hover:bg-gray-600"
                >
                  Điện tử
                </Link>
                <Link
                  to="/products/fashion"
                  className="block px-4 py-2 text-gray-200 hover:bg-gray-600"
                >
                  Thời trang
                </Link>
                <Link
                  to="/products/home"
                  className="block px-4 py-2 text-gray-200 hover:bg-gray-600"
                >
                  Đồ gia dụng
                </Link>
              </div>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-white transition-colors">
                Tin tức
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
