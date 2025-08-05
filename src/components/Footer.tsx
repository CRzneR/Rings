import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-black dark:text-gray-500">
            © {currentYear} LOTR. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/impressum"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Datenschutz
            </Link>
            <Link
              href="/kontakt"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
