import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Sandbox } from "@/components/sandbox/sandbox";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [live, setLive] = useState(false);
  useEffect(() => setLive(true), []);
  if (!live) return <Boot />;
  return <Sandbox />;
}

function Boot() {
  return (
    <main className="boot">
      <p className="eyebrow">Plaza cotidiana</p>
      <h1>Peso</h1>
      <p className="boot-note">Abriendo la calle…</p>
    </main>
  );
}
