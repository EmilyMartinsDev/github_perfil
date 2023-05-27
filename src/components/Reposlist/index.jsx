import { useEffect, useState } from "react"
import styles from './Reposlist.module.css'
const Reposlist = ({nomeUsuario})=>{
   const [repos, setRepos] = useState([]);
   const [load, setLoad] = useState(true);
    useEffect(()=>{
        setLoad(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then((res)=>{
            return res.json()
        })
        .then((json)=>{
           setTimeout(()=>{
            setLoad(false)
            setRepos(json);
           },3000)
        })
    },[nomeUsuario])
  
    return (
        <>
        <div className="container">
        {load ?(
            <div>
                <h1>Carregando...</h1>
            </div>
        ):
        <ul className={styles.list}>
        {repos.map(repo=>(
         <li className={styles.list__item} key={repo.id}>
             <div className={styles.list__item__name}>
                 <b >Nome: </b>{repo.name}
             </div>
              <div className={styles.list__item__language}>
                <b >Linguagem: </b>{repo.language}
             </div>
          
              <a  className={styles.list__item__link} target="_blank" href={repo.html_url} >Visitar no github</a>
          
             
         </li>
         ))}
     </ul>}

        </div>
        </>
    )
}
export default Reposlist