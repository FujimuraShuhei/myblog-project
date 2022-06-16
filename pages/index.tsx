import Link from 'next/link';
import { client } from '../libs/client';
import type { Article } from '../types/article';


//  記事一覧の型定義
 type Props = {
   articles: Array<Article>;
 };

export default function Home({ articles }: Props) {
  // 記事一覧
  return (
    <>
      <div className="container flex mx-auto max-w-[86%]">
        <h2 className="flex justify-start text-lg font-bold ml-10 mb-10 pt-10">
          最新おでかけ記事
        </h2>
      </div>
      <div className="container flex justify-around max-w-[90%] mx-auto">
        <article className="max-w-[60%] mx-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
          {articles.map((article) => (
            <Link href={`/article/${article.id}`} passHref>
              <a
                className="rounded overflow-hidden shadow-lg mb-5 hover:text-sky-900 hover:transition"
                key={article.id}
              >
                <img
                  className="w-full aspect-video hover:scale-110 hover:transform-gpu hover:transition duration-700 hover:duration-700"
                  src={article.eye_catch.url}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-7 text-lg font-bold">
                  {article.title}
                </div>
                <div className="px-6 pt-4 pb-2">
                  {article.tag && (
                    <span
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-sky-900 mr-2 mb-2 
                   hover:bg-sky-900 hover:text-white hover:transition"
                    >
                      {article.tag}
                    </span>
                  )}
                </div>
              </a>
            </Link>
          ))}
        </article>
        <aside className="max-w-[30%]">
          <div className="rounded p-10 overflow-hidden shadow-lg mb-5">
            <img
              className="rounded-full w-1/2 mx-auto mb-3"
              src="/image/DSC01046.jpg"
              alt="プロフィール画像"
            />
            <p className="text-center mb-5">運営者:しゅーへい</p>
            <p className="text-center">
              東京・神奈川・千葉を中心とする<br></br>
              おでかけスポットを紹介します
            </p>
          </div>
          <table className="rounded p-10 overflow-hidden shadow-lg mb-5 border-collapse w-full border border-slate-100 ...">
            <thead>
              <tr>
                <h3 className="font-bold py-5 text-center text-sky-900">
                  記事カテゴリ
                </h3>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="py-2 border border-slate-200 ...">
                  おでかけスポット
                </td>
              </tr>
              <tr>
                <td className="py-2 border border-slate-200 ...">カフェ</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </>
  );
}

export const getServerSideProps  = async () => {
   const data = await client.get({ endpoint: 'articles' });

   return {
     props: {
       articles: data.contents,
     },
   };
 };