const agents = [
  { name: "Claude Code", icon: "https://cdn.simpleicons.org/anthropic" },
  { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor" },
  { name: "Codex", icon: "https://cdn.simpleicons.org/openai" },
  { name: "Ghostty", icon: "https://cdn.simpleicons.org/ghostty" },
  { name: "Conductor", icon: "https://cdn.simpleicons.org/conductor" },
];

export default function CompatibleAgents() {
  return (
    <div className="compatible-agents">
      <p className="compatible-label">Works in</p>
      <div className="compatible-logos">
        {agents.map(({ name, icon }) => (
          <div className="compatible-chip" key={name} title={name}>
            <img src={icon} alt={name} width={28} height={28} />
          </div>
        ))}
      </div>
      <p className="compatible-footer">
        and any other agent that supports the skills format.
      </p>
    </div>
  );
}
