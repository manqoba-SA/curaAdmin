import React from "react";
import { Container, Spinner } from "react-bootstrap";
import "./style.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <Spinner animation="border" />
    </div>
  );
}
