import { collection, doc, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../../../../firebase/firebase";

export default function ArticlesTable() {
  const [articles, setArticles] = React.useState([]);

  const getArticles = async () => {
    const articlesRef = collection(firestore, "articles");
    // const articlesRef = doc(firestore, "articles");
    const articlesSnap = await getDocs(articlesRef);
    console.log(articlesSnap);
    const articles = articlesSnap.docs.map((doc) => doc.data());
    console.log(articles);
    setArticles(articles);
  };
  useEffect(() => {
    getArticles();
  }, []);

  const DisplayData = articles.map((article) => {
    return (
      <tr>
        {/* <td>{article.id}</td> */}
        <div key={article.id}>
          <td>
            <Link to={`/DoctorApplicationDetails/${article.id}`}>
              {article.topic}
            </Link>
          </td>
        </div>
        <td>{article.Lname}</td>
        <td>{article.Speciality}</td>
        <td>{article.Location}</td>
        <td>{article.Email}</td>
      </tr>
    );
  });
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            {/* <th>Sr.NO</th> */}
            <th>Author</th>
            <th>Topic</th>
            <th>Date Posted</th>
            <th>Read Time</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}
