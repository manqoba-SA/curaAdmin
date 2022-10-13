import { collection, doc, setDoc } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useState } from "react";
import storage, { firestore } from "../../../../firebase/firebase";
import ArticlesTable from "./components/ArticlesTable";
import ArticleModalForm from "./components/Modal/ArticleModalForm";
import "./styles.css";

export default function Articles() {
  const [show, setShow] = useState(false);
  const [articleTitle, setArticleTitle] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");
  const [articleCategory, setArticleCategory] = useState("");
  const [articleImage, setArticleImage] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [percent, setPercent] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(articleTitle);

  const onSubmit = (e) => {
    e.preventDefault();
    const articleRef = collection(firestore, "articles");
    const article = {
      title: articleTitle,
      author: articleAuthor,
      category: articleCategory,
      image: articleImage,
      body: articleBody,
    };
    setDoc(doc(articleRef, articleTitle), article);
  };
  return (
    <div className="articles-screen">
      <h1 className="articles-screen-header">Manage Articles</h1>
      <div className="add-btn-wrap">
        <button className="articles-add-btn btn-primary" onClick={handleShow}>
          Add Article
        </button>
      </div>
      <ArticlesTable />
      <ArticleModalForm
        show={show}
        handleClose={handleClose}
        articleTitle={articleTitle}
        setArticleTitle={setArticleTitle}
        articleAuthor={articleAuthor}
        setArticleAuthor={setArticleAuthor}
        articleCategory={articleCategory}
        setArticleCategory={setArticleCategory}
        articleImage={articleImage}
        setArticleImage={setArticleImage}
        articleBody={articleBody}
        setArticleBody={setArticleBody}
        onSubmit={onSubmit}
      />
    </div>
  );
}
