import * as Dialog from '@radix-ui/react-dialog'

export default function Quote({quote}: any){
    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <div className="text-left py-4 md:px-32 text-xl md:mx-32 mx-16 bg-bege text-marronzinho hover:text-quase-preto hover:shadow-lg">
                    #{quote.quoteNumber} - {quote.quote}
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='DialogOverlay'>
                    <Dialog.Content className='DialogContent'>
                        <Dialog.Title className='DialogTitle'>
                            #{quote.quoteNumber} - {quote.quote}
                        </Dialog.Title>
                        <Dialog.Description className='DialogDescription'>
                            {quote.lore}
                        </Dialog.Description>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    )
}