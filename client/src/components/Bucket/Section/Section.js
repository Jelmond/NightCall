import { useState } from "react"
import useStore from "../../../store/store"

export default function Section ({data}) {

    const addDuplicateItemByTitle = useStore((state) => ( state.addDuplicateItemByTitle))
    const removeFirstItemByTitle = useStore((state) => (state.removeFirstItemByTitle))
    const removeFromOrderByTitle = useStore((state) => (state.removeFromOrderByTitle))

    const handleAdd = () => {
        setAmount(amount + 1)
        addDuplicateItemByTitle(data.title)
    }

    const handleRemove = () => {
        if(amount !== 1) {
            setAmount(amount - 1)
            removeFirstItemByTitle(data.title)
        }
    }

    const [amount, setAmount] = useState(1)

    return(
        <div className={`${data.price > 4.3 ? 'bucket__information__section' : 'buc'}`}>
            <div className='firstBuc'>
            <div className='delete' onClick={() => removeFromOrderByTitle(data.title)}>
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