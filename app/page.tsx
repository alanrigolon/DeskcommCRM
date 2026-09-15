import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  CircleCheck,
  Clock,
  MessageCircle,
  MoveUpRight,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Kardus Conecta | CRM de atendimento para clínicas",
  description:
    "Organize conversas, pacientes e agendamentos em um único lugar. Kardus Conecta é o CRM de atendimento via WhatsApp para clínicas e consultórios.",
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
    { title: "Novos contatos", count: "04", tone: "bg-[#eaf1ed]", accent: "bg-[#4f8f72]", names: ["Mariana Costa", "Convênio Vitalis"] },
    { title: "Agendados", count: "05", tone: "bg-[#f4eee0]", accent: "bg-[#d39a45]", names: ["Rafael Lima", "Ana Ferreira"] },
    { title: "Compareceu", count: "03", tone: "bg-[#f4e9e4]", accent: "bg-[#c7735e]", names: ["Paula Rocha", "João Meireles"] },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[560px] rotate-[1.2deg] rounded-[14px] border border-[#d8d6c9] bg-[#fbfaf5] p-3 shadow-[0_28px_70px_rgba(31,43,36,0.18)] sm:p-4">
      <div className="flex items-center justify-between border-b border-[#e8e5db] pb-3">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-[#dcece0] text-[#27624d]"><Users className="size-3.5" /></span>
          <div><p className="text-[11px] font-bold text-[#23342e]">Agenda da clínica</p><p className="text-[9px] text-[#8a9188]">Atualizado agora</p></div>
        </div>
        <span className="rounded-full bg-[#f0e9d4] px-2.5 py-1 text-[9px] font-bold text-[#876a2d]">12 pacientes</span>
      </div>
      <div className="grid grid-cols-3 gap-2.5 pt-3 sm:gap-3">
        {columns.map((column) => (
          <div key={column.title} className={`rounded-[9px] p-2.5 ${column.tone}`}>
            <div className="mb-2 flex items-center justify-between"><span className="text-[10px] font-bold text-[#394841]">{column.title}</span><span className="text-[10px] font-bold text-[#8d938b]">{column.count}</span></div>
            <div className="space-y-2">
              {column.names.map((name, index) => (
                <div key={name} className="rounded-[7px] border border-white/80 bg-white/80 p-2 shadow-[0_2px_5px_rgba(30,40,35,0.04)]">
                  <div className="mb-1.5 flex items-center gap-1.5"><span className={`size-1.5 rounded-full ${column.accent}`} /><span className="truncate text-[9px] font-bold text-[#33433c]">{name}</span></div>
                  <div className="flex items-center justify-between text-[8px] text-[#92988f]"><span>{index === 0 ? "WhatsApp" : "Consulta hoje"}</span><ChevronRight className="size-2.5" /></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-[9px] bg-[#173c34] px-3 py-2.5 text-[#f5f2e8]">
        <span className="grid size-6 place-items-center rounded-full bg-[#9bc7a8] text-[#173c34]"><Bot className="size-3.5" /></span>
        <p className="flex-1 text-[10px] leading-4"><strong>Próxima ação:</strong> confirmar retorno de Mariana às 14h</p><CircleCheck className="size-4 text-[#b8dfbd]" />
      </div>
    </div>
  );
}

function AgentChatPreview() {
  const messages = [
    { from: "paciente", text: "Oi! Vocês atendem pelo convênio Vitalis? Queria marcar uma avaliação." },
    { from: "agente", text: "Atendemos sim! Vitalis cobre a avaliação inicial. Prefere manhã ou tarde essa semana?" },
    { from: "paciente", text: "Tarde, se tiver quinta-feira." },
    { from: "agente", text: "Tenho quinta às 15h com a Dra. Camila. Confirmo o horário e já te mando o lembrete no dia?" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[420px] rotate-[-1deg] rounded-[16px] border border-[#d8d6c9] bg-[#fbfaf5] shadow-[0_28px_70px_rgba(31,43,36,0.18)]">
      <div className="flex items-center gap-2.5 rounded-t-[16px] border-b border-[#e8e5db] bg-[#173c34] px-4 py-3">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#9bc7a8] text-[#173c34]"><Bot className="size-4" /></span>
        <div>
          <p className="text-[11px] font-bold text-[#f5f2e8]">Agente da clínica</p>
          <p className="flex items-center gap-1 text-[9px] text-[#b6c9bd]"><span className="size-1.5 rounded-full bg-[#8fd6a0]" /> Online agora, via WhatsApp</p>
        </div>
      </div>
      <div className="space-y-2.5 px-4 py-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.from === "agente" ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-[85%] rounded-[10px] px-3 py-2 text-[11px] leading-5 ${
                message.from === "agente"
                  ? "rounded-tl-[2px] bg-white text-[#33433c] shadow-[0_2px_5px_rgba(30,40,35,0.06)]"
                  : "rounded-tr-[2px] bg-[#dcece0] text-[#23342e]"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-b-[16px] border-t border-[#e8e5db] bg-[#f4eee0] px-4 py-2.5 text-[9px] font-bold text-[#876a2d]">
        <Clock className="size-3.5" /> Respondeu em 4 segundos, sem fila de espera
      </div>
    </div>
  );
}

export default function HomePage() {
  const benefits = [
    { icon: MessageCircle, title: "Conversas com contexto", text: "O histórico do paciente acompanha a conversa, não fica perdido em abas." },
    { icon: ShieldCheck, title: "Menos faltas, mais retorno", text: "Lembretes automáticos e reengajamento de quem sumiu na negociação." },
    { icon: Users, title: "A equipe toda alinhada", text: "Permissões, dados organizados e visão da agenda em tempo real." },
  ];

  return (
    <main className="min-h-screen bg-[#f8f6ef] text-[#173c34]">
      <nav className="sticky top-0 z-50 border-b border-[#e5e1d5] bg-[#f8f6ef]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f8f6ef]/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-6">
          <ProductMark />
          <div className="hidden items-center gap-8 text-sm font-bold text-[#61756b] md:flex"><a href="#agente" className="transition-colors hover:text-[#173c34]">Agente de IA</a><a href="#como-funciona" className="transition-colors hover:text-[#173c34]">Como funciona</a><a href="#para-quem" className="transition-colors hover:text-[#173c34]">Para quem é</a></div>
          <div className="flex items-center gap-3"><Link href="/login" className="hidden text-sm font-bold text-[#45645a] hover:text-[#173c34] sm:inline">Entrar</Link><Link href="/signup" className="inline-flex items-center gap-1.5 rounded-[7px] bg-[#173c34] px-4 py-2.5 text-sm font-bold text-[#f8f2e5] transition-transform hover:-translate-y-0.5">Criar minha conta <MoveUpRight className="size-3.5" /></Link></div>
        </div>
      </nav>
      <section className="relative overflow-hidden bg-[#f8f6ef]">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 sm:pb-28 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10 lg:pb-32 lg:pt-20">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[#6e7d70]"><span className="size-2 rounded-full bg-[#d87b5e]" /> Um agente de IA responde sua clínica no WhatsApp, todos os dias</div>
            <h1 className="max-w-[620px] text-[clamp(2.8rem,6vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.065em] text-[#173c34]">Menos falta, mais paciente atendido de verdade.</h1>
            <p className="mt-7 max-w-[520px] text-lg leading-8 text-[#60756a]">Enquanto sua recepção cuida de quem está na clínica, o agente de IA responde, qualifica e agenda pelo WhatsApp — o Kardus Conecta organiza tudo num só lugar.</p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"><Link href="#demo" className="inline-flex w-full items-center justify-center gap-2 rounded-[7px] bg-[#d9785f] px-5 py-3.5 text-sm font-bold text-[#fffaf2] shadow-[0_9px_20px_rgba(197,102,76,0.2)] transition-transform hover:-translate-y-0.5 sm:w-auto">Quero organizar minha clínica <ArrowRight className="size-4" /></Link><Link href="/login" className="inline-flex w-full items-center justify-center gap-1.5 px-3 py-3.5 text-sm font-bold text-[#45645a] hover:text-[#173c34] sm:w-auto">Já sou cliente <ChevronRight className="size-4" /></Link></div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-[#75857a]"><span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-[#4b8b6f]" /> Implantação assistida</span><span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-[#4b8b6f]" /> Lembrete de consulta</span><span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-[#4b8b6f]" /> Suporte próximo</span><span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-[#4b8b6f]" /> Dados do paciente protegidos (LGPD)</span></div>
          </div>
          <div className="relative px-1 py-8 sm:px-8 lg:py-0"><div className="absolute -right-8 top-0 size-44 rounded-full bg-[#eadbb6]/60 blur-2xl sm:size-64" aria-hidden="true" /><div className="relative"><PipelinePreview /><div className="absolute -bottom-7 -left-2 flex max-w-[205px] items-center gap-3 rounded-[10px] border border-[#d8d6c9] bg-[#fffdf8] p-3 shadow-[0_15px_30px_rgba(31,43,36,0.12)] sm:-left-8"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#e5efdf] text-[#397154]"><Sparkles className="size-4" /></span><p className="text-[10px] font-bold leading-4 text-[#496056]">A recepção sabe quem precisa de atenção agora.</p></div></div></div>
        </div>
      </section>

      <section id="agente" className="scroll-mt-24 border-y border-[#e5e1d5] bg-[#f1ede0]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-bold text-[#d07158]">O coração do Kardus Conecta</p>
            <h2 className="mt-4 max-w-[520px] text-4xl font-bold leading-[1.03] tracking-[-0.05em] text-[#173c34] sm:text-5xl">
              Um agente que responde no WhatsApp em segundos.
            </h2>
            <p className="mt-6 max-w-[480px] leading-7 text-[#6a7c72]">
              Ele responde dúvida de convênio, horário e preço, qualifica o paciente e já propõe um
              horário — sem esperar a recepção abrir. Quando o caso exige uma pessoa, ele avisa e
              passa o bastão com o histórico inteiro.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Clock, title: "Responde na hora, todos os dias", text: "O horário de atendimento é seu: você define a janela, e o domingo já vem liberado por padrão." },
                { icon: Bot, title: "Fala com a informação da sua clínica", text: "Convênios aceitos, valores, horários e protocolos — sem inventar o que não sabe." },
                { icon: UserRound, title: "Chama a recepção no momento certo", text: "Caso clínico, negociação sensível ou pedido fora do script vai direto para uma pessoa." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3.5">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-[8px] bg-white text-[#477963] shadow-[0_2px_5px_rgba(30,40,35,0.06)]"><Icon className="size-4" /></span>
                  <div>
                    <p className="text-sm font-bold text-[#25433a]">{title}</p>
                    <p className="mt-0.5 text-sm leading-6 text-[#718078]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AgentChatPreview />
        </div>
      </section>

      <section className="border-y border-[#e5e1d5] bg-[#efeee6]" aria-label="Benefícios"><div className="mx-auto grid max-w-6xl gap-0 px-5 sm:px-8 md:grid-cols-3 lg:px-10">{benefits.map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4 border-[#dddacf] px-0 py-7 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 lg:px-10"><span className="grid size-9 shrink-0 place-items-center rounded-[8px] bg-[#fffdf7] text-[#477963]"><Icon className="size-4" /></span><div><h2 className="text-sm font-bold text-[#25433a]">{title}</h2><p className="mt-1 text-xs leading-5 text-[#718078]">{text}</p></div></div>)}</div></section>

      <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"><div><p className="text-sm font-bold text-[#d07158]">Uma recepção mais leve</p><h2 className="mt-4 max-w-[420px] text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-[#173c34] sm:text-5xl">Do primeiro contato ao retorno marcado.</h2><p className="mt-6 max-w-[400px] leading-7 text-[#6a7c72]">O Kardus Conecta transforma o atendimento da clínica em um processo visível, acompanhável e fácil de melhorar.</p><a href="#demo" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#3d745d] hover:text-[#173c34]">Ver como funciona <ArrowRight className="size-4" /></a></div><div id="recursos" className="grid gap-4 sm:grid-cols-3">{[["01", "Capture", "Centralize os contatos que chegam pelo WhatsApp e pelos seus canais de divulgação."],["02", "Agende", "Veja o histórico do paciente, o estágio e a próxima ação sem depender da memória de ninguém."],["03", "Confirme", "Envie lembrete de consulta na hora certa e reduza faltas sem esforço manual."]].map(([number, title, text]) => <article key={number} className="border-t-2 border-[#d9a348] pt-5"><span className="font-[family-name:var(--font-mono)] text-xs font-bold text-[#b58a3b]">{number}</span><h3 className="mt-10 text-xl font-bold tracking-[-0.03em] text-[#24483b]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#74837a]">{text}</p></article>)}</div></div></section>

      <section id="para-quem" className="scroll-mt-24 bg-[#173c34] text-[#f8f2e5]"><div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-10 lg:py-28"><div><p className="text-sm font-bold text-[#b8d5b5]">Para clínicas em crescimento</p><h2 className="mt-4 max-w-[560px] text-4xl font-bold leading-[1.03] tracking-[-0.05em] sm:text-5xl">Menos falta na agenda. Mais paciente bem cuidado.</h2><p className="mt-6 max-w-[510px] text-base leading-7 text-[#b6c9bd]">Para clínicas e consultórios que atendem pelo WhatsApp e precisam de uma forma melhor de organizar agendamento, retorno e convênio.</p><div className="mt-8 grid max-w-[500px] gap-3 sm:grid-cols-2">{["Clínicas odontológicas", "Consultórios médicos", "Clínicas de estética", "Clínicas veterinárias"].map((item) => <span key={item} className="inline-flex items-center gap-2 text-sm font-bold text-[#dce8da]"><CircleCheck className="size-4 text-[#a8d0aa]" /> {item}</span>)}</div><div className="mt-8 inline-flex items-center gap-2.5 rounded-[9px] border border-[#3f6357] bg-[#1e4a3e] px-4 py-2.5"><ShieldCheck className="size-4 shrink-0 text-[#a8d0aa]" /><p className="text-xs leading-5 text-[#dce8da]">Dado de saúde é dado sensível: os dados do paciente seguem as regras da LGPD, com anonimização e trilha de auditoria.</p></div></div><div className="border-l border-[#507064] pl-7 lg:pl-12"><Phone className="size-7 text-[#d8a354]" /><p className="mt-7 text-2xl font-bold leading-tight tracking-[-0.03em] text-[#f7f0df]">Saiba na hora qual paciente precisa de retorno e qual consulta já está confirmada.</p><p className="mt-5 text-sm text-[#a9c1b3]">Uma agenda organizada muda o dia inteiro da recepção.</p></div></div></section>

      <section id="demo" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="flex flex-col items-start justify-between gap-8 border-b border-[#dedbd0] pb-12 md:flex-row md:items-end"><div><p className="text-sm font-bold text-[#d07158]">Próximo passo</p><h2 className="mt-4 max-w-[620px] text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-[#173c34] sm:text-6xl">Sua clínica já está atendendo pelo WhatsApp. Vamos organizar isso.</h2></div><Link href="/signup" className="inline-flex shrink-0 items-center gap-2 rounded-[7px] bg-[#d9785f] px-5 py-3.5 text-sm font-bold text-[#fffaf2] shadow-[0_9px_20px_rgba(197,102,76,0.18)] transition-transform hover:-translate-y-0.5">Começar agora <ArrowRight className="size-4" /></Link></div><div className="flex flex-col justify-between gap-4 pt-6 text-sm text-[#78867d] sm:flex-row"><span>Kardus Conecta</span><span>CRM de atendimento e agenda para clínicas</span><Link href="/login" className="font-bold text-[#477963] hover:text-[#173c34]">Acessar sistema <ArrowRight className="ml-1 inline size-3.5" /></Link></div></section>
    </main>
  );
}
