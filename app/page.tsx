import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <Link href="https://ga-test2.netlify.app" rel="noreferrer">
          Netlify (Link)
        </Link>
        <span className="p-10" />
        <Link
          href="https://ga-test2.netlify.app"
          rel="noreferrer"
          prefetch={false}
        >
          Netlify (Link)
        </Link>
        <span className="p-10" />
        <a href="https://ga-test2.netlify.app" rel="noreferrer">
          Netlify (a)
        </a>
      </div>
    </div>
  );
}
