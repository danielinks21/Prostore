import {cn} from "@/lib/utils";

const ProductPrice = ({value,className}: {value: number,className?: string}) => {

    //ensure two decimal places
    const stringValue = value.toFixed(2);
    //Get the int/float 
    const [integer, floatvalue] = stringValue.split('.');
    return ( 
<p className={cn("text-2xl", className)}>
   <span className="text-xs align-super">$</span>
    {integer}
    <span className="text-xs align-super">.{floatvalue}</span>
</p>

     );
}
 
export default ProductPrice;