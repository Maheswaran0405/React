import { useMemo, useState } from "react";

export function Lyrics(){

    const [count , setCount] = useState(0);

    const inc = () => setCount((count) => count+1);

    const lyrics = useMemo(() =>{
        console.log("Creating lyrics Array");

        return[
            {
                id:1, value: "Lyrics 1",
                id:2, value: "Lyrics 2",
                id:3, value: "Lyrics 3",
            }
        ]
    },[]);

     const Lyric = ({props}) => {
        console.log("Lyric Rendering")

        return <div className="{styles.value}">{props}</div>
    }

    return(
        <div>
            <button className="{styles.button}" onClick={inc}>Click</button>

            {lyrics.map((val) => {
                return <Lyric props={val.value} key={val.id} />
            })}
        </div>
    )


}