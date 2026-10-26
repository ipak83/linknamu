"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { Link } from "@/data/profile";

type Counts = Record<string, number>;

// 클릭 수는 줄어들지 않으므로, 늦게 도착한 응답이 더 최신 값을 덮어쓰지 않도록 큰 값을 남긴다.
function mergeMax(prev: Counts, next: Counts): Counts {
  const merged = { ...prev };
  for (const [id, count] of Object.entries(next)) {
    merged[id] = Math.max(merged[id] ?? 0, count);
  }
  return merged;
}

export default function LinkList({ links }: { links: Link[] }) {
  const [counts, setCounts] = useState<Counts>({});
  // 서버 응답을 기다리는 클릭. 화면에는 바로 반영해 둔다.
  const [pending, setPending] = useState<Counts>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data: { counts: Counts }) => setCounts((prev) => mergeMax(prev, data.counts)))
      .catch(() => {});
  }, []);

  function changePending(id: string, delta: number) {
    setPending((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + delta }));
  }

  function handleClick(id: string) {
    changePending(id, 1);
    // keepalive: 새 탭이 열리거나 페이지를 떠나도 요청이 끝까지 전송되도록 한다.
    fetch(`/api/clicks/${encodeURIComponent(id)}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data: { count: number }) => setCounts((prev) => mergeMax(prev, { [id]: data.count })))
      .catch(() => {})
      .finally(() => changePending(id, -1));
  }

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            count={(counts[link.id] ?? 0) + (pending[link.id] ?? 0)}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
