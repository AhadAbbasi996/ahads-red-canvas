export function TerminalCard() {
  const rows: [string, string][] = [
    ["name", "Abdul Ahad"],
    ["role", "Software Engineering Student"],
    ["focus", "Red Teaming / Offensive Security"],
    ["stack", "Python · Bash · C++ · Web"],
    ["status", "open to internships & CTF squads"],
  ];

  return (
    <div className="panel scanlines rounded-md">
      <div className="flex items-center gap-2 border-b border-border/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-primary/80" />
        <span className="h-3 w-3 rounded-full bg-accent/70" />
        <span className="h-3 w-3 rounded-full bg-muted-foreground/40" />
        <span className="ml-3 text-xs text-muted-foreground">abdul@redteam: ~</span>
      </div>
      <div className="space-y-2 px-5 py-5 text-sm">
        <p className="text-muted-foreground">
          <span className="text-primary">$</span> cat whoami.info
        </p>
        {rows.map(([k, v]) => (
          <p key={k} className="flex flex-wrap gap-x-2">
            <span className="w-20 shrink-0 text-primary">{k}</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-foreground/90">{v}</span>
          </p>
        ))}
        <p className="pt-1 text-primary">
          ${" "}
          <span
            className="inline-block h-4 w-2 translate-y-[2px] bg-primary"
            style={{ animation: "caret 1.05s step-end infinite" }}
          />
        </p>
      </div>
    </div>
  );
}
