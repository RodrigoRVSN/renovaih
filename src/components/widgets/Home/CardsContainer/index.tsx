export function CardsContainer(): JSX.Element {
  return (
    <section className='grid-cards my-xxxlg'>
      <article className='bg-text mx-auto h-card_h w-card_w flex flex-col items-center text-center'>
        <img className='w-card_image' src='/images/logo.png' alt='Logo' />
        <div className='p-lg rounded-b-3xl bg-blocked'>
          <h2 className='font-bold mb-lg text-xl'>TEXT</h2>
          <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
          <button
            type='button'
            className='bg-start_button text-text_contrast mt-md p-xs text-lg rounded-2xl transite hover:opacity-70'
          >
            Bora trabalhar
          </button>
        </div>
      </article>

      <article className='bg-text mx-auto h-card_h w-card_w flex flex-col items-center text-center'>
        <img className='w-card_image' src='/images/logo.png' alt='Logo' />
        <div className='p-lg rounded-b-3xl bg-blocked'>
          <h2 className='font-bold mb-lg text-xl'>TEXT</h2>
          <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
          <button
            type='button'
            className='bg-start_button text-text_contrast mt-md p-xs text-lg rounded-2xl transite hover:opacity-70'
          >
            Bora trabalhar
          </button>
        </div>
      </article>

      <article className='bg-text mx-auto h-card_h w-card_w flex flex-col items-center text-center'>
        <img className='w-card_image' src='/images/logo.png' alt='Logo' />
        <div className='p-lg rounded-b-3xl bg-blocked'>
          <h2 className='font-bold mb-lg text-xl'>TEXT</h2>
          <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
          <button
            type='button'
            className='bg-start_button text-text_contrast mt-md p-xs text-lg rounded-2xl transite hover:opacity-70'
          >
            Bora trabalhar
          </button>
        </div>
      </article>
    </section>
  )
}
