import Link from "next/link";
import {Locale} from "@/i18n/locales";
import {Container} from "./container";

export function Footer({locale}: {locale: Locale}) {
  return (
    <footer className="border-t border-black/5 bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-4">
          <div>
            <div className="text-sm font-semibold">Ningxia Hengkang Technology Co., Ltd.</div>
            <p className="mt-3 text-sm text-black/70">
              Pharmaceutical APIs • Nutrition Ingredients • Green Manufacturing
            </p>
            <p className="mt-3 text-xs text-black/50">
              © {new Date().getFullYear()} Ningxia Hengkang. All rights reserved.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Company</div>
            <div className="mt-3 grid gap-2 text-black/70">
              <Link className="hover:text-black" href={`/${locale}/about`}>About</Link>
              <Link className="hover:text-black" href={`/${locale}/innovation`}>Innovation</Link>
              <Link className="hover:text-black" href={`/${locale}/sustainability`}>Sustainability</Link>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Business</div>
            <div className="mt-3 grid gap-2 text-black/70">
              <Link className="hover:text-black" href={`/${locale}/products`}>Products</Link>
              <Link className="hover:text-black" href={`/${locale}/news`}>News & Media</Link>
              <Link className="hover:text-black" href={`/${locale}/contact`}>Contact</Link>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Careers</div>
            <div className="mt-3 grid gap-2 text-black/70">
              <Link className="hover:text-black" href={`/${locale}/careers`}>Open roles</Link>
              <Link className="hover:text-black" href={`/${locale}/careers#culture`}>Life at Hengkang</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
