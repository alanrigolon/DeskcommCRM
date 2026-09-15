import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  CircleCheck,
  MessageCircle,
  MoveUpRight,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Kardus Conecta | Atendimento que vira oportunidade",
  description:
    "Organize conversas, clientes e próximos passos em um único lugar. Kardus Conecta é o CRM de atendimento para equipes brasileiras.",
  robots: { index: true, follow: true },
};

function ProductMark() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Kardus Conecta, início">
      <span className="grid size-9 place-items-center rounded-[10px] bg-[#17453b] text-[#f8f2e5] shadow-[0_6px_18px_rgba(23,69,59,0.18)]">
        <MessageCircle className="size-5" strokeWidth={2.2} />
      </span>
      <span className="font-[family-name:var(--font-atkinson)] text-[1.2rem] font-bold tracking-[-0.03em] text-[#173c34]">
        Kardus <span className="font-normal text-[#648578]">Conecta</span>
      </span>
    </Link>
  );
}

function PipelinePreview() {
  const columns = [
    { title: "Novos", count: "04", tone: "bg-[#eaf1ed]", accent: "bg-[#4f8f72]", names: ["Mariana Costa", "Oficina Norte"] },
    { title: "Em conversa", count: "05", tone: "bg-[#f4eee0]", accent: "bg-[#d39a45]", names: ["Grupo Alvorada", "Rafael Lima"] },
    { title: "Prontos", count: "03", tone: "bg-[#f4e9e4]", accent: "bg-[#c7735e]", names: ["Casa Ponto", "Mundo Pet"] },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[560px] rotate-[1.2deg] rounded-[14px] border border-[#d8d6c9] bg-[#fbfaf5] p-3 shadow-[0_28px_70px_rgba(31,43,36,0.18)] sm:p-4">
      <div className="flex items-center justify-between border-b border-[#e8e5db] pb-3">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-[#dcece0] text-[#27624d]"><Users className="size-3.5" /></span>
          <div><p className="text-[11px] font-bold text-[#23342e]">Visão comercial</p><p className="text-[9px] text-[#8a9188]">Atualizado agora</p></div>
        </div>
        <span className="rounded-full bg-[#f0e9d4] px-2.5 py-1 text-[9px] font-bold text-[#876a2d]">12 oportunidades</span>
      </div>
      <div className="grid grid-cols-3 gap-2.5 pt-3 sm:gap-3">
        {columns.map((column) => (
          <div key={column.title} className={`rounded-[9px] p-2.5 ${column.tone}`}>
            <div className="mb-2 flex items-center justify-between"><span className="text-[10px] font-bold text-[#394841]">{column.title}</span><span className="text-[10px] font-bold text-[#8d938b]">{column.count}</span></div>
            <div className="space-y-2">
              {column.names.map((name, index) => (
                <div key={name} className="rounded-[7px] border border-white/80 bg-white/80 p-2 shadow-[0_2px_5px_rgba(30,40,35,0.04)]">
                  <div className="mb-1.5 flex items-center gap-1.5"><span className={`size-1.5 rounded-full ${column.accent}`} /><span className="truncate text-[9px] font-bold text-[#33433c]">{name}</span></div>
                  <div className="flex items-center justify-between text-[8px] text-[#92988f]"><span>{index === 0 ? "WhatsApp" : "Retorno hoje"}</span><ChevronRight className="size-2.5" /></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-[9px] bg-[#173c34] px-3 py-2.5 text-[#f5f2e8]">
        <span className="grid size-6 place-items-center rounded-full bg-[#9bc7a8] text-[#173c34]"><Bot className="size-3.5" /></span>
        <p className="flex-1 text-[10px] leading-4"><strong>Próxima ação:</strong> retornar para Mariana às 14h</p><CircleCheck className="size-4 text-[#b8dfbd]" />
      </div>
    </div>
  );
}

export default function HomePage() {
  const benefits = [
    { icon: MessageCircle, title: "Conversas com contexto", text: "O histórico acompanha o cliente, não fica perdido em abas." },
    { icon: Bot, title: "IA com responsabilidade", text: "Automatize o que é repetitivo e entregue o importante para uma pessoa." },
    { icon: ShieldCheck, title: "Controle para crescer", text: "Permissões, dados organizados e visão da operação em tempo real." },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6ef] text-[#173c34]">
      <section className="relative bg-[#f8f6ef]">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-7">
          <ProductMark />
          <div className="hidden items-center gap-8 text-sm font-bold text-[#61756b] md:flex"><a href="#como-funciona" className="transition-colors hover:text-[#173c34]">Como funciona</a><a href="#recursos" className="transition-colors hover:text-[#173c34]">Recursos</a><a href="#para-quem" className="transition-colors hover:text-[#173c34]">Para quem é</a></div>
          <div className="flex items-center gap-3"><Link href="/login" className="hidden text-sm font-bold text-[#45645a] hover:text-[#173c34] sm:inline">Entrar</Link><Link href="#demo" className="inline-flex items-center gap-1.5 rounded-[7px] bg-[#173c34] px-4 py-2.5 text-sm font-bold text-[#f8f2e5] transition-transform hover:-translate-y-0.5">Pedir uma demo <MoveUpRight className="size-3.5" /></Link></div>
        </nav>
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 sm:pb-28 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10 lg:pb-32 lg:pt-20">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[#6e7d70]"><span className="size-2 rounded-full bg-[#d87b5e]" /> Feito para times que vendem pelo WhatsApp</div>
            <h1 className="max-w-[620px] text-[clamp(2.8rem,6vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.065em] text-[#173c34]">Atendimento que não deixa oportunidade escapar.</h1>
            <p className="mt-7 max-w-[520px] text-lg leading-8 text-[#60756a]">Converse, organize e acompanhe cada cliente em um só lugar. O Kardus Conecta dá clareza para sua equipe agir no momento certo.</p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"><Link href="#demo" className="inline-flex w-full items-center justify-center gap-2 rounded-[7px] bg-[#d9785f] px-5 py-3.5 text-sm font-bold text-[#fffaf2] shadow-[0_9px_20px_rgba(197,102,76,0.2)] transition-transform hover:-translate-y-0.5 sm:w-auto">Quero organizar meu atendimento <ArrowRight className="size-4" /></Link><Link href="/login" className="inline-flex w-full items-center justify-center gap-1.5 px-3 py-3.5 text-sm font-bold text-[#45645a] hover:text-[#173c34] sm:w-auto">Já sou cliente <ChevronRight className="size-4" /></Link></div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-[#75857a]"><span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-[#4b8b6f]" /> Implantação assistida</span><span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-[#4b8b6f]" /> Dados organizados</span><span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-[#4b8b6f]" /> Suporte próximo</span></div>
          </div>
          <div className="relative px-1 py-8 sm:px-8 lg:py-0"><div className="absolute -right-8 top-0 size-44 rounded-full bg-[#eadbb6]/60 blur-2xl sm:size-64" aria-hidden="true" /><div className="relative"><PipelinePreview /><div className="absolute -bottom-7 -left-2 flex max-w-[205px] items-center gap-3 rounded-[10px] border border-[#d8d6c9] bg-[#fffdf8] p-3 shadow-[0_15px_30px_rgba(31,43,36,0.12)] sm:-left-8"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#e5efdf] text-[#397154]"><Sparkles className="size-4" /></span><p className="text-[10px] font-bold leading-4 text-[#496056]">A equipe sabe quem precisa de atenção agora.</p></div></div></div>
        </div>
      </section>

      <section className="border-y border-[#e5e1d5] bg-[#efeee6]" aria-label="Benefícios"><div className="mx-auto grid max-w-6xl gap-0 px-5 sm:px-8 md:grid-cols-3 lg:px-10">{benefits.map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4 border-[#dddacf] px-0 py-7 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 lg:px-10"><span className="grid size-9 shrink-0 place-items-center rounded-[8px] bg-[#fffdf7] text-[#477963]"><Icon className="size-4" /></span><div><h2 className="text-sm font-bold text-[#25433a]">{title}</h2><p className="mt-1 text-xs leading-5 text-[#718078]">{text}</p></div></div>)}</div></section>

      <section id="como-funciona" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"><div><p className="text-sm font-bold text-[#d07158]">Uma operação mais leve</p><h2 className="mt-4 max-w-[420px] text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-[#173c34] sm:text-5xl">Do primeiro oi ao próximo passo.</h2><p className="mt-6 max-w-[400px] leading-7 text-[#6a7c72]">O Kardus Conecta transforma a rotina de atendimento em um processo visível, acompanhável e fácil de melhorar.</p><a href="#demo" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#3d745d] hover:text-[#173c34]">Ver como funciona <ArrowRight className="size-4" /></a></div><div id="recursos" className="grid gap-4 sm:grid-cols-3">{[["01", "Capture", "Centralize os contatos que chegam pelo WhatsApp e por seus canais de venda."],["02", "Entenda", "Veja o histórico, o estágio e a próxima ação sem depender da memória do time."],["03", "Avance", "Faça follow-up na hora certa e transforme conversas em relacionamento."]].map(([number, title, text]) => <article key={number} className="border-t-2 border-[#d9a348] pt-5"><span className="font-[family-name:var(--font-mono)] text-xs font-bold text-[#b58a3b]">{number}</span><h3 className="mt-10 text-xl font-bold tracking-[-0.03em] text-[#24483b]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#74837a]">{text}</p></article>)}</div></div></section>

      <section id="para-quem" className="bg-[#173c34] text-[#f8f2e5]"><div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-10 lg:py-28"><div><p className="text-sm font-bold text-[#b8d5b5]">Para negócios em movimento</p><h2 className="mt-4 max-w-[560px] text-4xl font-bold leading-[1.03] tracking-[-0.05em] sm:text-5xl">Menos conversa perdida. Mais cliente bem cuidado.</h2><p className="mt-6 max-w-[510px] text-base leading-7 text-[#b6c9bd]">Para pequenas equipes comerciais, operações de serviço e negócios que cresceram no WhatsApp e precisam de uma forma melhor de trabalhar.</p><div className="mt-8 grid max-w-[500px] gap-3 sm:grid-cols-2">{["Assistências e oficinas", "Distribuidoras e revendas", "Imobiliárias locais", "Prestadores de serviço"].map((item) => <span key={item} className="inline-flex items-center gap-2 text-sm font-bold text-[#dce8da]"><CircleCheck className="size-4 text-[#a8d0aa]" /> {item}</span>)}</div></div><div className="border-l border-[#507064] pl-7 lg:pl-12"><Phone className="size-7 text-[#d8a354]" /><p className="mt-7 text-2xl font-bold leading-tight tracking-[-0.03em] text-[#f7f0df]">“Agora eu sei qual cliente precisa de resposta e qual pode esperar.”</p><p className="mt-5 text-sm text-[#a9c1b3]">Uma operação organizada muda a conversa inteira.</p></div></div></section>

      <section id="demo" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="flex flex-col items-start justify-between gap-8 border-b border-[#dedbd0] pb-12 md:flex-row md:items-end"><div><p className="text-sm font-bold text-[#d07158]">Próximo passo</p><h2 className="mt-4 max-w-[620px] text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-[#173c34] sm:text-6xl">Sua equipe já está conversando. Vamos organizar isso.</h2></div><Link href="/signup" className="inline-flex shrink-0 items-center gap-2 rounded-[7px] bg-[#d9785f] px-5 py-3.5 text-sm font-bold text-[#fffaf2] shadow-[0_9px_20px_rgba(197,102,76,0.18)] transition-transform hover:-translate-y-0.5">Começar agora <ArrowRight className="size-4" /></Link></div><div className="flex flex-col justify-between gap-4 pt-6 text-sm text-[#78867d] sm:flex-row"><span>Kardus Conecta</span><span>CRM de atendimento e vendas para negócios brasileiros</span><Link href="/login" className="font-bold text-[#477963] hover:text-[#173c34]">Acessar sistema <ArrowRight className="ml-1 inline size-3.5" /></Link></div></section>
    </main>
  );
}
