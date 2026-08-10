"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Beacons page views to berzinar.com's admin (Portfolio Analytics), the same
// way berzinar.com tracks its own pages: an anonymous visitor id (persistent)
// + session id (30-min sliding window) kept in localStorage, sent once per
// route change. Runs against the local berzinar.com dev server in
// development so it can be verified without touching production stats.
const ENDPOINT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/portfolio-track.php"
    : "https://berzinar.com/portfolio-track.php";

const HEX32 = /^[a-f0-9]{32}$/;
const SESSION_WINDOW_MS = 30 * 60 * 1000;

function randomId(): string {
  const bytes = new Uint8Array(16);
  if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function pageKeyFor(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/projects/")) {
    const slug = pathname.replace(/^\/projects\//, "").replace(/\/+$/, "");
    if (slug) return `project/${slug}`;
  }
  return pathname.replace(/^\/|\/$/g, "") || "home";
}

export default function PortfolioAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    let vid: string;
    let sid: string;
    try {
      const store = window.localStorage;

      vid = store.getItem("bz_vid") || "";
      if (!HEX32.test(vid)) {
        vid = randomId();
        store.setItem("bz_vid", vid);
      }

      const now = Date.now();
      const exp = parseInt(store.getItem("bz_sid_exp") || "0", 10);
      sid = store.getItem("bz_sid") || "";
      if (!HEX32.test(sid) || !exp || now > exp) {
        sid = randomId();
        store.setItem("bz_sid", sid);
      }
      store.setItem("bz_sid_exp", String(now + SESSION_WINDOW_MS));
    } catch {
      return; // localStorage unavailable (private mode / blocked) — skip silently
    }

    const page = pageKeyFor(pathname || "/");
    const url = `${ENDPOINT}?p=${encodeURIComponent(page)}&v=${vid}&s=${sid}`;

    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url);
      } else {
        new Image().src = url;
      }
    } catch {
      // never let tracking affect the page
    }
  }, [pathname]);

  return null;
}
