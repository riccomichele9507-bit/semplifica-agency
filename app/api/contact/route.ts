import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  // Istanziato DENTRO la POST: evita il fail del build su Vercel
  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Body non valido." },
      { status: 400 }
    );
  }

  const { nome, email, messaggio } = (body ?? {}) as {
    nome?: string;
    email?: string;
    messaggio?: string;
  };

  const cleanNome = typeof nome === "string" ? nome.trim() : "";
  const cleanEmail = typeof email === "string" ? email.trim() : "";
  const cleanMessaggio = typeof messaggio === "string" ? messaggio.trim() : "";

  if (!cleanNome || !cleanEmail || !cleanMessaggio) {
    return NextResponse.json(
      { error: "Nome, email e messaggio sono obbligatori." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(cleanEmail)) {
    return NextResponse.json(
      { error: "Email non valida." },
      { status: 400 }
    );
  }

  try {
    const { error } = await resend.emails.send({
      from: "Semplifica AI <onboarding@resend.dev>",
      to: "michelericco95@gmail.com",
      replyTo: cleanEmail,
      subject: `Nuovo messaggio da ${cleanNome}`,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin: 0 0 16px;">Nuovo messaggio dal sito</h2>
          <p style="margin: 0 0 8px;"><strong>Nome:</strong> ${escapeHtml(cleanNome)}</p>
          <p style="margin: 0 0 16px;"><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
          <p style="margin: 0 0 8px;"><strong>Messaggio:</strong></p>
          <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(cleanMessaggio)}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Invio non riuscito." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Errore interno durante l'invio." },
      { status: 500 }
    );
  }
}
