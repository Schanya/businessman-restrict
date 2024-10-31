import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-blue-100 to-blue-200">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Google Tag Manager with restrictions
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <Image
                src={`https://randomuser.me/api/portraits/men/${i + 60}.jpg`}
                alt={`Businessman ${i}`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-blue-600 mb-2">
                  Businessman {i}
                </h2>
                <p className="text-gray-600">
                  A professional executive with expertise in Google Tag Manager
                  implementation.
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/home" className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Go to Home Page
          </button>
        </Link>
      </main>
      <footer className="mt-16 text-center text-blue-600">
        <p>© 2023 Google Tag Manager Experts. All rights reserved.</p>
      </footer>
    </div>
  );
}
