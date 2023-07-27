"use client";
import React from "react";
export default function page({ params }) {
  const id = params.id;
  return <div>Soy el id {id}</div>;
}
