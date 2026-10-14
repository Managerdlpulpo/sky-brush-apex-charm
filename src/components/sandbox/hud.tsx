import * as Slider from "@radix-ui/react-slider";
import { CATALOG, DAILY, SHAPES, type Kind } from "./catalog";
import { PLANETS, planetById } from "./planets";
import { usePeso } from "./store";

function formatG(value: number) {
  return value.toFixed(2);
}

export function Chrome() {
  const started = usePeso((s) => s.started);
  const planetId = usePeso((s) => s.planetId);
  const gravity = usePeso((s) => s.gravity);
  const count = usePeso((s) => s.bodies.length);
  const planet = planetById(planetId);

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <strong>Peso</strong>
          <span>Plaza</span>
        </div>
        <div className="readout">
          <span>{planet?.name ?? "Manual"}</span>
          <span className="num">{formatG(gravity)} m/s²</span>
          <span className="num">{count} cuerpos</span>
        </div>
      </header>
      {started ? <Dock /> : <Gate />}
    </>
  );
}

function Gate() {
  const planetId = usePeso((s) => s.planetId);
  const setPlanet = usePeso((s) => s.setPlanet);
  const enter = usePeso((s) => s.enter);

  return (
    <div className="gate">
      <section className="gate-card" aria-labelledby="gate-title">
        <p className="eyebrow">Plaza cotidiana</p>
        <h1 id="gate-title">Elige la gravedad</h1>
        <p className="lede">La calle es de esta ciudad. El peso, del planeta que elijas.</p>
        <div className="planets" role="listbox" aria-label="Planeta">
          {PLANETS.map((planet) => {
            const on = planet.id === planetId;
            return (
              <button
                key={planet.id}
                type="button"
                className="planet"
                role="option"
                aria-selected={on}
                data-on={on ? "true" : "false"}
                onClick={() => setPlanet(planet.id)}
              >
                <span>{planet.name}</span>
                <span className="num">{formatG(planet.g)}</span>
              </button>
            );
          })}
        </div>
        <button type="button" className="enter" onClick={enter}>
          Entrar a la plaza
        </button>
      </section>
    </div>
  );
}

function Dock() {
  const planetId = usePeso((s) => s.planetId);
  const gravity = usePeso((s) => s.gravity);
  const restitution = usePeso((s) => s.restitution);
  const setPlanet = usePeso((s) => s.setPlanet);
  const setGravity = usePeso((s) => s.setGravity);
  const setRestitution = usePeso((s) => s.setRestitution);
  const spawn = usePeso((s) => s.spawn);
  const spawnRandomShape = usePeso((s) => s.spawnRandomShape);
  const clear = usePeso((s) => s.clear);

  return (
    <section className="dock" aria-label="Herramientas">
      <div className="dock-head">
        <span className="section-label">Soltar</span>
        <button type="button" className="clear" onClick={clear}>
          Limpiar
        </button>
      </div>
      <div className="scroller">
        {DAILY.map((kind) => (
          <SpawnButton key={kind} kind={kind} onSpawn={spawn} />
        ))}
      </div>
      <span className="section-label">Formas</span>
      <div className="scroller">
        {SHAPES.map((kind) => (
          <SpawnButton key={kind} kind={kind} onSpawn={spawn} />
        ))}
        <button type="button" className="chip" onClick={spawnRandomShape}>
          Aleatoria
        </button>
      </div>
      <div className="fields">
        <label className="field">
          <span className="field-label">Planeta</span>
          <select
            className="select"
            aria-label="Planeta"
            value={planetId ?? "manual"}
            onChange={(event) => {
              if (event.target.value !== "manual") setPlanet(event.target.value);
            }}
          >
            {planetId == null ? <option value="manual">Manual</option> : null}
            {PLANETS.map((planet) => (
              <option key={planet.id} value={planet.id}>
                {planet.name}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span className="field-label">
            Gravedad
            <em className="num">{formatG(gravity)} m/s²</em>
          </span>
          <Slider.Root
            className="slider"
            min={0.4}
            max={26}
            step={0.01}
            value={[gravity]}
            onValueChange={(values) => setGravity(values[0] ?? gravity)}
            aria-label="Gravedad"
          >
            <Slider.Track className="slider-track">
              <Slider.Range className="slider-range" />
            </Slider.Track>
            <Slider.Thumb className="slider-thumb" />
          </Slider.Root>
        </label>
        <label className="field">
          <span className="field-label">
            Rebote
            <em className="num">{Math.round(restitution * 100)}%</em>
          </span>
          <Slider.Root
            className="slider"
            min={0}
            max={0.9}
            step={0.01}
            value={[restitution]}
            onValueChange={(values) => setRestitution(values[0] ?? restitution)}
            aria-label="Rebote"
          >
            <Slider.Track className="slider-track">
              <Slider.Range className="slider-range" />
            </Slider.Track>
            <Slider.Thumb className="slider-thumb" />
          </Slider.Root>
        </label>
      </div>
      <p className="hint">Arrastra un cuerpo para moverlo. La rueda cambia la profundidad. El suelo vacío orbita.</p>
    </section>
  );
}

function SpawnButton({ kind, onSpawn }: { kind: Kind; onSpawn: (kind: Kind) => void }) {
  const label = CATALOG[kind].label;
  return (
    <button type="button" className="chip" onClick={() => onSpawn(kind)} aria-label={`Soltar ${label}`}>
      {label}
    </button>
  );
}
