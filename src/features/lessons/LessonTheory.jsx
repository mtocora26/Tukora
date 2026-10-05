/** Renders the theory blocks of a lesson (see THEORY_BLOCK_TYPES). */
function LessonTheory({ blocks }) {
  return (
    <div className="theory">
      {blocks.map((block, i) => (
        <TheoryBlock key={i} block={block} />
      ))}
    </div>
  )
}

function TheoryBlock({ block }) {
  switch (block.type) {
    case 'text':
      return <p>{block.text}</p>

    case 'tip':
      return (
        <aside className="theory__tip">
          <strong>Ojo: </strong>
          {block.text}
        </aside>
      )

    case 'example':
      return (
        <figure className="theory__example">
          <blockquote lang="it">{block.text}</blockquote>
          <figcaption>{block.translation}</figcaption>
        </figure>
      )

    case 'table':
      return (
        <div className="theory__table-wrapper">
          <table className="theory__table">
            <thead>
              <tr>
                {block.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    default:
      return null
  }
}

export default LessonTheory
