# @open-pencil/design-jsx

OpenPencil design JSX: build editable scene trees with `Frame`, `Text`, and the other elements, style them with paint and effect helpers and design variables, and export scene nodes back to JSX.

```ts
import { Frame, Text, solid } from '@open-pencil/design-jsx'
import { renderTree } from '@open-pencil/core/design-jsx'
import { SceneGraph } from '@open-pencil/scene-graph'

const graph = new SceneGraph()
await renderTree(
  graph,
  Frame({ w: 320, p: 16, fill: solid('#FFFFFF'), children: [Text({ children: 'Hello' })] })
)
```

This package depends only on `@open-pencil/scene-graph`. Rendering needs icons, SVG conversion, and layout, which `@open-pencil/core/design-jsx` provides; other engines can supply their own through `createDesignJSXRenderer(services)`.
