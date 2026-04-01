const agents = [
  { name: "Claude Code", domain: "claude.ai" },
  { name: "Cursor", domain: "cursor.com" },
  { name: "Codex", domain: "openai.com" },
  { name: "Ghostty", domain: "ghostty.org" },
  { name: "Conductor", domain: "conductor.build" },
];

export default function CompatibleAgents() {
  return (
    <div className="compatible-agents">
      <p className="compatible-label">Works in</p>
      <div className="compatible-logos">
        {agents.map(({ name, domain }) => (
          <div className="compatible-chip" key={name}>
            <img
              src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
              alt={name}
              width={16}
              height={16}
            />
            <span>{name}</span>
          </div>
        ))}
      </div>
      <p className="compatible-footer">
        and any other agent that supports the skills format.
      </p>
    </div>
  );
}
