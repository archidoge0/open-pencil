/** @jsxImportSource @open-pencil/design-jsx */
import { describe, expect, test } from 'bun:test'

import { Frame, Text, solid, type TreeNode } from '#design-jsx/index'

describe('JSX runtime', () => {
  test('builds the same tree as the element functions', () => {
    const tree: TreeNode = (
      <Frame w={320} p={16} fill={solid('#FFFFFF')}>
        <Text>Hello</Text>
      </Frame>
    )
    expect(tree).toEqual(
      Frame({ w: 320, p: 16, fill: solid('#FFFFFF'), children: [Text({ children: 'Hello' })] })
    )
  })

  test('flattens mapped children', () => {
    const labels = ['One', 'Two']
    const tree = (
      <Frame>
        {labels.map((label) => (
          <Text>{label}</Text>
        ))}
      </Frame>
    )
    expect(tree.children).toEqual(labels.map((label) => Text({ children: label })))
  })
})
