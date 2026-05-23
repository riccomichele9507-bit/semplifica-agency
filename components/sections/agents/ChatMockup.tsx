import Reveal from "@/components/anim/Reveal";

type Message = {
  from: "user" | "bot";
  text: string;
  time: string;
};

type Block = {
  label: string;
  messages: Message[];
};

type ChatMockupProps = {
  /** Single letter / short tag shown in the chat header avatar. */
  agentTag: string;
  agentName: string;
  blocks: Block[];
  /** Right-column heading + bullet list. */
  featuresTitle: string;
  features: string[];
  label?: string;
};

function Divider({ label }: { label: string }) {
  return (
    <div className="my-4 flex items-center gap-3">
      <div className="h-px flex-1 bg-border" />
      <span className="whitespace-nowrap rounded-full border border-lime/20 bg-lime/5 px-2 py-0.5 text-[10px] font-medium tracking-wide text-lime">
        {label}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function Bubble({ msg }: { msg: Message }) {
  const isUser = msg.from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
          isUser
            ? "rounded-br-md bg-surface-2 text-text"
            : "rounded-bl-md bg-lime/10 text-text"
        }`}
      >
        <p className="whitespace-pre-line">{msg.text}</p>
        <p className={`mt-1 text-right text-[10px] ${isUser ? "text-text-dim" : "text-lime/70"}`}>
          {msg.time} {!isUser && "✓✓"}
        </p>
      </div>
    </div>
  );
}

export default function ChatMockup({
  agentTag,
  agentName,
  blocks,
  featuresTitle,
  features,
  label = "Live demo",
}: ChatMockupProps) {
  return (
    <section className="relative border-t border-border py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Phone mockup */}
          <Reveal className="flex justify-center">
            <div className="w-full max-w-[320px] rounded-[2rem] border border-border bg-surface p-4">
              {/* Header */}
              <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime/10">
                  <span className="text-xs font-bold text-lime">{agentTag}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text">{agentName}</p>
                  <p className="flex items-center gap-1 text-[10px] text-text-dim">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    Online
                  </p>
                </div>
              </div>

              {/* Chat blocks */}
              <div className="space-y-1.5">
                {blocks.map((block) => (
                  <div key={block.label}>
                    <Divider label={block.label} />
                    <div className="space-y-1.5">
                      {block.messages.map((msg, mi) => (
                        <Bubble key={mi} msg={msg} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Features */}
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">{label}</p>
            <h3 className="font-heading text-2xl font-bold md:text-4xl">{featuresTitle}</h3>
            <ul className="mt-8 space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-lime/10 text-lime">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-text-dim">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
