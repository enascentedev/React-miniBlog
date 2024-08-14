import styles from "./Home.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useState } from "react";

import PostDetail from "../../components/PostDetail";


const Home = () => {
	const { documents: posts, loading } = useFetchDocuments("posts");

  // const navigate = useNavigate();

  const [query, setQuery] = useState("")

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
			<div className="post-list">
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
		</div>
	)
}

export default Home
