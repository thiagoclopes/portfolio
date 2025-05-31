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
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
        }}
        className='border border-gray-700 bg-gray-800/50 hover:bg-gray-700 transition-colors duration-200'
      >
        <div className='flex flex-col items-center justify-center p-4'> 
          <MorphingDialogImage
            src={image}
            alt={alt}
            className='h-16 w-16 object-cover object-top mb-2'
            style={{ borderRadius: '8px' }}
          />
          <div className='flex flex-col items-center justify-center space-y-1'>
            <MorphingDialogTitle className='text-sm font-semibold text-blue-400 sm:text-base md:text-lg'>
              {category}
            </MorphingDialogTitle>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{ borderRadius: '16px' }}

          className='relative h-auto w-[600px] border border-gray-700 bg-gray-900 shadow-2xl'
        >
          <div className='p-8'> 
            <div className='flex justify-center py-8'>
              <MorphingDialogImage
                src={image}
                alt={alt}
                className='h-auto w-[250px] rounded-lg'
              />
            </div>
            <div>
              <MorphingDialogTitle className='text-white text-3xl font-bold mb-2'>
                {title}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className='font-light text-gray-400 text-lg mb-6'>
                {subtitle}
              </MorphingDialogSubtitle>
              <div className='mt-4 text-base text-gray-300 space-y-4'>
                {description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          <MorphingDialogClose className='absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition-colors duration-200' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}