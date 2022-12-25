export default function Quote({quote}: any){
    return(
        <div className="text-left py-4 md:px-8 text-xl md:mx-32 mx-16 bg-bege text-marronzinho hover:text-quase-preto hover:shadow-lg">
            #{quote.quoteNumber} - {quote.quote}
        </div>
    )
}