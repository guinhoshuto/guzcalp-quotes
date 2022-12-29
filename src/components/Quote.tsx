// import * as Dialog from '@radix-ui/react-dialog'
import * as HoverCard from '@radix-ui/react-hover-card'

export default function Quote({quote}: any){
    return(
        <HoverCard.Root>
            <HoverCard.Trigger asChild>
                <div className="Button text-left py-4 md:px-32 text-xl md:mx-32 mx-16 bg-bege text-marronzinho hover:text-quase-preto hover:font-bold hover:cursor-pointer hover:border-solid hover:border-1">
                    #{quote.quoteNumber} - {quote.quote}
                </div>
            </HoverCard.Trigger>
            <HoverCard.Portal className='bg-marronzinho border-solid border-1'>
                <HoverCard.Content className='DialogContent bg-white border-solid border-1 p-8 round-2'>
                    <div>
                        {quote.lore}
                    </div>
                        <HoverCard.Arrow className="HoverCardArrow fill-white" />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}