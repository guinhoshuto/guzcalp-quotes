export default function Quote({quote}: any){
    return(
        <div className="text-left p-8 text-xl mx-32 bg-bege">
            #{quote.quoteNumber} - {quote.quote}
        </div>
    )
}