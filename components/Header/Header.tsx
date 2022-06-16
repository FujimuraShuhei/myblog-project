import Link from 'next/link'

export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-sky-900 py-7 flex items-center sticky z-50 max-w-[100%] justify-around">
      <div className="container flex justify-between mx-10">
        <Link className="flex flex-start" href={"/"} passHref>
          <a className=" text-gray-900">
            <span className="text-white text-xl font-bold">
              しゅーへい旅ブログ
            </span>
          </a>
        </Link>
        <nav>
          <ul className="flex justify-end items-center">
            <li>
              <a className="mr-5 p-5 text-white hover:transition hover:opacity-80">プロフィール</a>
            </li>
            <li>
              <a className="mr-5 p-5 text-white hover: transition hover:opacity-80">カフェ</a>
            </li>
            <li>
              <a className="mr-5 p-5 text-white hover: transition hover:opacity-80">おでかけスポット</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}