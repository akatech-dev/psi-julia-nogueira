import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import juliaHero from "@/assets/julia-hero.jpg";
import juliaHero3 from "@/assets/julia-hero3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Júlia Nogueira | Neuropsicóloga em Brasília — Avaliação Neuropsicológica, ABA e Terapia Infantil" },
      { name: "description", content: "Neuropsicóloga em Brasília. Avaliação Neuropsicológica, ABA e Terapia Infantil para crianças, adolescentes, adultos e famílias. Agende seu atendimento." },
      { name: "keywords", content: "Neuropsicóloga Brasília, Avaliação Neuropsicológica Brasília, ABA Brasília, Terapia Infantil Brasília, TDAH, Autismo, Neurodiversidade" },
      { property: "og:title", content: "Júlia Nogueira | Neuropsicóloga em Brasília" },
      { property: "og:description", content: "Atendimento humanizado e baseado em evidências em Neuropsicologia, ABA e Terapia Infantil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const WHATSAPP_NUMBER = "5561993315211";

function buildWaMessage(data: {
  nome?: string; paciente?: string; faixa?: string; necessidade?: string; servico?: string;
}) {
  const txt = `Olá, Júlia.\n\nMeu nome é ${data.nome || "[NOME]"}.\nGostaria de solicitar informações sobre atendimento.\n\nPaciente: ${data.paciente || "[PACIENTE]"}\nFaixa etária: ${data.faixa || "—"}\nNecessidade principal: ${data.necessidade || "—"}\nServiço desejado: ${data.servico || "—"}\n\nPoderia me informar os horários disponíveis?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`;
}

function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path d="M32 8c-6 8-14 14-14 24 0 9 6 16 14 20 8-4 14-11 14-20 0-10-8-16-14-24Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M32 14v38M22 28c4 2 6 6 10 6M42 28c-4 2-6 6-10 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <WhenToSeek />
      <Services />
      <SmartForm />
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingWa />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 text-ink">
          <LeafMark className="w-8 h-8 text-foreground/80" />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide">JÚLIA NOGUEIRA</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Neuropsicóloga</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
          <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
          <a href="#agendar" className="hover:text-foreground transition">Agendar</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href="#agendar" className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-soft)]">
          Solicitar Horários
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative leaf-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Brasília · DF
          </span>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-foreground">
            Cuidando do desenvolvimento, comportamento e bem-estar em todas as fases da vida.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Atendimento especializado em <em className="not-italic text-foreground">Neuropsicologia, ABA e Terapia Infantil</em> em Brasília e região.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#agendar" className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-soft)]">
              Solicitar Horários
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-card/60 backdrop-blur px-7 py-3.5 text-sm font-medium text-foreground hover:bg-card transition">
              Conhecer os Serviços
            </a>
          </div>
          <div className="flex items-center gap-6 pt-6 text-xs text-muted-foreground">
            <Tick>Baseado em evidências</Tick>
            <Tick>Atendimento humanizado</Tick>
            <Tick>Todas as idades</Tick>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-secondary/60 -rotate-2" />
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-primary/30 blur-2xl" />
          <img
            src={juliaHero}
            alt="Júlia Nogueira, neuropsicóloga em Brasília"
            width={1024}
            height={1536}
            className="relative rounded-[2rem] object-cover w-full h-[520px] md:h-[600px] shadow-[var(--shadow-card)]"
          />
          <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-72 rounded-2xl bg-card/95 backdrop-blur p-5 shadow-[var(--shadow-card)] border border-border">
            <div className="flex items-center gap-3">
              <LeafMark className="w-8 h-8 text-primary" />
              <div>
                <div className="font-display text-lg">Júlia Nogueira</div>
                <div className="text-xs text-muted-foreground">Neuropsicóloga · CRP-01/25444</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14">
      {eyebrow && <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">{eyebrow}</div>}
      <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">{title}</h2>
      {sub && <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{sub}</p>}
    </div>
  );
}

function About() {
  const tags = ["Neuropsicologia", "ABA", "Atendimento humanizado", "Desenvolvimento infantil", "Avaliação cognitiva", "Neurodiversidade"];
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-card)]">
            <img
              src={juliaHero3}
              alt="Júlia Nogueira, neuropsicóloga em Brasília"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-6">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Sobre a profissional</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Olá, sou Júlia Nogueira</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Meu trabalho é auxiliar crianças, adolescentes, adultos e suas famílias na compreensão de suas potencialidades e desafios, oferecendo intervenções fundamentadas em evidências científicas e em uma escuta acolhedora.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map(t => (
              <span key={t} className="rounded-full bg-muted px-4 py-1.5 text-sm text-foreground/80 border border-border">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhenToSeek() {
  const items = [
    "Dificuldades escolares",
    "Suspeita de TDAH",
    "Suspeita de Autismo",
    "Problemas de atenção",
    "Alterações de comportamento",
    "Dificuldades emocionais",
    "Questões de aprendizagem",
    "Avaliação neuropsicológica",
  ];
  return (
    <section className="py-24 md:py-28 bg-muted/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Quando procurar ajuda" title="Sinais que indicam o momento de buscar acompanhamento" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((t) => (
            <div key={t} className="group rounded-2xl bg-card border border-border p-6 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                <svg className="w-4 h-4 text-foreground" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="text-foreground font-medium leading-snug">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      title: "Avaliação Neuropsicológica",
      desc: "Investigação completa do funcionamento cognitivo, emocional e comportamental.",
      meta: "Todas as idades",
      price: "R$ 2.200",
      priceSub: "investimento total",
      service: "Avaliação Neuropsicológica",
    },
    {
      title: "Terapia Infantil",
      desc: "Atendimento voltado ao desenvolvimento emocional, social e comportamental da criança.",
      meta: "0 a 12 anos",
      price: "R$ 200",
      priceSub: "por sessão",
      service: "Terapia Infantil",
    },
  ];
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Serviços" title="Atendimento especializado e individualizado" sub="Cada caminho é construído de acordo com a história e os objetivos de cada pessoa." />
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="relative rounded-3xl bg-card border border-border p-8 md:p-10 overflow-hidden hover:shadow-[var(--shadow-card)] transition">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-secondary/50 blur-2xl -z-0" />
              <LeafMark className="absolute top-6 right-6 w-12 h-12 text-primary/60" />
              <h3 className="font-display text-2xl md:text-3xl leading-tight relative">{c.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed relative">{c.desc}</p>
              <div className="mt-6 flex items-center gap-3 text-sm relative">
                <span className="rounded-full bg-secondary/60 px-3 py-1 text-foreground/80">{c.meta}</span>
              </div>
              <div className="mt-8 flex items-end justify-between gap-4 relative">
                <div>
                  <div className="font-display text-3xl text-foreground">{c.price}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.priceSub}</div>
                </div>
                <a
                  href={buildWaMessage({ servico: c.service })}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
                >
                  Quero Agendar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmartForm() {
  const [nome, setNome] = useState("");
  const [paciente, setPaciente] = useState("");
  const [faixa, setFaixa] = useState("");
  const [necessidade, setNecessidade] = useState("");
  const [servico, setServico] = useState("");

  const valid = nome.trim() && paciente.trim() && faixa && necessidade && servico;
  const link = useMemo(() => buildWaMessage({ nome: nome.trim(), paciente: paciente.trim(), faixa, necessidade, servico }), [nome, paciente, faixa, necessidade, servico]);

  return (
    <section id="agendar" className="py-24 md:py-32 bg-muted/60">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="Formulário" title="Vamos entender sua necessidade" sub="Preencha as informações abaixo. Você será direcionado ao WhatsApp com a mensagem pronta." />
        <form
          onSubmit={(e) => { e.preventDefault(); if (valid) window.open(link, "_blank"); }}
          className="rounded-3xl bg-card border border-border p-6 md:p-10 space-y-6 shadow-[var(--shadow-card)]"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Nome do responsável" value={nome} onChange={setNome} maxLength={80} required />
            <Field label="Nome do paciente" value={paciente} onChange={setPaciente} maxLength={80} required />
          </div>
          <RadioGroup label="Quem necessita do atendimento?" value={faixa} onChange={setFaixa}
            options={["Criança", "Adolescente", "Adulto"]} />
          <SelectField label="Qual sua principal necessidade?" value={necessidade} onChange={setNecessidade}
            options={["Suspeita de Autismo","Suspeita de TDAH","Dificuldade escolar","Questões comportamentais","Questões emocionais","Avaliação neuropsicológica","Outro"]} />
          <SelectField label="Qual serviço deseja?" value={servico} onChange={setServico}
            options={["Avaliação Neuropsicológica","Terapia Infantil","Preciso de orientação"]} />
          <button
            type="submit"
            disabled={!valid}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-[var(--shadow-soft)]"
          >
            <WaIcon className="w-4 h-4" />
            Solicitar Horários Disponíveis
          </button>
          <p className="text-xs text-muted-foreground text-center">Seus dados são utilizados apenas para preencher a mensagem do WhatsApp.</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, maxLength, required }: { label: string; value: string; onChange: (v: string)=>void; maxLength?: number; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm text-foreground/80 font-medium">{label}</span>
      <input
        value={value} onChange={(e)=>onChange(e.target.value)} maxLength={maxLength} required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
      />
    </label>
  );
}

function RadioGroup({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string)=>void; options: string[] }) {
  return (
    <div>
      <div className="text-sm text-foreground/80 font-medium mb-2">{label}</div>
      <div className="grid grid-cols-3 gap-2">
        {options.map(o => (
          <button type="button" key={o} onClick={() => onChange(o)}
            className={`rounded-xl border px-4 py-3 text-sm transition ${value===o ? "border-primary bg-primary/15 text-foreground" : "border-input bg-background text-muted-foreground hover:border-primary/40"}`}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string)=>void; options: string[] }) {
  return (
    <label className="block">
      <span className="text-sm text-foreground/80 font-medium">{label}</span>
      <select value={value} onChange={(e)=>onChange(e.target.value)} required
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition">
        <option value="">Selecione…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function Faq() {
  const items = [
    { q: "A avaliação atende todas as idades?", a: "Sim. A avaliação neuropsicológica é realizada para crianças, adolescentes, adultos e idosos, com instrumentos específicos para cada faixa etária." },
    { q: "Qual o valor da avaliação?", a: "O investimento da Avaliação Neuropsicológica completa é de R$ 2.200, incluindo entrevistas, sessões de testagem, devolutiva e laudo." },
    { q: "Como funciona a terapia infantil?", a: "São sessões semanais voltadas ao desenvolvimento emocional, social e comportamental, com participação ativa da família no processo." },
    { q: "O atendimento é presencial?", a: "Os atendimentos são realizados em consultório em Brasília. Algumas etapas podem ser feitas de forma online, conforme o caso." },
    { q: "Como faço para agendar?", a: "Basta preencher o formulário acima ou enviar uma mensagem direta no WhatsApp. Em breve retornaremos com os horários disponíveis." },
  ];
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
        <div className="space-y-3">
          {items.map((it, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-card p-6 open:shadow-[var(--shadow-card)] transition">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-display text-lg md:text-xl text-foreground pr-4">{it.q}</span>
                <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground/60 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-24 md:py-32 leaf-bg">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <LeafMark className="w-12 h-12 text-foreground/60 mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-5xl leading-tight text-foreground">
          Cada pessoa possui uma forma única de perceber, aprender e se desenvolver.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Vamos construir juntos um caminho de compreensão, desenvolvimento e qualidade de vida.
        </p>
        <a href="#agendar" className="mt-10 inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-soft)]">
          Agendar Atendimento
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <LeafMark className="w-9 h-9 text-background/80" />
            <div>
              <div className="font-display text-xl tracking-wide text-background">JÚLIA NOGUEIRA</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-background/60">Neuropsicóloga</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-background/70 max-w-xs leading-relaxed">
            Acolhimento, ciência e desenvolvimento humano em todas as fases da vida.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="text-background/60 uppercase tracking-[0.2em] text-[11px] mb-3">Contato</div>
          <a href={buildWaMessage({})} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition">WhatsApp: (61) 99331-5211</a>
          <a href="https://instagram.com/psi.julianogueira" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition">Instagram: @psi.julianogueira</a>
          <div className="text-background/70">Brasília e região</div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="text-background/60 uppercase tracking-[0.2em] text-[11px] mb-3">Atendimento</div>
          <a href="#servicos" className="block hover:text-primary transition">Avaliação Neuropsicológica</a>
          <a href="#servicos" className="block hover:text-primary transition">Terapia Infantil</a>
          <a href="#agendar" className="block hover:text-primary transition">Solicitar horários</a>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-background/50 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Júlia Nogueira · Neuropsicóloga</span>
          <span>Brasília · DF</span>
        </div>
      </div>
    </footer>
  );
}

function WaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 3 17l-1 5 5.2-1.4A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3A9 9 0 1 1 12 21.5Zm5.2-6.7c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1l-1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.1 4.5 2.5 1 3 .8 3.6.8.5 0 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"/>
    </svg>
  );
}

function FloatingWa() {
  return (
    <a href={buildWaMessage({})} target="_blank" rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[oklch(0.72_0.16_150)] text-white shadow-[var(--shadow-card)] hover:scale-105 transition">
      <WaIcon className="w-7 h-7" />
    </a>
  );
}
