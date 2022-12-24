export default function Quote({quote}: any){
    return(
        <div className="text-left py-4 px-8 text-xl mx-32 bg-bege text-marronzinho hover:text-quase-preto hover:shadow-lg">
            #{quote.quoteNumber} - {quote.quote}
        </div>
    )
}