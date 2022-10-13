// import { Button, Modal } from "bootstrap";
import React from "react";
import { Modal, Row } from "react-bootstrap";

export default function ArticleModalForm({
  show,
  handleClose,
  articleTitle,
  setArticleTitle,
  articleAuthor,
  setArticleAuthor,
  articleCategory,
  setArticleCategory,
  articleImage,
  setArticleImage,
  articleBody,
  setArticleBody,
  onSubmit,
}) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Article
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={articleTitle}
                onChange={(e) => setArticleTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                value={articleAuthor}
                onChange={(e) => setArticleAuthor(e.target.value)}
              />
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="form-control"
                id="category"
                value={articleCategory}
                onChange={(e) => setArticleCategory(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                accept="image/*"
                value={articleImage}
                onChange={(e) => setArticleImage(e.target[0]?.files[0])}
              />
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="description">Body</label>
              <textarea
                className="form-control"
                id="body"
                rows="3"
                value={articleBody}
                onChange={(e) => setArticleBody(e.target.value)}
              ></textarea>
            </div>
          </div>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={handleClose}>Close</Button> */}
        <button className="btn" onClick={onSubmit}>
          Submit
        </button>
        <button className="btn" onClick={handleClose}>
          {" "}
          Close{" "}
        </button>
      </Modal.Footer>
    </Modal>
  );
}
