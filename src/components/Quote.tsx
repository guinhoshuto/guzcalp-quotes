export default function Quote({quote}: any){
    return(
        <div className="text-left">
            #{quote.quoteNumber} - {quote.quote}
        </div>
    )
}