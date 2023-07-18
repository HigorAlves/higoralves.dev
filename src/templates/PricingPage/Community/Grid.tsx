import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Comment from './Comment'

type GridProps = {
  items: any
}

const Grid = ({ items }: GridProps) => {
  return (
    <ResponsiveMasonry className="relative z-2" columnsCountBreakPoints={{ 768: 2, 1280: 3 }}>
      <Masonry gutter="1.5rem">
        {items.map((item: any) => (
          <div key={item.id}>
            <Comment comment={item} />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default Grid
