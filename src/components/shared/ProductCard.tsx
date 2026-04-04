import { Star, Package, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductCard({ name, price, img, link = "/shop/products/1" }: { name: string; price: string; img: string, link?: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group flex flex-col h-full">
      <Link href={link} className={`w-full h-48 rounded-xl ${img} mb-4 relative overflow-hidden flex items-center justify-center cursor-pointer`}>
        <Package className="w-16 h-16 text-slate-400/50" />
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">কুইক ভিউ</span>
        </div>
      </Link>
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-slate-900 dark:text-white line-clamp-2">
          <Link href={link} className="hover:text-primary-600 transition-colors">{name}</Link>
        </h4>
      </div>
      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
        ))}
        <span className="text-xs text-slate-500 ml-1">(১২৪)</span>
      </div>
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-50 dark:border-slate-700/50">
        <span className="font-bold text-lg text-primary-600">{price}</span>
        <button className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white rounded-full transition-colors cursor-pointer">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
