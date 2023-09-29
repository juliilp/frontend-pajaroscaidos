import React from "react";

export default function PerfilUpdateComponent({
  texto,
  onChange,
  name,
  value,
  type,
  min,
  max,
}) {
  return (
    <article className="flex gap-4">
      <span>{texto}</span>
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        min={min}
        max={max}
      />
    </article>
  );
}
