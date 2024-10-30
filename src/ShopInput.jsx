//Denne fil bruges til at tilføje varer og butikker. Brugeren kan indtaste en varer, vælge afdeling og vi kan tilknytte en butik til en vare
import {useState} from 'react';

function ShopInput({addShopItem, addShop, shops}){
    const [inputValue, setInputValue] = useState('');
    const [priority, setPriority] = useState(''); //priority henviser til afdelingner
    const [shopName, setShopName] = useState('');
    const [selectedShop, setSelectedShop] = useState('');

    //Håndtere data fra tilføj vare, vælg afdeling og butik inputfelt
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim() && priority && selectedShop){
            addShopItem(inputValue, priority, selectedShop);
            setInputValue('');
            setPriority('');
            setSelectedShop('');
        }
    };

    //håndtere data fra tilføj butik inputfelt
    const handleShopSubmit = (e) =>{
        e.preventDefault();
        if(shopName.trim()){
            addShop(shopName);
            setShopName('');
        }
    };

    return(
        <>
        <form onSubmit={handleShopSubmit}>
            <input
            type="text"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            placeholder="Tilføj ny butik"
            />
            <button type="submit"> Tilføj Butik</button>

        </form>

        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            placeholder="Tilføj en ny vare"
            />
            {/*Valg af afdeling*/}
            <select
                value= {priority}
                onChange={(e) => setPriority(e.target.value)}
                required
            >
                <option value="" disabled hidden>Vælg afdeling</option>
                <option value="frugt/grønt">Frugt/Grønt</option>
                <option value="brød">Brød</option>
                <option value="kød">Kød</option>
                <option value="konserves">Konserves</option>
                <option value="nonfood">NonFood</option>
                <option value="mejeri">Mejeri</option>
                <option value="frost">Frost</option>
            </select>

            {/*Valg af butik*/}           
            <select
                value={selectedShop}
                onChange={(e)=> setSelectedShop(e.target.value)}
                required
            >
                <option value="" disabled hidden>Vælg butik</option>
                {shops.map((shop, index) =>(
                    <option key={index} value={shop}>{shop}</option>
                ))}
            </select>

            <button type="submit">Tilføj</button>
        </form>
        </>
    );
}

export default ShopInput;