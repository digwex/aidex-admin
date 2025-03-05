import type { ICloseButton } from '../interface'

export const CloseButton = ({ onClose }: ICloseButton) => {
  return (
    <button
      onClick={onClose}
      type="button"
      data-command="close"
      className="se-btn se-dialog-close"
      title="Закрыть"
      aria-label="Закрыть">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74">
        <g>
          <path
            d="M14.15,11.63l5.61,5.61a1.29,1.29,0,0,1,.38.93,1.27,1.27,0,0,1-.4.93,1.25,1.25,0,0,1-.92.4,1.31,1.31,0,0,1-.94-.4l-5.61-5.61L6.67,19.1a1.31,1.31,0,0,1-.94.4,1.24,1.24,0,0,1-.92-.4,1.27,1.27,0,0,1-.4-.93,1.33,1.33,0,0,1,.38-.93l5.61-5.63L4.79,6a1.26,1.26,0,0,1-.38-.93,1.22,1.22,0,0,1,.4-.92,1.28,1.28,0,0,1,.92-.39,1.38,1.38,0,0,1,.94.38l5.61,5.61,5.61-5.61a1.33,1.33,0,0,1,.94-.38,1.26,1.26,0,0,1,.92.39,1.24,1.24,0,0,1,.4.92,1.29,1.29,0,0,1-.39.93L17,8.81l-2.8,2.82Z"
            transform="translate(-4.41 -3.76)"></path>
        </g>
      </svg>
    </button>
  )
}
