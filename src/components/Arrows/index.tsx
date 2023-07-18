type ArrowsProps = {
  className?: string
  prevClassName?: string
  nextClassName?: string
  onPrev?: () => void
  onNext?: () => void
}

const Arrows = ({ className, prevClassName, nextClassName, onPrev, onNext }: ArrowsProps) => (
  <div className={`splide__arrows relative z-10 flex ${className || ''}`}>
    <button className={`splide__arrow splide__arrow--prev ${prevClassName || ''}`} onClick={onPrev}>
      <svg className="h-4 w-4 fill-n-4">
        <path d="M8.707 1.707a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L3.414 9H15a1 1 0 1 0 0-2H3.414l5.293-5.293z" />
      </svg>
    </button>
    <button className={`splide__arrow splide__arrow--next ${nextClassName || ''}`} onClick={onNext}>
      <svg className="h-4 w-4 fill-n-4">
        <path d="M7.293 1.707a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L12.586 9H1a1 1 0 1 1 0-2h11.586L7.293 1.707z" />
      </svg>
    </button>
  </div>
)

export default Arrows
