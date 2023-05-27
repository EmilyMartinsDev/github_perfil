import { useState, useEffect } from "react"

const Formulario = ()=>{
    let [matA, setMatA] = useState(0);
    let [matB, setMatB] = useState(0);
    let [matC, setMatC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(()=>{
        console.log("estado mudou")
        return ()=>{
            console.log("o componente finalizou")
        }
    },[])


    function alteraNome(e){
        setNome((valorAntigo)=>{
            return e.target.value
        })
    }

    function aprovado(a,b,c){
        if(!a ||!b || !c) {
            return;
        }
        const media = (a + b + c) / 3

        if(media < 6 ){
            return false
        }
        
        return true;
    }
    return (
        <>

        <form action="">
            <input type="text" placeholder="nome" onChange={alteraNome} />
        <input type="number" placeholder="Nota MATERIA A" onChange={(e)=>setMatA(Number(e.target.value))}/>
        <input type="number" placeholder="Nota MATERIA B" onChange={(e)=>setMatB(Number(e.target.value))}/>
        <input type="number" placeholder="Nota MATERIA C" onChange={(e)=>setMatC(Number(e.target.value))}/>
        <p>{aprovado(matA, matB, matC) ?" Voce foi aprovado" : " Você foi reprovado"} </p>
        </form>
        </>
    )
}
export default Formulario