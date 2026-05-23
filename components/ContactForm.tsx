"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text placeholder:text-text-dim transition-colors focus:border-lime/50 focus:outline-none focus:ring-2 focus:ring-lime/40";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nome: String(data.get("nome") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      messaggio: String(data.get("messaggio") ?? "").trim(),
    };

    if (!payload.nome || !payload.email || !payload.messaggio) {
      setStatus("error");
      setErrorMsg("Compila tutti i campi prima di inviare.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("request_failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(
        "Qualcosa è andato storto. Riprova o scrivici direttamente via email."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="nome" className="text-sm font-medium text-text">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          autoComplete="name"
          placeholder="Come ti chiami?"
          className={inputClass}
          disabled={status === "loading"}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="dove ti rispondiamo"
          className={inputClass}
          disabled={status === "loading"}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="messaggio" className="text-sm font-medium text-text">
          Messaggio
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          placeholder="Raccontaci cosa vuoi costruire."
          className={`${inputClass} resize-none`}
          disabled={status === "loading"}
          required
        />
      </div>

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Invio in corso…" : "Invia messaggio →"}
      </Button>

      {status === "success" && (
        <p
          role="status"
          className="rounded-xl border border-lime/40 bg-lime/10 px-4 py-3 text-sm text-lime"
        >
          Messaggio inviato. Ti rispondiamo a breve — di solito entro 24 ore.
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl border border-amber/40 bg-amber/10 px-4 py-3 text-sm text-amber"
        >
          {errorMsg}
        </p>
      )}
    </form>
  );
}
