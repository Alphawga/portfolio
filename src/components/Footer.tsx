import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-mono text-xl font-bold mb-4">AlphaWGA</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              Building exceptional digital experiences through innovative software solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/alphawga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Twitter
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">
                <Link href="mailto:bamidele.ajibola.alpha@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                  bamidele.ajibola.alpha@gmail.com
                </Link>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {currentYear} Ajibola Bamidele. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 