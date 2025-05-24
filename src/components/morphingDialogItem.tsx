import { MorphingDialog, MorphingDialogClose, MorphingDialogContainer, MorphingDialogContent, MorphingDialogImage, MorphingDialogSubtitle, MorphingDialogTitle, MorphingDialogTrigger } from "./ui/morphing-dialog"


type MorphingDialogItemProps = {
  image: string
  alt: string
  category: string
  title: string
  subtitle: string
  description: string[]
}

export function MorphingDialogItem({
  image,
  alt,
  category,
  title,
  subtitle,
  description,
}: MorphingDialogItemProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '4px',
        }}
        className='border border-gray-200/60 bg-white'
      >
        <div className='flex flex-col items-center justify-center p-3'>
          <MorphingDialogImage
            src={image}
            alt={alt}
            className='h-14 w-14 object-cover object-top'
            style={{ borderRadius: '4px' }}
          />
          <div className='flex flex-col items-start justify-center space-y-0'>
            <MorphingDialogTitle className='text-[10px] font-medium text-black sm:text-xs md:text-lg'>
              {category}
            </MorphingDialogTitle>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{ borderRadius: '12px' }}
          className='relative h-auto w-[500px] border border-gray-100 bg-white'
        >
          <div className='h-[70vh]'>
            <div className='relative p-6'>
              <div className='flex justify-center py-10'>
                <MorphingDialogImage
                  src={image}
                  alt={alt}
                  className='h-auto w-[200px]'
                />
              </div>
              <div>
                <MorphingDialogTitle className='text-black'>{title}</MorphingDialogTitle>
                <MorphingDialogSubtitle className='font-light text-gray-400'>
                  {subtitle}
                </MorphingDialogSubtitle>
                <div className='mt-4 text-sm text-gray-700 space-y-4'>
                  {description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <MorphingDialogClose className='text-zinc-500' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
