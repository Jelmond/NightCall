import { useEffect, useState } from "react"
import useStore from "../../../store/store"

export default function Section ({data}) {

    const addDuplicateItemByTitle = useStore((state) => ( state.addDuplicateItemByTitle))
    const removeFirstItemByTitle = useStore((state) => (state.removeFirstItemByTitle))
    const removeFromOrderByTitle = useStore((state) => (state.removeFromOrderByTitle))
    const updateAmountByTitle = useStore((state) => (state.updateAmountByTitle))

    // const [amount, setAmount] = useState(1)

    const amount = useStore((state) => state.amounts[data.title] || 1);

    const handleAdd = () => {
        const newAmount = amount + 1;
        updateAmountByTitle(data.title, newAmount);
        addDuplicateItemByTitle(data.title)
    }

    const handleRemove = () => {
        if(amount > 1) {
            const newAmount = amount - 1;
            updateAmountByTitle(data.title, newAmount);
            removeFirstItemByTitle(data.title)
        }
    }

    const handleDelete = () => {
        removeFromOrderByTitle(data.title)
        updateAmountByTitle(data.title, 1);
    }

    useEffect(() => {
        console.log(amount)
    }, [amount])


    return(
        <div className={`${data.price > 4.3 ? 'bucket__information__section' : 'buc'}`}>
            <div className='firstBuc'>
            <div className='delete' onClick={handleDelete}>
                x
            </div>
            <div className='title-container'>
                <img src={`${data.image}`} alt='' width={60} height={60}/>
                <p>{data.title}</p>
            </div>
            <div className='choose'>
                <p>{data.price}p</p>
            </div>
            </div>
            <div className='secondBuc'>
            <div className='bucket-minus bucket-button' onClick={handleRemove}>
                -
            </div>
            <p>
                {amount}
            </p>
            <div className='bucket-plus bucket-button' onClick={handleAdd}>
                +
            </div>
            </div>
        </div>
    )
}