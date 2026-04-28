"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EMOJIS = [
];

const COUNT = 16;
const EMOJI_SIZE = 16;
const GAP = 8;
const SPEED = 0.5;

interface Point {
  x: number;
  y: number;
}

function getPerimeterPoint(
  t: number,
  w: number,
  h: number,
  r: number,
  offset: number,
): Point {
  const W = w + offset * 2;
  const H = h + offset * 2;
  const R = Math.min(r + offset, Math.min(W, H) / 2);

  const straightW = W - 2 * R;
  const straightH = H - 2 * R;
  const cornerLen = (Math.PI / 2) * R;
  const totalLen = 2 * straightW + 2 * straightH + 4 * cornerLen;

  let d = ((t % totalLen) + totalLen) % totalLen;

  // top edge (left to right)
  if (d < straightW) {
    return { x: R + d - W / 2, y: -H / 2 };
  }
  d -= straightW;

  // top-right corner
  if (d < cornerLen) {
    const a = -Math.PI / 2 + (d / cornerLen) * (Math.PI / 2);
    return {
      x: W / 2 - R + Math.cos(a) * R,
      y: -H / 2 + R + Math.sin(a) * R,
    };
  }
  d -= cornerLen;

  // right edge (top to bottom)
  if (d < straightH) {
    return { x: W / 2, y: -H / 2 + R + d };
  }
  d -= straightH;

  // bottom-right corner
  if (d < cornerLen) {
    const a = 0 + (d / cornerLen) * (Math.PI / 2);
    return {
      x: W / 2 - R + Math.cos(a) * R,
      y: H / 2 - R + Math.sin(a) * R,
    };
  }
  d -= cornerLen;

  // bottom edge (right to left)
  if (d < straightW) {
    return { x: W / 2 - R - d, y: H / 2 };
  }
  d -= straightW;

  // bottom-left corner
  if (d < cornerLen) {
    const a = Math.PI / 2 + (d / cornerLen) * (Math.PI / 2);
    return {
      x: -W / 2 + R + Math.cos(a) * R,
      y: H / 2 - R + Math.sin(a) * R,
    };
  }
  d -= cornerLen;

  // left edge (bottom to top)
  if (d < straightH) {
    return { x: -W / 2, y: H / 2 - R - d };
  }
  d -= straightH;

  // top-left corner
  const a = Math.PI + (d / cornerLen) * (Math.PI / 2);
  return {
    x: -W / 2 + R + Math.cos(a) * R,
    y: -H / 2 + R + Math.sin(a) * R,
  };
}

export default function AnimatedMenuButton() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const btn = buttonRef.current;

    if (!wrapper || !btn) return;

    itemsRef.current = [];

    // Create emoji items
    const items: HTMLDivElement[] = [];
    for (let i = 0; i < COUNT; i++) {
      const el = document.createElement("div");
      el.className =
        "absolute pointer-events-none text-base leading-none select-none";
      el.textContent = EMOJIS[i % EMOJIS.length];
      wrapper.appendChild(el);
      items.push(el);
      itemsRef.current.push(el);
    }

    let animationFrameId: number;

    const animate = (ts: number) => {
      const t = ts * 0.001;
      const bw = btn.offsetWidth;
      const bh = btn.offsetHeight;
      const br = 12; // border-radius

      const offset = GAP + EMOJI_SIZE / 2;
      const W = bw + offset * 2;
      const H = bh + offset * 2;
      const R = Math.min(br + offset, Math.min(W, H) / 2);
      const totalLen = 2 * (W - 2 * R) + 2 * (H - 2 * R) + 2 * Math.PI * R;

      const cx = bw / 2;
      const cy = bh / 2;

      items.forEach((el, i) => {
        const pos =
          t * SPEED * (totalLen / (2 * Math.PI)) + (i / COUNT) * totalLen;
        const point = getPerimeterPoint(pos, bw, bh, br, offset);
        el.style.left = cx + point.x - EMOJI_SIZE / 2 + "px";
        el.style.top = cy + point.y - EMOJI_SIZE / 2 + "px";
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      items.forEach((el) => wrapper.removeChild(el));
    };
  }, []);

  return (
    <Link href="/menu">
      <div
        ref={wrapperRef}
        className="relative inline-block"
        style={{ perspective: "1000px" }}
      >
        <button
          ref={buttonRef}
          className="px-8 py-6 text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-700 border border-emerald-700 rounded-xl cursor-pointer transition-all duration-150 whitespace-nowrap hover:scale-105 active:scale-97"
        >
          Menü ansehen
        </button>
      </div>
    </Link>
  );
}
