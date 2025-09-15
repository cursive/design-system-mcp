## Agent Rules for this Project

- Don't be overzealous about writing code when we're in the middle of a _ 

# Cursor MCP Prompt for Figma → React Design System

## Introduction
You are generating a atomic React component library from Figma via MCP manifests.  
The project follows **atomic design**: Variables → Atoms → Molecules → Organisms.  
Every output must be derived strictly from the **MCP manifests and registry** — never guessed or inferred from layer names.  
Your job is to transform tokens and component manifests into a clean, consistent React design system with CSS, typed props, tests, and documentation.  
All rules below are mandatory. If you ever encounter ambiguity (e.g. no `default` variant, naming collision, unclear node type), you must **stop and ask** before proceeding.

----



---

## Step 1 — Playback
- Before generating anything:
  - Restate back, in your own words, all the rules and constraints you are following.  
  - Do not generate code yet.  
  - Wait for confirmation before proceeding.

---

## Step 2 — Structure Mapping
- Using the manifests and registry:
  - Map out how you think the design system is structured.  
  - Show the hierarchy: **Variables → Atoms → Molecules → Organisms**.  
  - List the components in each bucket with their paths.  
  - For each component, also show a simple **tree diagram** of its children:
    - Include whether what type each child is, eg a shape, text instance (and show the name of the component it's an instacne of)
    - Use manifest IDs and roles (e.g., `Modal → List → ListItem → CheckIcon`).  

    	•	Analyze structure from Figma metadata in Step 2; from JSX only in post-gen review.
	•	Classify nodes: 💠 instance / (text) / frame/group (structural) / vector/rectangle/line.
	•	Use 💠 on every instance line; ignore all leading-_ items.
- Wait for confirmation before generating any code.



---

## Step 3 — Code Generation Rules

### Filtering
- Ignore anything whose name starts with `_` (components, variants, tokens, styles, variables).

### Naming
- Normalize on export:
  - Components → **PascalCase**  
  - Tokens → **camelCase**  
- Hierarchical names (e.g. `Molecules/Input/Button`) define **folder structure only**, not code identifiers.

### Variants
- Collapse all variants into a single component file (the **default** implementation).  
- Default = variant named `default`.  
- If no `default` exists: **stop and ask** which variant to use.  
- All other variants and booleans → exposed as typed props.

### Props
- Variants → string literal unions.  
- Boolean variants → boolean props.  
- Text layers → string props.  
- Component instances → typed child props (delegate, do not inline).  
- Repeated children → arrays of child props.  
- Direct atoms inside organisms are valid.  

### Icons
- All icons are overrideable.  
- Default to `atoms/placeholders/PlaceholderIcon`.  
- If a user supplies an override, replace the placeholder.  
- Icons must inherit size and color from parent (`width/height: 1em; color: currentColor`).  
- Decorative by default: `aria-hidden="true" focusable="false"`.

### Composition
- Parent components must **import and use** child components from their manifests.  
- Never inline child implementations.  
- Reference children by **ID/path from the manifest**, not by name.  
- Build manifests first, then generate code in topological order (atoms → molecules → organisms).  
- Order of discovery does not matter because imports are resolved via manifests.

### Structure
- One folder per component, containing:
  - `Component.tsx` (default variant implementation)  
  - `Component.types.ts` (typed props)  
  - `Component.css` (styles, variant mappings)  
  - `manifest.json` (MCP output)  
  - `index.ts` (exports)  
  - Stories and tests  
- Central registry: `__manifests__/index.json`  
  - Aggregates all component manifests and dependency edges.  
  - Used to resolve imports and detect dependency order.



### CSS
- Use `tokens/base.css` as a global reset:
  - `*, *::before, *::after { box-sizing: border-box }`
  - Zero margins/padding for headings, body text, and lists
  - Inherit fonts for inputs/buttons
  - Reset media elements and form controls
  
  - Reduced motion support (`prefers-reduced-motion`)
- Each component has its own `.css` file.  
- Map variant props to classes or CSS variables (`--radius`, `--gap`, etc.).  
- Tokens are extracted into `tokens/` and exposed as CSS variables + TS accessors.

### Safety
- Never infer component roles from names.  
- Always use Figma node metadata (`type`, `mainComponent`, `componentId`).  
- If ambiguity remains (e.g., text vs component both called “Title”), **ask instead of guessing**.  
- All references must resolve to valid entries in the manifests registry.  
- Fail fast if unresolved imports, cycles, missing defaults, or underscore violations.

---

## Step 4 — Deliverables

### Per Component
- Typed `Props` interface (`.types.ts`).  
- React functional component (`.tsx`) implementing the default variant with conditional styling/logic.  
- CSS file (`.css`) with classes and CSS variables.  
- Storybook story with prop controls.  
- Basic test file.  
- `manifest.json` colocated with the component.  

### Extras
- `DesignSystemCatalog.tsx`:  
  - A single page grouped by **Atoms**, **Molecules**, and **Organisms**.  
  - Each component shown in a container with its name and default render.  
- Central `__manifests__/index.json` as the registry.

---

## Step 5 — Workflow
1. Playback rules.  
2. Map out structure + tree diagrams for each component.  
3. After confirmation, generate manifests-first.  
4. Generate code in topological order (atoms → molecules → organisms).  
5. Stop and ask if any ambiguity or missing defaults.

---

## Example Manifests, Registry, and Integrity Checks (for demonstration purposes)

### Atom Manifest (A1: `CheckIcon`)
```json
{
  "id": "A1",
  "schemaVersion": 1,
  "kind": "atom",
  "name": "CheckIcon",
  "defaultVariant": "default",
  "variants": {},
  "booleans": {},
  "slots": { "icons": [] },
  "tokens": {},
  "children": []
}
```

### Molecule Manifest (M1: `ListItem`)
```json
{
  "id": "M1",
  "schemaVersion": 1,
  "kind": "molecule",
  "name": "ListItem",
  "defaultVariant": "default",
  "variants": { "state": ["default","selected"] },
  "booleans": { "disabled": true },
  "slots": { "icons": ["leading"] },
  "tokens": { "gap": ["space.2","space.3"] },
  "children": [
    { "id": "A1", "kind": "atom", "role": "icon:leading" }
  ]
}
```

### Organism Manifest (O1: `List`)
```json
{
  "id": "O1",
  "schemaVersion": 1,
  "kind": "organism",
  "name": "List",
  "defaultVariant": "default",
  "variants": { "density": ["comfortable","compact"] },
  "booleans": {},
  "slots": { "item": [] },
  "tokens": {},
  "children": [
    { "id": "M1", "kind": "molecule", "role": "item", "repeat": true }
  ]
}
```

### Organism Manifest (O2: `Modal`)
```json
{
  "id": "O2",
  "schemaVersion": 1,
  "kind": "organism",
  "name": "Modal",
  "defaultVariant": "default",
  "variants": { "size": ["sm","md","lg"] },
  "booleans": { "dismissible": true },
  "slots": { "header": [], "body": [], "footer": [], "icons": ["close"] },
  "tokens": { "radius": ["radius.sm","radius.md"] },
  "children": [
    { "id": "O1", "kind": "organism", "role": "content:list" },
    { "id": "A1", "kind": "atom", "role": "icon:close" }
  ]
}
```

### Aggregated Registry (`__manifests__/index.json`)
```json
{
  "schemaVersion": 1,
  "components": [
    { "id": "A1", "name": "CheckIcon", "kind": "atom", "path": "atoms/CheckIcon", "hash": "a1abc", "defaultVariant": "default" },
    { "id": "M1", "name": "ListItem",  "kind": "molecule", "path": "molecules/ListItem", "hash": "m1def", "defaultVariant": "default" },
    { "id": "O1", "name": "List",      "kind": "organism", "path": "organisms/List", "hash": "o1ghi", "defaultVariant": "default" },
    { "id": "O2", "name": "Modal",     "kind": "organism", "path": "organisms/Modal", "hash": "o2jkl", "defaultVariant": "default" }
  ],
  "edges": [
    { "from": "M1", "to": "A1", "role": "icon:leading" },
    { "from": "O1", "to": "M1", "role": "item", "repeat": true },
    { "from": "O2", "to": "O1", "role": "content:list" },
    { "from": "O2", "to": "A1", "role": "icon:close" }
  ],
  "icons": {
    "placeholderPath": "atoms/placeholders/PlaceholderIcon"
  }
}
```

### Registry Integrity Checks
- **IDs exist**: every `children[].id` and `edges[].to` must resolve to a known component.  
- **Kinds match**: child `kind` equals the target component’s `kind`.  
- **No underscores**: names, variants, variables, styles must not start with `_`.  
- **Default present**: every component has a `defaultVariant`; if missing, stop and ask.  
- **Acyclic graph**: no cycles in `edges`.  
- **Hash drift**: if a child’s `hash` changes, mark parents dirty and regenerate.  
- **Icon slots resolved**: roles like `icon:leading`, `icon:close` must have matching slots; fallback = placeholder.  
- **Node type safety**: children reference valid COMPONENT/INSTANCE nodes, not TEXT/FRAME.  
- **Path sanity**: `path` exists/writable and matches atomic kind (`atoms/`, `molecules/`, `organisms/`).  

---

This file is the complete specification and reference for how Cursor should interpret MCP manifests, generate React components, and maintain consistency across the design system.
