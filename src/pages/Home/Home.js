import styles from "./Home.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";


const Home = () => {
	const[query,setQuery]= useState("");
	const[posts]= useState([]);

	const handleSubmit=(e)=>{
		e.preventDefault();
	}
	return (
		<div className={styles.home}>
			<h1>Veja nossos posts mais recentes</h1>
			<form onSubmit={handleSubmit} className={styles.search}>
				<input type="text" placeholder="ou busque por tags..." onChange={(e)=> setQuery(e.target.value)}></input>
				<button></button>
			</form>
			<div>
				<h1>Posts...</h1>
				{posts && posts.length === 0 && (
					<div className={styles.noposts}>
						<p>não foram encontrados posts</p>
						<Link to="/posts/create" className="btn">Criar primeiro post </Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default Home
